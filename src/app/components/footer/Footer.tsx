"use client";
import Link from "next/link";
import React from "react";

export default function Footer() {
  const socialLinks = [
    {
      href: "https://web.facebook.com/ray.azzha/",
      title: "Go to my Facebook",
      icon: (
        <svg
          width="30"
          height="30"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-black hover:text-blue-600 transition-colors duration-300"
        >
          <path
            d="M17 2H14C12.67 2 11.4 2.53 10.46 3.46C9.53 4.4 9 5.67 9 7V10H6V14H9V22H13V14H16L17 10H13V7C13 6.73 13.1 6.48 13.29 6.29C13.48 6.11 13.73 6 14 6H17V2Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      href: "https://www.linkedin.com/in/ray-restu/",
      title: "Go to my LinkedIn",
      icon: (
        <svg
          width="30"
          height="30"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-black hover:text-blue-700 transition-colors duration-300"
        >
          <path
            d="M21 8V16C21 18.76 18.76 21 16 21H8C5.24 21 3 18.76 3 16V8C3 5.24 5.24 3 8 3H16C18.76 3 21 5.24 21 8Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 17V13.5V10"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11 17V13.75M11 10V13.75M11 13.75C11 10 17 10 17 13.75V17"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 7.01L7.01 6.99889"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      href: "https://www.instagram.com/rey.rstu/",
      title: "Go to my Instagram",
      icon: (
        <svg
          width="30"
          height="30"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-black hover:text-pink-500 transition-colors duration-300"
        >
          <path
            d="M12 16C14.21 16 16 14.21 16 12C16 9.79 14.21 8 12 8C9.79 8 8 9.79 8 12C8 14.21 9.79 16 12 16Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 16V8C3 5.24 5.24 3 8 3H16C18.76 3 21 5.24 21 8V16C21 18.76 18.76 21 16 21H8C5.24 21 3 18.76 3 16Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M17.5 6.51L17.51 6.49889"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <footer className="w-full h-20 flex justify-center items-center gap-5 bg-gray-100">
      {socialLinks.map((item, idx) => (
        <Link
          key={idx}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          title={item.title}
          className="flex items-center text-black hover:opacity-80"
        >
          {item.icon}
        </Link>
      ))}
    </footer>
  );
}
