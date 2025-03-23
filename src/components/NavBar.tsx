// components/NavBar.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 border-b border-gray-700">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Logo tatuażysty"
              width={308}
              height={42}
            />
          </Link>
        </div>

        {/* Hamburger (mobile) */}
        <div className="-mr-2 flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            {/* Ikonka hamburger */}
            <svg
              className="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                className={`${isOpen ? "hidden" : "block"}`}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                className={`${isOpen ? "block" : "hidden"}`}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Menu desktop */}
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link href="/portfolio" className="hover:text-gray-300">
            Portfolio
          </Link>
          <Link href="/about" className="hover:text-gray-300">
            O artyście
          </Link>
          <Link href="/blog" className="hover:text-gray-300">
            Blog
          </Link>
          <Link href="/aftercare" className="hover:text-gray-300">
            Pielęgnacja
          </Link>
          <Link href="/contact" className="hover:text-gray-300">
            Kontakt
          </Link>
        </div>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-2 pt-2 pb-3 space-y-1">
          <Link href="/" className="block hover:text-gray-300">
            Home
          </Link>
          <Link href="/portfolio" className="block hover:text-gray-300">
            Portfolio
          </Link>
          <Link href="/about" className="block hover:text-gray-300">
            O artyście
          </Link>
          <Link href="/blog" className="block hover:text-gray-300">
            Blog
          </Link>
          <Link href="/aftercare" className="block hover:text-gray-300">
            Pielęgnacja
          </Link>
          <Link href="/contact" className="block hover:text-gray-300">
            Kontakt
          </Link>
        </div>
      )}
    </nav>
  );
}
