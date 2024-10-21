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
  return (
    <div className="py-10 px-4 md:px-20">
      <h3 className="mb-6 text-2xl font-semibold">Latest articles</h3>
      <div className="flex bg-[#EFEEEB] p-3 justify-between rounded-xl items-center">
        <div className="buttons hidden sm:flex text-[#75716B]">
          <button className="px-4 py-3 rounded-lg bg-[#DAD6D1]  active:text-[#43403B] hover:text-[#43403B] transition-colors duration-400 ">
            Highlight
          </button>
          <button className="px-4 py-3 rounded-lg active:bg-[#DAD6D1]  active:text-[#43403B] hover:text-[#43403B] transition-colors duration-400">
            Cat
          </button>
          <button className="px-4 py-3 rounded-lg active:bg-[#DAD6D1]  active:text-[#43403B] hover:text-[#43403B] transition-colors duration-400">
            Inspiration
          </button>
          <button className="px-4 py-3 rounded-lg active:bg-[#DAD6D1]  active:text-[#43403B] hover:text-[#43403B] transition-colors duration-400">
            General
          </button>
        </div>
        <div className="w-full sm:w-[30%] flex flex-col gap-2">
          <div className="relative">
            <Input placeholder="Search" className="w-max-sm py-5 bg-white" />
            <Search className="absolute top-2 right-3 w-4" />
          </div>
          <div className="sm:hidden">
            <p className="text-[#75716B] font-medium">Category</p>
            <Select>
              <SelectTrigger className="py-5 text-[#75716B] bg-white">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Highlight">Highlight</SelectItem>
                <SelectItem value="Cat">Cat</SelectItem>
                <SelectItem value="Inspiration">Inspiration</SelectItem>
                <SelectItem value="general">General</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <article className="grid md:grid-cols-2 grid-rows-3 pt-10 gap-5">
        <BlogCard
          image={blogPosts[0].image}
          category={blogPosts[0].category}
          title={blogPosts[0].title}
          description={blogPosts[0].description}
          author={blogPosts[0].author}
          date={blogPosts[0].date}
        />
        <BlogCard
          image={blogPosts[1].image}
          category={blogPosts[1].category}
          title={blogPosts[1].title}
          description={blogPosts[1].description}
          author={blogPosts[1].author}
          date={blogPosts[1].date}
        />
        <BlogCard
          image={blogPosts[2].image}
          category={blogPosts[2].category}
          title={blogPosts[2].title}
          description={blogPosts[2].description}
          author={blogPosts[2].author}
          date={blogPosts[2].date}
        />
        <BlogCard
          image={blogPosts[3].image}
          category={blogPosts[3].category}
          title={blogPosts[3].title}
          description={blogPosts[3].description}
          author={blogPosts[3].author}
          date={blogPosts[3].date}
        />
        <BlogCard
          image={blogPosts[4].image}
          category={blogPosts[4].category}
          title={blogPosts[4].title}
          description={blogPosts[4].description}
          author={blogPosts[4].author}
          date={blogPosts[4].date}
        />
        <BlogCard
          image={blogPosts[5].image}
          category={blogPosts[5].category}
          title={blogPosts[5].title}
          description={blogPosts[5].description}
          author={blogPosts[5].author}
          date={blogPosts[5].date}
        />
      </article>
    </div>
  );
}

export default ArticlesSection;
