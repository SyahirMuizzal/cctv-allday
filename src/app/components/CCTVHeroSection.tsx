import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Camera, PhoneCall } from "lucide-react";

export default function CCTVHeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white overflow-hidden flex items-center">
      <div className="max-w-6xl mx-auto px-6 py-24 text-center">
        {/* BADGE */}
        <span className="inline-block bg-blue-500/20 text-blue-400 px-4 py-1 rounded-full text-sm mb-6">
          CCTV-AllDay Distributor & Instalasi CCTV Profesional
        </span>

        {/* HEADLINE */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Amankan Rumah & Bisnis Anda <br />
          dengan <span className="text-blue-400">CCTV Berkualitas</span>
        </h1>

        {/* DESCRIPTION */}
        <p className="text-slate-300 mb-10 text-lg max-w-2xl mx-auto">
          CCTV-AllDay menyediakan paket CCTV lengkap dengan instalasi
          profesional, garansi resmi, dan support teknis 24 jam.
        </p>

        {/* FEATURES */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-10 text-slate-300">
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="text-blue-400" size={20} />
            <span>Garansi Resmi</span>
          </div>

          <div className="flex items-center justify-center gap-2">
            <Camera className="text-blue-400" size={20} />
            <span>Resolusi HD - 4K</span>
          </div>

          <div className="flex items-center justify-center gap-2">
            <PhoneCall className="text-blue-400" size={20} />
            <span>Support 24 Jam</span>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <Link
            href="https://wa.me/6289603161196"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 transition px-8 py-4 rounded-xl font-semibold shadow-lg"
          >
            Konsultasi Gratis Sekarang
          </Link>

          <Link
            href="#paket"
            className="border border-white hover:bg-white/10 transition px-8 py-4 rounded-xl font-semibold"
          >
            Lihat Paket
          </Link>
        </div>

        {/* IMAGE BELOW HERO */}
        <div className="relative mx-auto max-w-4xl">
          <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>

          <Image
            src="/CCTV-ALLDAY-IMAGES/Logo-CCTVALLDAY-1.jpeg"
            alt="CCTV-AllDay"
            width={1000}
            height={600}
            priority
            className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
