"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-10 h-10">
            <Image
              src="/CCTV-ALLDAY-IMAGES/logo-cctvallday.jpeg"
              alt="Logo CCTV AllDay"
              fill
              className="object-cover rounded-full"
            />
          </div>

          <span className="text-lg font-bold text-white tracking-wide">
            CCTV<span className="text-blue-400">ALL-DAY</span>
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <Link href="/" className="hover:text-blue-400 transition">
            Home
          </Link>

          <Link href="/etalase" className="hover:text-blue-400 transition">
            Produk
          </Link>

          {/* <Link href="#paket" className="hover:text-blue-400 transition">
            Paket
          </Link> */}

          <Link href="#contact" className="hover:text-blue-400 transition">
            Kontak
          </Link>

          <Link
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 text-white transition px-4 py-2 rounded-lg font-semibold"
          >
            Konsultasi
          </Link>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden bg-slate-900 border-t border-slate-800 overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        <div className="px-6 flex flex-col gap-4 text-sm text-slate-300">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-400"
          >
            Home
          </Link>

          <Link
            href="/etalase"
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-400"
          >
            Produk
          </Link>

          {/* <Link
            href="#paket"
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-400"
          >
            Paket
          </Link> */}

          <Link
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-400"
          >
            Kontak
          </Link>

          <Link
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white text-center py-2 rounded-lg font-semibold"
          >
            Konsultasi
          </Link>
        </div>
      </div>
    </header>
  );
}
