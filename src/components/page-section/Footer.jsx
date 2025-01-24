import { Linkedin, Github, Twitter } from "lucide-react";
export function Footer() {
  return (
    <footer className="py-11 px-4 md:px-20 bg-[#EFEEEB]">
      <div className="flex flex-col md:justify-between md:flex-row items-center">
        <div className="flex items-center gap-3">
          <p className="mr-3">Get in touch</p>
          <a>
            <Linkedin />
          </a>
          <a>
            <Github />
          </a>
          <a>
            <Twitter />
          </a>
        </div>
        <a href="" className="mt-4 md:mt-0 hover:underline">
          Home Page
        </a>
      </div>
    </footer>
  );
}
