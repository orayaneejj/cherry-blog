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
import { BlogCard } from "./BlogCard";

function ArticlesSection() {
  const categories = ["Highlight", "Cat", "Inspiration", "General"];
  const [activeCategory, setActiveCategory] = useState("Highlight");
  const [postList, setPostList] = useState([]);

  const getPostList = async () => {
    try {
      const categoryQuery =
        activeCategory !== "Highlight" ? `?category=${activeCategory}` : "";
      const results = await axios.get(
        `https://blog-post-project-api.vercel.app/posts?${categoryQuery}`
      );
      setPostList(results.data.posts);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPostList();
  }, [activeCategory]);

  const handleCategoryClicked = (category) => {
    setActiveCategory(category);
  };

  return (
    <section className="py-10 px-7 lg:px-20">
      <h3 className="mb-6 text-2xl font-semibold">Latest articles</h3>
      <div className="flex bg-[#EFEEEB] p-3 justify-between rounded-xl items-center">
        <div className="hidden lg:flex space-x-2">
          {categories.map((category) => (
            <button
              onClick={() => handleCategoryClicked(category)}
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
            <Input placeholder="Search" className="w-max-sm py-5 bg-white" />
            <Search className="absolute top-2 right-3 w-4" />
          </div>
          <div className="lg:hidden flex flex-col gap-2">
            <p className="text-[#75716B] font-medium">Category</p>
            <Select>
              <SelectTrigger className="py-5 text-[#75716B] bg-white">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem
                    key={category}
                    value={category}
                    onValueChange={category}
                  >
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

      <div className="view-more flex justify-center mt-20 mb-12">
        <button className="hover:underline font-semibold">View More</button>
      </div>
    </section>
  );
}

export default ArticlesSection;
