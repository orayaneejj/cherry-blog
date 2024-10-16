import { useState } from "react";
import "./App.css";
import myPicture from "./assets/person.jpg";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="flex justify-between items-center py-2 px-4 sm:px-8 lg:px-16 border-b">
      <a href="" className="text-lg">
        <span className="font-medium">CR</span>
        <span className="text-[#ff0000] font-medium">.</span>
      </a>

      <div className="hidden sm:flex gap-2">
        <button className="px-7 py-2 border border-black rounded-full text-xs">
          Log in
        </button>
        <button className="px-7 py-2 border border-black rounded-full text-xs bg-black text-white ">
          Sign up
        </button>
      </div>
      <section className="hamberger-menu sm:hidden">
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

function HeroSection() {
  return (
    <main className="flex justify-center px-4 py-8 sm:py-13">
      <div className="flex flex-col sm:flex-row justify-around items-center gap-8 max-w-6xl">
        <div className="text-center sm:text-right max-w-sm">
          <h1 className="text-2xl sm:text-3xl font-semibold">
            Exploring,
            <br className="max-sm:hidden" />
            Sharing
            <br />
            Film Journey
          </h1>
          <p className="text-xs mt-3 text-[#75716B]">
            Join me in uncovering the magic of storytelling and the art of
            filmmaking.
          </p>
        </div>

        <img src={myPicture} alt="Author" className="max-h-96 w-auto" />

        <div className="max-w-sm">
          <div className="mb-2">
            <p className="text-xs text-[#75716B]">-Author</p>
            <h3 className="text-lg font-semibold">Orayanee Janjaeng</h3>
          </div>
          <div className="text-xs text-[#75716B] space-y-4">
            <p>
              I am a film studies graduate with a deep love for cinema and a
              passion for learning coding. I enjoy exploring the fascinating
              world of films and sharing interesting insights.
            </p>
            <p>
              As I explore coding, I strive to combine my love for cinema with
              my tech skills, creating a space to discuss filmmaking and its
              cultural impact. Join me on this journey as I share my insights at
              the exciting intersection of film and technology!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <NavBar />
      <HeroSection />
    </div>
  );
}
