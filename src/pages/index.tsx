/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { Inter } from "next/font/google";
import Button from "@/components/ui/Button";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div>
      <h1 className="font-bold text-3xl">Hi! 👋 I'm Avi.</h1>
      </div>
      <div className="flex justify-center items-center h-screen">
        <Button>Default Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="success">Success Button</Button>
        <Button variant="danger">Danger Button</Button>
      </div>
    </>
  );
}
