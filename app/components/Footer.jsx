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
import { default as ATag, default as ATagWB } from "./ATagWB";

export default function Footer() {
  return (
    <div className="px-pad mt-6  py-10">
      <div className="grid grid-cols-4  text-f-text">
        <div>
          <ul className="grid gap-3">
            <li className="">
              <Image src={logo} alt="logo" width={50} height={20} />
            </li>

            <li>Our Website Link</li>
            <li>আমাদের সাথে কানেক্টেড থাকো</li>
            <li>
              <ul className="flex items-center gap-5">
                <li className="bg-white p-2 rounded-md">
                  <ATagWB link={"https://www.facebook.com/"}>
                    <FaFacebookF className="text-blue  text-3xl" />
                  </ATagWB>
                </li>
                <li className="bg-white p-2 rounded-md">
                  <ATagWB link={"https://www.youtube.com/"}>
                    <FaYoutube className="text-red-500  text-3xl" />
                  </ATagWB>
                </li>
                <li className="bg-white p-2 rounded-md">
                  <ATagWB link={"https://www.instagram.com/"}>
                    <FaInstagram className="text-red-400  text-3xl" />
                  </ATagWB>
                </li>
                <li className="bg-white p-2 rounded-md">
                  <ATagWB link={"https://bd.linkedin.com/"}>
                    <FaLinkedinIn className="text-blue  text-3xl" />
                  </ATagWB>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="">
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
        <div>
          <h1 className="mb-5 font-extrabold text-2xl">Contact</h1>
          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-5">
              <span>
                <ATag link={"tel:+8801956180989"}>
                  <FaPhoneAlt />
                </ATag>
              </span>
              <span>
                <ATag link={"tel:+8801956180989"}>+8801956180989</ATag>
              </span>
            </li>
            <li className="flex items-center gap-5">
              <span>
                <ATag link={"mailto:softtechtechnology12@gmail.com"}>
                  <FaEnvelope />
                </ATag>
              </span>
              <span>
                <ATag link={"mailto:softtechtechnology12@gmail.com"}>
                  softtechtechnology12@gmail.com
                </ATag>
              </span>
            </li>
            <li className="flex items-center gap-5">
              <span>
                <ATagWB link={"https://maps.app.goo.gl/3ndum2q7DTXLMXrW8"}>
                  <FaMapMarkerAlt />
                </ATagWB>
              </span>
              <span>
                <ATagWB link={"https://maps.app.goo.gl/3ndum2q7DTXLMXrW8"}>
                  MTB, BUILDING, Level-13 Sheikh Hasina Software Technology
                  Park, Jessore-7400, Bangladesh
                </ATagWB>
              </span>
            </li>
          </ul>
        </div>
        <div>
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
      <div className="flex justify-between items-center text-f-text">
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
