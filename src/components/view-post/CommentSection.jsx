import { Textarea } from "@/components/ui/textarea";
export function CommentSection({ setAlertDialog }) {
  const comments = [
    {
      id: 1,
      author: "Jacob Lash",
      timestamp: "12 September 2024 at 18:30",
      content:
        "I loved this article! It really explains why my cat is so independent yet loving. The purring section was super interesting.",
    },
    {
      id: 2,
      author: "Ahri",
      timestamp: "12 September 2024 at 18:30",
      content:
        "Such a great read! I've always wondered why my cat slow blinks at me—now I know it's her way of showing trust!",
    },
    {
      id: 3,
      author: "Mimi mama",
      timestamp: "12 September 2024 at 18:30",
      content:
        "This article perfectly captures why cats make such amazing pets. I had no idea their purring could help with healing. Fascinating stuff!",
    },
  ];
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Comment</h2>
      <Textarea placeholder="What are your thoughts?" className="mb-4" />
      <div className="flex justify-end">
        <button
          className="px-4 py-2 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
          onClick={() => setAlertDialog(true)}
        >
          Send
        </button>
      </div>
      <div className="space-y-6 pt-4">
        {comments.map((comment, index) => (
          <div key={comment.id}>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex-shrink-0 overflow-hidden">
                <img
                  src={`https://robohash.org/${Math.random()}.png`}
                  alt="Random Profile"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 space-y-2">
                <div className="flex gap-2 flex-col md:flex-row md:items-center">
                  <span className="font-semibold text-lg">
                    {comment.author}
                  </span>
                  <span className="text-sm text-gray-500">
                    {comment.timestamp}
                  </span>
                </div>
                <p className="text-gray-600">{comment.content}</p>
              </div>
            </div>
            {index < comments.length - 1 && (
              <div className="my-6 border-t border-gray-200" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
