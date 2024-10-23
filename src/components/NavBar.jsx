import { useState } from "react";
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
      <a href="/" className="text-xl">
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
