import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { NavBar } from "@/components/NavBar";
import { Textarea } from "@/components/ui/textarea";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { Linkedin, Github, Twitter } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

function ViewPostPage() {
  const shareLink = encodeURI(window.location.href);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [img, setImg] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [likes, setLikes] = useState(0);
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const params = useParams();
  const formattedDate = new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const getPost = async () => {
    try {
      const response = await axios.get(
        `https://blog-post-project-api.vercel.app/posts/${params.postID}`
      );
      setImg(response.data.image);
      setCategory(response.data.category);
      setDate(response.data.date);
      setTitle(response.data.title);
      setDescription(response.data.description);
      setAuthor(response.data.author);
      setLikes(response.data.likes);
      setContent(response.data.content);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPost();
  }, []);
  return (
    <>
      <NavBar />
      <div className="page bg-[#F9F8F6] py-8 px-7 md:px-20">
        <div className="post flex flex-col justify-center">
          <div className="markdown">
            <img src={img} />
            <span>{category}</span>
            <span>{formattedDate}</span>
            <p>{title}</p>
            <p>{description}</p>
            <p>Author: {author}</p>
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
          <div className="member-feature">
            <div className="interaction flex justify-between">
              <Like likesCount={likes} setAlertDialog={setIsAlertOpen} />
              <div className="share flex">
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
                          <span
                            style={{ fontSize: "20px", fontWeight: "bold" }}
                          >
                            ×
                          </span>
                        </button>
                      </div>
                    ));
                  }}
                  className="px-7 py-2 border border-black rounded-full font-medium bg-white"
                >
                  Copy Link
                </button>
                <div className="flex">
                  <a>
                    <Linkedin />
                  </a>
                  <a>
                    <Github />
                  </a>
                  <a>
                    <Twitter />
                  </a>
                </div>
              </div>
            </div>
            <div className="comment">
              <p>Comment</p>
              <Textarea placeholder="What are your thoughts?" />
              <button className="px-7 py-2 border bg-black text-white rounded-full font-medium">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
      <AlertDialogState
        alertDialog={isAlertOpen}
        setAlertDialog={setIsAlertOpen}
      />
      <Footer />
    </>
  );
}
function AlertDialogState({ alertDialog, setAlertDialog }) {
  return (
    <AlertDialog open={alertDialog} onOpenChange={setAlertDialog}>
      {/* <AlertDialogTrigger>Open</AlertDialogTrigger> */}
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
function Like({ likesCount, setAlertDialog }) {
  return (
    <button
      className="px-7 py-2 border border-black rounded-full font-medium bg-white"
      onClick={() => setAlertDialog(true)}
    >
      Likes {likesCount}
    </button>
  );
}
export default ViewPostPage;
