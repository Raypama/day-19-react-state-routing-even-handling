"use client";
import { navTypes } from "@/types/home";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { useAuth } from "@/context/authContext";

export default function Navigation() {
  const pathname = usePathname();
  const router = useRouter();
  const { isLoggedIn, email, logout } = useAuth();
  const [showLogout, setShowLogout] = useState(false);

  const navList: navTypes[] = [
    { title: "About", url: "/about" },
    { title: "Skills", url: "/skills" },
    { title: "Hobbies", url: "/hobbies" },
    { title: "Projects", url: "/projects" },
  ];

  return (
    <header className="h-12 bg-cyan-950 text-white flex items-center justify-between px-4 relative">
      <h1
        className={`transition-colors duration-200 font-semibold hover:text-cyan-300 ${
          pathname === "/" ? "text-cyan-600 font-bold" : ""
        }`}
      >
        <Link href="/">Rai Restu Pama</Link>
      </h1>

      <nav className="flex items-center gap-4">
        <ul className="flex gap-4">
          {navList.map((item, idx) => (
            <li key={idx}>
              <Link
                href={item.url}
                className={`transition-colors duration-200 font-semibold hover:text-cyan-300 ${
                  pathname === item.url ? "text-cyan-600 font-bold" : ""
                }`}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        {!isLoggedIn ? (
          <div className="flex gap-3">
            <Link href="/login" className="px-3 py-1 bg-cyan-700 rounded hover:bg-cyan-600 transition">
              Login
            </Link>
            <Link href="/register" className="px-3 py-1 bg-cyan-700 rounded hover:bg-cyan-600 transition">
              Register
            </Link>
          </div>
        ) : (
          <div className="relative">
            <button
              onClick={() => setShowLogout(!showLogout)}
              className="font-semibold hover:text-cyan-300"
            >
              {email}
            </button>

            {showLogout && (
              <div className="absolute right-0 mt-2 bg-white text-black rounded shadow-md py-2 px-3 z-20">
                <button onClick={logout} className="hover:text-red-500 transition">
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </nav>
    </header>
  );
}
