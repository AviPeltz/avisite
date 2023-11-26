/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { Inter } from "next/font/google";
import Button from "@/components/ui/Button";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div>
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
              {/*<!-- Brand/Logo -->*/}
              <a href="#" className="text-white text-lg font-bold">Avi Peltz</a>

              {/*<!-- Navigation Links -->*/}
              <div className="space-x-4">
                <a href="#" className="text-white hover:text-gray-300">Home</a>
                <a href="#" className="text-white hover:text-gray-300">Projects</a>
                <a href="#" className="text-white hover:text-gray-300">Blog</a>
                <a href="#" className="text-white hover:text-gray-300">Contact</a>
              </div>
            </div>
          </nav>
        </div>
      <div className="flex justify-center">
        
        <h1 className="p-2 font-bold text-3xl">Hi! 👋 I'm Avi.</h1>
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
