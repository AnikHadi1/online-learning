"use client";
import logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaAlignLeft } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import Profile from "./Profile";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="hidden lg:flex gap-3 justify-between  px-pad  bg-gradient-to-r from-start-nav to-end-nav py-3 ">
        <div className="flex items-center gap-3 ">
          <span className="shadow-md rounded-full">
            <Link href="/">
              {" "}
              <Image src={logo} alt="Online learning" />
            </Link>
          </span>
          <Link href="/">
            <span className="text-white text-3xl">Online Learning</span>
          </Link>
        </div>
        <div className="flex items-center gap-5 my-auto text-white">
          <ul className="flex justify-center items-center my-auto gap-3">
            <li>
              <Link href="/academic">Academic</Link>
            </li>
            <li>
              <Link href="/courses">Courses</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
          <div className="h-4 border border-white"></div>
          <Profile />
        </div>
      </div>

      <div className={`lg:hidden px-6 py-8 bg-gradient-to-r from-start-nav to-end-nav ${open ? "h-screen": ""}`}>
        <div className="flex justify-between items-center md:px-10">
          <div className="flex items-center gap-3 ">
            <span className="shadow-md rounded-full">
              <Link href="/">
                {" "}
                <Image src={logo} alt="Online learning" />
              </Link>
            </span>
            <Link href="/">
              <span className="text-white text-3xl">Online Learning</span>
            </Link>
          </div>
          <div className="text-white text-4xl px-3 py-2 bg-[#fff5] w-fit rounded-lg ">
            {!open ? (
              <span>
                <FaAlignLeft onClick={() => setOpen(!open)} />
              </span>
            ) : (
              <span>
                <IoMdClose onClick={() => setOpen(!open)} />
              </span>
            )}
          </div>
        </div>

        {open && (
          <div className="flex flex-col justify-center items-center gap-5 mt-10 text-white ">
            <Profile />
            <ul className="flex flex-col justify-center mt-10  gap-10">
              <li>
                <Link href="/academic" onClick={()=> setOpen(!open)}>Academic</Link>
              </li>
              <li>
                <Link href="/courses" onClick={()=> setOpen(!open)}>Courses</Link>
              </li>
              <li>
                <Link href="/contact" onClick={()=> setOpen(!open)}>Contact</Link>
              </li>
              <li>
                <Link href="/about" onClick={()=> setOpen(!open)}>About</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
