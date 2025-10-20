'use client';
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type Project = {
  title: string;
  description: string;
  demo: string;
  img: string;
};

const projects: Project[] = [
  {
    title: "Ur PetCare",
    description: "Website for pet lovers online",
    demo: "https://ur-pet-care.vercel.app",
    img: "/assets/Urpetcare.png",
  },
  {
    title: "Kenangan Senja",
    description: "Online web menu for coffee shop",
    demo: "https://rai-restu.vercel.app",
    img: "/assets/kenangansenja.png",
  },
  {
    title: "Profile Web",
    description: "This is my second profile website.",
    demo: "https://profile-web-iota-eight.vercel.app/",
    img: "/assets/second-web-portofolio.png",
  },
];

export default function ProjectPage() {
  const [search, setSearch] = useState("");

  const filteredProjects = projects.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen flex flex-col items-center bg-gray-50 text-gray-900">
      <section className="w-full max-w-5xl p-6">
        <h1 className="text-3xl font-bold text-center mb-6">My Projects</h1>

        <input
          type="text"
          placeholder="Search project..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border border-gray-400 rounded-md px-3 py-2 mb-8 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((card, idx) => (
              <div
                key={idx}
                className="bg-white shadow-md rounded-md p-4 hover:shadow-xl transition"
              >
                <Image
                  src={card.img}
                  alt={card.title}
                  width={400}
                  height={200}
                  className="rounded-md w-full h-40 object-cover mb-3"
                />
                <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{card.description}</p>
                <Link
                  href={card.demo}
                  target="_blank"
                  className="text-blue-500 hover:text-blue-700 font-medium"
                >
                  Live Demo →
                </Link>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600 col-span-full">
              No project found.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
