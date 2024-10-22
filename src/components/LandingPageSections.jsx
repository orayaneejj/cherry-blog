import authorImage from "/src/assets/author-image.jpg";
import { useState } from "react";
import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";
import { Instagram } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AlignJustify } from "lucide-react";
export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="flex justify-between items-center py-5 md:py-3 px-7 md:px-20 border-b">
      <a href="" className="text-xl">
        <span className="font-medium">CR</span>
        <span className="text-[#ff0000] font-medium">.</span>
      </a>

      <div className="hidden md:flex gap-2">
        <button className="px-7 py-2 border border-black rounded-full">
          Log in
        </button>
        <button className="px-7 py-2 border border-black rounded-full bg-black text-white ">
          Sign up
        </button>
      </div>
      <section className="hamberger-menu md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <AlignJustify />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[100vw] mt-5 flex flex-col items-center">
            <DropdownMenuItem>
              <button className="w-72 py-2 border border-black rounded-full text-black font-medium">
                Log in
              </button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <button className="w-72 py-2 border border-black rounded-full bg-black text-white font-medium">
                Sign up
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </section>
    </nav>
  );
}

export function HeroSection() {
  return (
    <main className="py-8 px-7 md:px-20">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 md:gap-6">
        <div className="text-center lg:text-right max-w-sm">
          <h1 className="text-3xl font-semibold">
            Stay <br className="hidden md:inline" />
            Informed,
            <br className="hidden md:inline" /> <br className="md:hidden" />
            Stay Inspired
          </h1>
          <p className="mt-4 text-[#75716B]">
            Join me in uncovering the magic of storytelling and the art of
            filmmaking.
          </p>
        </div>

        <div className="max-w-sm">
          <img
            src={authorImage}
            alt="Person with a cat"
            className="object-cover rounded-lg h-[530px]"
          />
        </div>

        <div className="max-w-sm">
          <div className="mb-4">
            <p className="text-xs text-[#75716B]">-Author</p>
            <h3 className="text-2xl font-semibold">Thompson P.</h3>
          </div>
          <div className="text-[#75716B] space-y-4">
            <p>
              I am a pet enthusiast and freelance writer who specializes in
              animal behavior and care. With a deep love for cats, I enjoy
              sharing insights on feline companionship and wellness.
            </p>
            <p>
              When I'm not writing, I spend time volunteering at my local animal
              shelter, helping cats find loving homes.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
export function Footer() {
  return (
    <footer className="py-11 px-4 md:px-20 bg-[#EFEEEB]">
      <div className="flex flex-col md:justify-between md:flex-row items-center">
        <div className="flex items-center gap-3">
          <p className="mr-3">Get in touch</p>
          <Linkedin />
          <Github />
          <Instagram />
        </div>
        <a href="" className="mt-4 md:mt-0 hover:underline">
          Home Page
        </a>
      </div>
    </footer>
  );
}
