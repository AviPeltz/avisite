/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { Inter } from "next/font/google";
import LikeButton from "@/components/LikeButton";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div>
      <h1 className="font-bold text-3xl">Hi! 👋 I'm Avi.</h1>
      </div>
      <LikeButton />
    </>
  );
}
