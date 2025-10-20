"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  const aboutList = [
    { label: "Full Name", value: "Rai Restu Pama" },
    { label: "Date Of Birth", value: "December 30, 2000" },
    { label: "Age", value: "25 years old" },
    { label: "Nationality", value: "Indonesian" },
    { label: "Ethnicity", value: "Sundanese" },
    { label: "Gender", value: "Male" },
    { label: "Marital Status", value: "Single" },
    { label: "Height", value: "175 cm" },
    { label: "Weight", value: "67 kg" },
    { label: "Religion", value: "Moslem" },
    { label: "Address", value: "Gandul, Depok City" },
    {
      label: "Email",
      value: (
        <Link
          href="mailto:rayrestu7@gmail.com"
          className="text-blue-500 hover:underline"
        >
          rayrestu7@gmail.com
        </Link>
      ),
    },
  ];

  return (
    <main className="flex flex-col items-center justify-center py-10 px-6 bg-gray-50 text-gray-800">
      <section className="w-full max-w-5xl flex flex-col md:flex-row items-start gap-10">
        <Image
          src="/assets/miniLogo.png"
          alt="Rey picture"
          width={380}
          height={380}
          className="rounded-xl object-cover shadow-lg"
        />

        <div className="flex-1">
          <h2 className="text-3xl font-semibold mb-4 text-gray-600">
            This is Details Part
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Hi my name Rai Restu Pama, I am someone with a background as a{" "}
            <span className="text-cyan-600 font-semibold">
              photography assistant
            </span>
            , who is currently trying to transition into becoming a programmer,
            working either remotely or onsite. I am the second child of two
            siblings, an Indonesian citizen of Sundanese ethnicity. I am 25
            years old, 175 cm tall, and weigh 67 kg.
          </p>

          <ul className="space-y-2">
            {aboutList.map((item, index) => (
              <li key={index}>
                <span className="font-semibold text-gray-900">
                  {item.label} :
                </span>{" "}
                {item.value}
              </li>
            ))}
          </ul>

          <Link
            href="/"
            className="inline-block mt-6 text-cyan-700 hover:text-cyan-500 transition-colors"
          >
            ← Back to Home Pages
          </Link>
        </div>
      </section>

    </main>
  );
}
