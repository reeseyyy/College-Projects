import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/router";

export default function SelectTemplatePage() {
  const [darkMode, setDarkMode] = useState(false);
  const router = useRouter();

  const templates = [
    { src: "/image1.png", alt: "Template 1", link: "/template1" },
    { src: "/image2.png", alt: "Template 2", link: "/template2" },
    { src: "/image3.png", alt: "Template 3", link: "/template3" },
  ];

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
        <h1 className="text-3xl font-bold text-center mt-4">Select a Template from the list</h1>
        <div className="flex space-x-6 mt-6">
          {templates.map((template, index) => (
            <a key={index} href={template.link}>
              <Image src={template.src} alt={template.alt} width={200} height={250} className="rounded-lg shadow-lg hover:scale-105 transition-transform" />
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
