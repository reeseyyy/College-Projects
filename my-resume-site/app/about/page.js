"use client"; // ✅ Enables client-side rendering

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function AboutPage() {
  const [darkMode, setDarkMode] = useState(false);
  const router = useRouter();

  // Load dark mode preference from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme === "true") {
      setDarkMode(true);
    }
  }, []);

  // Toggle dark mode and save preference
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
  };

  const members = [
    { name: "Alice Johnson", image: "/default.png" },
    { name: "Bob Smith", image: "/default.png" },
    { name: "Charlie Davis", image: "/default.png" },
  ];

  return (
    <div className={darkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"}>
      <header className="flex justify-between items-center p-4 border-b border-gray-300 dark:border-gray-700">
        <div></div> {/* Empty div to keep spacing correct */}
        <Button onClick={toggleDarkMode}>
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </Button>
      </header>

      <main className="flex flex-col items-center justify-center min-h-screen p-6">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="mt-4 max-w-2xl text-center">
          Meet our team! These are the awesome people behind the project.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member, index) => (
            <div key={index} className="flex items-center space-x-4 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-lg">
              <Image src={member.image} alt={member.name} width={50} height={50} className="rounded-full" />
              <span className="text-lg font-medium">{member.name}</span>
            </div>
          ))}
        </div>

        <Button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700" onClick={() => router.push("/")}>
          Back to Home
        </Button>
      </main>
    </div>
  );
}
