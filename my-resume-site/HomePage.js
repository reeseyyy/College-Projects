import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"}>
      <header className="flex justify-between items-center p-4 border-b border-gray-300 dark:border-gray-700">
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
          </ul>
        </nav>
        <Button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </Button>
      </header>
      <main className="flex flex-col items-center justify-center min-h-screen p-4">
        <Image src="/home-logo.png" alt="Resume Builder" width={200} height={200} />
        <h1 className="text-3xl font-bold text-center mt-4">Your resume in three easy steps</h1>
        <p className="text-center mt-4 max-w-2xl">
          Resume builder tools that assemble well-formatted resume. Through a resume builder, you can create a
          professional-looking resume in a few easy steps. This resume builder offers different template options,
          so you can select the template that best fits your needs and style.
        </p>
        <ol className="mt-6 space-y-2 text-lg">
          <li className="flex items-center space-x-2">
            <span className="bg-gray-300 text-black px-3 py-1 rounded">1</span>
            <span>Select a template from our collection.</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="bg-gray-300 text-black px-3 py-1 rounded">2</span>
            <span>Build your resume using our easy-to-use resume builder.</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="bg-gray-300 text-black px-3 py-1 rounded">3</span>
            <span>Download your resume.</span>
          </li>
        </ol>
        <Button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Select Template</Button>
      </main>
    </div>
  );
}
