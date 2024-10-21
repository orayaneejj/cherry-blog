import authorImage from "/src/assets/author-image.jpg";
import { useState } from "react";
import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";
import { Instagram } from "lucide-react";
export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="flex justify-between items-center py-3 px-4 md:px-20 border-b">
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
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex flex-col gap-1"
        >
          <div className="rounded-full w-5 border border-black"></div>
          <div className="rounded-full w-5 border border-black"></div>
          <div className="rounded-full w-5 border border-black"></div>
        </button>
        {isMenuOpen && (
          <div className="absolute top-11 right-0 bg-white border rounded-md shadow-lg p-6 space-y-4 sm:hidden w-full">
            <button className="w-full px-4 py-2 border border-black rounded-full text-xs">
              Log in
            </button>
            <button className="w-full px-4 py-2 border border-black rounded-full text-xs bg-black text-white">
              Sign up
            </button>
          </div>
        )}
      </section>
    </nav>
  );
}

export function HeroSection() {
  return (
    <main className="flex justify-center py-8 px-20">
      <div className="flex flex-col md:flex-row justify-around items-center gap-6">
        <div className="text-center md:text-right max-w-sm">
          <h1 className="text-2xl md:text-3xl font-semibold">
            Stay <br className="max-md:hidden" />
            Informed,
            <br className="max-md:hidden" /> <br className="md:hidden" />
            Stay Inspired
          </h1>
          <p className="mt-3 text-[#75716B]">
            Join me in uncovering the magic of storytelling and the art of
            filmmaking.
          </p>
        </div>

        <img
          src={authorImage}
          alt="Person with a cat"
          className="h-[530px] object-cover rounded-lg max-w-sm"
        />

        <div className="max-w-sm">
          <div className="mb-2">
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
              When i’m not writing, I spends time volunteering at my local
              animal shelter, helping cats find loving homes.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
export function Footer() {
  return (
    <footer className="py-10 px-4 sm:px-8 md:px-20 bg-[#EFEEEB]">
      <div className="flex flex-col sm:justify-between sm:flex-row items-center">
        <div className="flex items-center gap-3">
          <p className="mr-3">Get in touch</p>
          <Linkedin />
          <Github />
          <Instagram />
        </div>
        <a href="" className="mt-4 sm:mt-0 hover:underline">
          Home Page
        </a>
      </div>
    </footer>
  );
}
