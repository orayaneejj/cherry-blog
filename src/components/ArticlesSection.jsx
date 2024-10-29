import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function BlogCard({ id, image, category, title, description, author, date }) {
  const formattedDate = new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const navigate = useNavigate();

  const handleClicked = () => {
    navigate(`/post/${id}`);
  };

  return (
    <div className="flex flex-col gap-4">
      <a className="relative h-[212px] sm:h-[360px]" onClick={handleClicked}>
        <img
          className="w-full h-full object-cover rounded-md"
          src={image}
          alt={title}
        />
      </a>
      <div className="flex flex-col">
        <div className="flex">
          <span className="bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-600 mb-2">
            {category}
          </span>
        </div>
        <a onClick={handleClicked}>
          <h2 className="text-start font-bold text-xl mb-2 line-clamp-2 hover:underline">
            {title}
          </h2>
        </a>
        <p className="text-muted-foreground text-sm mb-4 flex-grow line-clamp-3">
          {description}
        </p>
        <div className="flex items-center text-sm">
          <img
            className="w-8 h-8 rounded-full mr-2"
            src="https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449784/my-blog-post/xgfy0xnvyemkklcqodkg.jpg"
            alt={author}
          />
          <span>{author}</span>
          <span className="mx-2 text-gray-300">|</span>
          <span>{formattedDate}</span>
        </div>
      </div>
    </div>
  );
}

function ArticlesSection() {
  const categories = ["Highlight", "Cat", "Inspiration", "General"];
  const [activeCategory, setActiveCategory] = useState("Highlight");
  const [postList, setPostList] = useState([]);
  const [page, setPage] = useState(1);
  const [viewMore, setViewMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const getPostList = async () => {
    try {
      const categoryQuery =
        activeCategory !== "Highlight" ? `&category=${activeCategory}` : "";
      const response = await axios.get(
        `https://blog-post-project-api.vercel.app/posts?page=${page}&limit=6${categoryQuery}&keyword=${searchInput}`
      );
      setPostList((prevPosts) => [...prevPosts, ...response.data.posts]);
      setIsLoading(false);
      if (response.data.currentPage >= response.data.totalPages) {
        setViewMore(false);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    getPostList();
  }, [page, activeCategory, searchInput]);

  const handleViewMore = () => {
    setPage((prevPage) => prevPage + 1);
  };
  const navigate = useNavigate();
  return (
    <section className="py-10 px-7 lg:px-20">
      <h3 className="mb-6 text-2xl font-semibold">Latest articles</h3>
      <div className="flex bg-[#EFEEEB] p-3 justify-between rounded-xl items-center">
        <div className="hidden lg:flex space-x-2">
          {categories.map((category) => (
            <button
              onClick={() => {
                setActiveCategory(category);
                setPostList([]);
                setPage(1);
                setViewMore(true);
              }}
              key={category}
              className={`px-4 py-3 transition-colors rounded-sm text-sm text-muted-foreground font-medium ${
                activeCategory === category
                  ? "bg-[#DAD6D1] disabled"
                  : "bg-[#EFEEEB] hover:bg-muted"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="w-full lg:w-[30%] flex flex-col gap-2">
          <div className="relative">
            <Input
              placeholder="Search"
              className="w-max-sm py-5 bg-white"
              onChange={(e) => {
                setSearchInput(e.target.value);
                setPostList([]);
              }}
            />
            <Search className="absolute top-2 right-3 w-4" />
          </div>
          {searchInput.length > 0 && (
            <div className="bg-white absolute z-50 top-[815px] rounded-lg p-3 w-80 shadow-lg">
              <ul>
                {postList.map((post) => (
                  <li
                    key={post.id}
                    id={post.id}
                    onClick={() => {
                      navigate(`/post/${post.id}`);
                    }}
                    className="cursor-pointer px-2 py-1 hover:bg-gray-100 rounded-md"
                  >
                    {post.title}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="lg:hidden flex flex-col gap-2">
            <p className="text-[#75716B] font-medium">Category</p>
            <Select
              value={activeCategory}
              onValueChange={(value) => {
                setActiveCategory(value);
                setPostList([]);
                setPage(1);
                setViewMore(true);
              }}
            >
              <SelectTrigger className="py-5 text-[#75716B] bg-white">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <article className="grid lg:grid-cols-2 pt-10 gap-5">
        {postList.map((post) => (
          <BlogCard
            id={post.id}
            key={post.id}
            image={post.image}
            category={post.category}
            title={post.title}
            description={post.description}
            author={post.author}
            date={post.date}
          />
        ))}
      </article>

      {viewMore && (
        <div className="text-center mt-8">
          <button
            onClick={handleViewMore}
            className="hover:text-muted-foreground font-medium underline"
          >
            {isLoading ? "Loading..." : "View more"}
          </button>
        </div>
      )}
    </section>
  );
}

export default ArticlesSection;
