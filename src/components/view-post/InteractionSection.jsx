import { Linkedin, Github, Twitter, Facebook } from "lucide-react";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
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
      className="px-4 py-2 border border-black rounded-full font-medium bg-white hover:bg-gray-100 transition-colors max-sm:w-full"
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
export default InteractionSection;
