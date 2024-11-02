import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { Linkedin, Github, Twitter, Facebook } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import authorImage from "/src/assets/author-image.jpg";

function ViewPostPage() {
  const [post, setPost] = useState({
    image: "",
    category: "",
    date: "",
    title: "",
    description: "",
    author: "",
    likes: 0,
    content: "",
  });
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const params = useParams();
  const shareLink = encodeURI(window.location.href);

  useEffect(() => {
    const getPost = async () => {
      try {
        const response = await axios.get(
          `https://blog-post-project-api.vercel.app/posts/${params.postID}`
        );
        setPost(response.data);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };
    getPost();
  }, [params.postID]);

  const formattedDate = new Date(post.date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="min-h-screen flex flex-col bg-[#F9F8F6]">
      <NavBar />
      <main className="flex-grow py-8 px-4 md:px-8 lg:px-16 xl:px-20">
        <article className="max-w-7xl mx-auto">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-[400px] md:h-[600px] object-cover rounded-lg mb-8"
          />
          <div className="flex flex-col lg:flex-row lg:gap-12">
            <div className="lg:w-2/3">
              <div className="mb-6">
                <span className="bg-[#D7F2E9] text-[#12B279] px-3 py-1 rounded-full font-medium">
                  {post.category}
                </span>
                <span className="text-[#75716B] ml-4 font-medium">
                  {formattedDate}
                </span>
              </div>
              <h1 className="font-semibold text-3xl md:text-4xl mb-4">
                {post.title}
              </h1>
              <p className="text-lg mb-6">{post.description}</p>
              <div className="prose max-w-none">
                <ReactMarkdown>{post.content}</ReactMarkdown>
              </div>
              <InteractionSection
                likes={post.likes}
                setIsAlertOpen={setIsAlertOpen}
                shareLink={shareLink}
              />
              <CommentSection />
            </div>
            <aside className="lg:w-1/3 mt-8 lg:mt-0">
              <AuthorCard author={post.author} />
            </aside>
          </div>
        </article>
      </main>
      <AlertDialogState isOpen={isAlertOpen} setIsOpen={setIsAlertOpen} />
      <Footer />
      <Toaster />
    </div>
  );
}

function InteractionSection({ likes, setIsAlertOpen, shareLink }) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-[#EFEEEB] p-4 mt-8 rounded-2xl">
      <LikeButton likesCount={likes} setAlertDialog={setIsAlertOpen} />
      <div className="flex items-center gap-4 mt-4 sm:mt-0">
        <Toaster />
        <button
          onClick={() => {
            navigator.clipboard.writeText(shareLink);
            toast.custom((t) => (
              <div className="bg-green-500 text-white p-4 rounded-md flex justify-between items-start max-w-md w-full">
                <div>
                  <h2 className="font-bold text-lg mb-1">Copied!</h2>
                  <p className="text-sm">
                    This article has been copied to your clipboard.
                  </p>
                </div>
                <button
                  onClick={() => toast.dismiss(t)}
                  className="text-white hover:text-gray-200"
                >
                  <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                    ×
                  </span>
                </button>
              </div>
            ));
          }}
          className="px-7 py-2 border border-black rounded-full font-medium bg-white hover:bg-gray-100 transition-colors"
        >
          Copy Link
        </button>
        <SocialShareButtons shareLink={shareLink} />
      </div>
    </div>
  );
}

function LikeButton({ likesCount, setAlertDialog }) {
  return (
    <button
      className="px-4 py-2 border border-black rounded-full font-medium bg-white hover:bg-gray-100 transition-colors"
      onClick={() => setAlertDialog(true)}
    >
      Likes {likesCount}
    </button>
  );
}

function SocialShareButtons({ shareLink }) {
  const socialIcons = [
    {
      Icon: Facebook,
      href: `https://www.facebook.com/share.php?u=${shareLink}`,
    },
    {
      Icon: Linkedin,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${shareLink}`,
    },
    { Icon: Twitter, href: `https://www.twitter.com/share?&url=${shareLink}` },
  ];

  return (
    <div className="flex gap-2">
      {socialIcons.map(({ Icon, href }, index) => (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-800"
        >
          <Icon size={20} />
        </a>
      ))}
    </div>
  );
}

function CommentSection() {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Comment</h2>
      <Textarea placeholder="What are your thoughts?" className="mb-4" />
      <button className="px-4 py-2 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors">
        Send
      </button>
    </div>
  );
}

function AuthorCard({ author }) {
  return (
    <div className="bg-[#EFEEEB] rounded-3xl p-6">
      <div className="flex items-center mb-4">
        <img
          src={authorImage}
          alt={author}
          className="w-16 h-16 rounded-full object-cover mr-4"
        />
        <div>
          <p className="text-sm text-gray-600">Author</p>
          <h3 className="text-2xl font-bold">{author}</h3>
        </div>
      </div>
      <div className="text-gray-600 space-y-4">
        <p>
          I am a pet enthusiast and freelance writer who specializes in animal
          behavior and care. With a deep love for cats, I enjoy sharing insights
          on feline companionship and wellness.
        </p>
        <p>
          When I'm not writing, I spend time volunteering at my local animal
          shelter, helping cats find loving homes.
        </p>
      </div>
    </div>
  );
}

function AlertDialogState({ isOpen, setIsOpen }) {
  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default ViewPostPage;
