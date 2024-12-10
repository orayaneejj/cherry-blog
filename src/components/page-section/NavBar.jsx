import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AlignJustify } from "lucide-react";
import { useNavigate } from "react-router-dom";
export function NavBar() {
  const navigate = useNavigate();
  return (
    <nav className="flex justify-between items-center py-5 md:py-3 px-7 md:px-20 border-b">
      <a href="" className="text-xl" onClick={() => navigate("/")}>
        <span className="font-medium">CR</span>
        <span className="text-[#ff0000] font-medium">.</span>
      </a>


      <div className="hidden md:flex gap-2">
        <button className="px-7 py-2 border border-black rounded-full">
          Log in
        </button>
        <button
          className="px-7 py-2 border border-black rounded-full bg-black text-white"
          onClick={() => navigate("/signup")}
        >
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
              <button
                className="w-72 py-2 border border-black rounded-full bg-black text-white font-medium"
                onClick={() => navigate("/signup")}
              >
                Sign up
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </section>
    </nav>
  );
}
