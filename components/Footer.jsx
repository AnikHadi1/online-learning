import logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaYoutube,
} from "react-icons/fa";
import A from "./A";

export default function Footer() {
  return (
    <div className="lg:px-pad md:px-md-pad mt-6  py-10">
      <div className="grid sm:grid-cols-1  md:grid-cols-2 gap-y-5 lg:grid-cols-4 sm:px-sm-pad text-f-text gap-2 ">
        <div className="px-6">
          <ul className="grid gap-3  ">
            <li className="">
              <Image src={logo} alt="logo" width={50} height={20} />
            </li>

            <li>Our Website Link</li>
            <li>আমাদের সাথে কানেক্টেড থাকো</li>
            <li>
              <ul className="flex items-center gap-5">
                <li className="bg-white p-2 rounded-md">
                  <A target={"_blank"} link={"https://www.facebook.com/"}>
                    <FaFacebookF className="text-blue  text-3xl" />
                  </A>
                </li>
                <li className="bg-white p-2 rounded-md">
                  <A target={"_blank"} link={"https://www.youtube.com/"}>
                    <FaYoutube className="text-red-500  text-3xl" />
                  </A>
                </li>
                <li className="bg-white p-2 rounded-md">
                  <A target={"_blank"} link={"https://www.instagram.com/"}>
                    <FaInstagram className="text-red-400  text-3xl" />
                  </A>
                </li>
                <li className="bg-white p-2 rounded-md">
                  <A target={"_blank"} link={"https://bd.linkedin.com/"}>
                    <FaLinkedinIn className="text-blue  text-3xl" />
                  </A>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="px-6">
          <h1 className="mb-5 font-extrabold text-2xl">UseFull Link</h1>
          <ul className="flex flex-col gap-2">
            <li>
              <Link href="/#">Academic Program</Link>
            </li>
            <li>
              <Link href="/#">Our Related</Link>
            </li>
            <li>
              <Link href="/#">Carrier</Link>
            </li>
            <li>
              <Link href="/#">Different</Link>
            </li>
          </ul>
        </div>
        <div className="px-6">
          <h1 className="mb-5 font-extrabold text-2xl">Contact</h1>
          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-5">
              <span>
                <A link={"tel:+8801956180989"}>
                  <FaPhoneAlt />
                </A>
              </span>
              <span>
                <A link={"tel:+8801956180989"}>+8801956180989</A>
              </span>
            </li>
            <li className="flex items-center gap-5">
              <span>
                <A link={"mailto:softtechtechnology12@gmail.com"}>
                  <FaEnvelope />
                </A>
              </span>
              <span className="truncate">
                <A link={"mailto:softtechtechnology12@gmail.com"}>
                  softtechtechnology12@gmail.com
                </A>
              </span>
            </li>
            <li className="flex items-center gap-5">
              <span>
                <A
                  link={"https://maps.app.goo.gl/3ndum2q7DTXLMXrW8"}
                  target={"_blank"}
                >
                  <FaMapMarkerAlt />
                </A>
              </span>
              <span>
                <A
                  link={"https://maps.app.goo.gl/3ndum2q7DTXLMXrW8"}
                  target={"_blank"}
                >
                  MTB, BUILDING, Level-13 Sheikh Hasina Software Technology
                  Park, Jessore-7400, Bangladesh
                </A>
              </span>
            </li>
          </ul>
        </div>
        <div className="px-6">
          <h1 className="mb-5 font-extrabold text-2xl">Company Information</h1>
          <p className="mb-5">
            Trade licence No: <span>TRAD/DNCC/037245/2022</span>
          </p>
          <p>
            E-TIN Number : <span>197682866359</span>
          </p>
        </div>
      </div>
      <div className="border border-[#51598730] h-0 my-5" />
      <div className="flex justify-between items-center flex-col lg:flex-row gap-4 text-f-text">
        <ul className="flex gap-2 items-center ">
          <li>
            <Link href="/terms-conditions">Terms & Conditions</Link>
          </li>
          <li className="h-4 border border-f-text"></li>
          <li>
            <Link href="/refund-policy">Refund Policy</Link>
          </li>
          <li className="h-4 border border-f-text"></li>
          <li>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </li>
        </ul>
        <div>
          {new Date().getFullYear()} SoftTech Technologies Bangladesh Ltd
        </div>
      </div>
    </div>
  );
}
