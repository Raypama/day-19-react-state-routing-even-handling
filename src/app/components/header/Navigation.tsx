"use client";
import { navTypes } from "@/types/home";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Navigation() {
  const pathname = usePathname();

  const navList: navTypes[] = [
    { title: "About", url: "/about" },
    { title: "Skills", url: "/skills" },
    { title: "Hobbies", url: "/hobbies" },
    { title: "Projects", url: "/projects" },
  ];

  return (
    <header className="h-12 bg-cyan-950 text-white flex items-center justify-between px-4">
      <h1 className={`transition-colors duration-200 font-semibold hover:text-cyan-300 ${
                  pathname === "/"
                    ? "text-cyan-600 font-bold  "
                    : ""
                }`}>
        <Link href="/">Rai Restu Pama</Link>
      </h1>
      <nav>
        <ul className="flex gap-4">
          {navList.map((item, idx) => (
            <li key={idx}>
              <Link
                href={item.url}
                className={`transition-colors duration-200 font-semibold hover:text-cyan-300 ${
                  pathname === item.url
                    ? "text-cyan-600 font-bold  "
                    : ""
                }`}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
