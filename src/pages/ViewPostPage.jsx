import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { Toaster } from "@/components/ui/sonner";
import { AlertDialogAuth } from "@/components/auth/AlertDialogAuth";
import { NavBar } from "@/components/page-section/NavBar";
import { Footer } from "@/components/page-section/Footer";
import { AuthorCard } from "@/components/view-post/AuthorCard";
import { CommentSection } from "@/components/view-post/CommentSection";
import InteractionSection from "@/components/view-post/InteractionSection";
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
  const content = post.content.replace(/\\n/g, "\n");
  useEffect(() => {
    const getPost = async () => {
      try {
        const response = await axios.get(
          `https://blog-post-express.vercel.app/posts/${params.postId}`
        );
        setPost(response.data.data);
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
          <div className="flex flex-col lg:flex-row lg:gap-12 justify-between">
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
              <div className="markdown">
                <ReactMarkdown>{content}</ReactMarkdown>
              </div>
            </div>
            <aside className="mt-8 lg:mt-0 sticky top-0">
              <AuthorCard author={post.author} />
            </aside>
          </div>
          <div className="lg:w-2/3">
            {" "}
            <InteractionSection
              likes={post.likes}
              setIsAlertOpen={setIsAlertOpen}
              shareLink={shareLink}
            />
            <CommentSection setAlertDialog={setIsAlertOpen} />
          </div>
        </article>
      </main>
      <AlertDialogAuth isOpen={isAlertOpen} setIsOpen={setIsAlertOpen} />
      <Footer />
      <Toaster />
    </div>
  );
}

export default ViewPostPage;
