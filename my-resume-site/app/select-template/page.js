"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function SelectTemplatePage() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme === "true") {
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
  };

  const templates = [
    { src: "/image1.png", alt: "Template 1", link: "/select-template/template1" },
    { src: "/image2.png", alt: "Template 2", link: "/select-template/template2" },
    { src: "/image3.png", alt: "Template 3", link: "/select-template/template3" },
  ];

  return (
    <div className={darkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"}>
      <header className="flex justify-end p-4 border-b border-gray-300 dark:border-gray-700">
        <Button onClick={toggleDarkMode}>
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </Button>
      </header>
      <main className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-3xl font-bold text-center mt-4">Select a Template from the list</h1>
        <div className="flex space-x-6 mt-6">
          {templates.map((template, index) => (
            <Link key={index} href={template.link}>
              <Image 
                src={template.src} 
                alt={template.alt} 
                width={200} 
                height={250} 
                className="rounded-lg shadow-lg hover:scale-105 transition-transform" 
              />
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
