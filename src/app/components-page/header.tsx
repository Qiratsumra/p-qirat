"use client";
import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";
export default function Navbar() {
  const [isActive, setIsActive] = useState(false);
  return (

    <nav className=" py-2.5 bg-gradient-to-t bg-violet-500 from-purple-700 h-[60px]">
      <div className="flex justify-between text-white px-4 md:px20 items-center ">
        <div>
          <span className="text-2xl font-extrabold">logo</span>
        </div>
        <div className="space-x-12 items-center justify-center  hidden md:block">
          <Link href="/" className="hover:text-slate-600">
            Home
          </Link>
          <Link href="/components-page/projects" className="hover:text-slate-600">
            Projects
          </Link>
          <Link href="/components-page/skills" className="hover:text-slate-600">
            Skills
          </Link>
          <Link href="/components-page/contact" className="hover:text-slate-600">
            Contact
          </Link>
        </div>
        <CiMenuBurger
          onClick={() => setIsActive(true)}
          className={`${isActive ? "hidden" : "block"} text-black md:hidden`}
        />
        <RxCross2
          onClick={() => setIsActive(false)}
          className={`${isActive ? "block" : "hidden"} text-black md:hidden`}
        />
      </div>

      {isActive && (
        <div className="md:hidden  flex flex-col space-y-7 mt-4 pl-5 bg-gradient-to-t bg-violet-500 from-white via-purple-700  text-slate-900">
          <Link href="/" className="hover:text-slate-600">Home</Link>
          <Link href="/components-page/projects" className="hover:text-slate-600">Projects</Link>
          <Link href="/components-page/skills" className="hover:text-slate-600"> Skills</Link>
          <Link href="/components-page/contact" className="hover:text-slate-600"> Contact</Link>
        </div>
      )}
    </nav>

  );
}
