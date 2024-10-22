import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { blogPosts } from "../data/blogPosts";
import { useState } from "react";

function BlogCard({ image, category, title, description, author, date }) {
  return (
    <div className="flex flex-col gap-4">
      <a href="#" className="relative h-[212px] sm:h-[360px]">
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
        <a href="#">
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
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
}
function ArticlesSection() {
  const categories = ["Highlight", "Cat", "Inspiration", "General"];
  const [activeCategory, setActiveCategory] = useState("Highlight");

  const handleCategotyClicked = (category) => {
    setActiveCategory(category);
  };

  return (
    <section className="py-10 px-7 lg:px-20">
      <h3 className="mb-6 text-2xl font-semibold">Latest articles</h3>
      <div className="flex bg-[#EFEEEB] p-3 justify-between rounded-xl items-center">
        <div className="hidden lg:flex space-x-2">
          {categories.map((category) => (
            <button
              onClick={() => handleCategotyClicked(category)}
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
      <article className="grid lg:grid-cols-2 grid-rows-3 pt-10 gap-5">
        {blogPosts.map((post, index) => (
          <BlogCard
            key={index}
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
        <a className="hover:underline font-semibold">View More</a>
      </div>
    </section>
  );
}

export default ArticlesSection;
