// app/hobbies/page.tsx
import React from "react";

export default function HobbiesPage() {
  const hobbies = [
    {
      name: "Basketball",
      icon: (
        <svg
          width="24"
          height="24"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="#000000"
          className="mr-2"
        >
          <path
            d="M17.7357 20.1916C22.2597 17.0238 23.3592 10.7884 20.1914 6.2643C17.0237 1.74025 10.7882 0.640771 6.26415 3.80855C1.7401 6.97632 0.640621 13.2118 3.8084 17.7358C6.97617 22.2599 13.2116 23.3594 17.7357 20.1916Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.7357 20.1916L6.26416 3.80853"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      name: "Gym",
      icon: (
        <svg
          width="24"
          height="24"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="#000000"
          className="mr-2"
        >
          <path
            d="M7.4 7H4.6C4.26863 7 4 7.26863 4 7.6V16.4C4 16.7314 4.26863 17 4.6 17H7.4C7.73137 17 8 16.7314 8 16.4V7.6C8 7.26863 7.73137 7 7.4 7Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.4 7H16.6C16.2686 7 16 7.26863 16 7.6V16.4C16 16.7314 16.2686 17 16.6 17H19.4C19.7314 17 20 16.7314 20 16.4V7.6C20 7.26863 19.7314 7 19.4 7Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 12H16"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      name: "Coding",
      icon: (
        <svg
          width="24"
          height="24"
          strokeWidth="1.5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="#000000"
          className="mr-2"
        >
          <path
            d="M3.2 14.2222V4C3.2 2.89543 4.09543 2 5.2 2H18.8C19.9046 2 20.8 2.89543 20.8 4V14.2222M3.2 14.2222H20.8M3.2 14.2222L1.71969 19.4556C1.35863 20.7321 2.31762 22 3.64418 22H20.3558C21.6824 22 22.6414 20.7321 22.2803 19.4556L20.8 14.2222"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M14 6L16 8L14 10M10 6L8 8L10 10"
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
    <main className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-4">
      <section className="max-w-2xl w-full">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b border-gray-300 pb-2">
          Hobbies
        </h2>
        <ul className="space-y-3">
          {hobbies.map((hobby, idx) => (
            <li
              key={idx}
              className="flex items-center text-lg text-gray-700 bg-white rounded-lg shadow-sm hover:shadow-md transition-all p-3"
            >
              {hobby.icon}
              {hobby.name}
            </li>
          ))}
        </ul>
      </section>

      
    </main>
  );
}
