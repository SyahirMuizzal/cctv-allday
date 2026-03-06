import { ShieldCheck, Users, Wrench, BadgeCheck } from "lucide-react";
import Image from "next/image";

export default function CCTVAboutSection() {
  return (
    <section className="bg-slate-900 text-white py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* IMAGE */}
        <div className="flex justify-center mb-14">
          <div className="relative w-full max-w-3xl">
            <Image
              src="/CCTV-ALLDAY-IMAGES/BANER-CCTVALLDAY.jpeg"
              alt="Kamera CCTV CCTV-AllDay"
              width={900}
              height={600}
              priority
              className="w-full h-auto object-contain rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        {/* CONTENT */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-blue-400 font-semibold text-sm tracking-wider uppercase">
            Tentang Perusahaan
          </span>

          <h2 className="text-3xl lg:text-4xl font-bold mt-4 leading-tight">
            Solusi Keamanan CCTV Profesional
            <span className="block text-blue-400">Dipercaya Sejak 2015</span>
          </h2>

          <p className="text-slate-400 mt-6 leading-relaxed">
            CCTV-AllDay adalah perusahaan spesialis instalasi dan distribusi
            sistem keamanan CCTV dengan pengalaman lebih dari 10 tahun. Kami
            telah dipercaya oleh ratusan klien mulai dari rumah pribadi, toko,
            kantor hingga area industri.
          </p>
        </div>

        {/* STATISTIC */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-14 max-w-4xl mx-auto">
          <div className="bg-slate-800/60 border border-slate-700 p-6 rounded-xl text-center">
            <h3 className="text-3xl font-bold text-blue-400">500+</h3>
            <p className="text-slate-400 text-sm mt-1">Proyek Selesai</p>
          </div>

          <div className="bg-slate-800/60 border border-slate-700 p-6 rounded-xl text-center">
            <h3 className="text-3xl font-bold text-blue-400">10+</h3>
            <p className="text-slate-400 text-sm mt-1">Tahun Pengalaman</p>
          </div>

          <div className="bg-slate-800/60 border border-slate-700 p-6 rounded-xl text-center">
            <h3 className="text-3xl font-bold text-blue-400">300+</h3>
            <p className="text-slate-400 text-sm mt-1">Klien Aktif</p>
          </div>
        </div>

        {/* FEATURES */}
        <div className="grid sm:grid-cols-2 gap-8 mt-14 max-w-4xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="bg-blue-500/10 p-3 rounded-lg">
              <ShieldCheck className="text-blue-400" size={20} />
            </div>
            <div>
              <p className="font-semibold">Produk Original</p>
              <p className="text-sm text-slate-400">
                Menggunakan brand terpercaya dan bersertifikasi.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-blue-500/10 p-3 rounded-lg">
              <Users className="text-blue-400" size={20} />
            </div>
            <div>
              <p className="font-semibold">Teknisi Profesional</p>
              <p className="text-sm text-slate-400">
                Tim berpengalaman dalam instalasi berbagai lokasi.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-blue-500/10 p-3 rounded-lg">
              <Wrench className="text-blue-400" size={20} />
            </div>
            <div>
              <p className="font-semibold">Garansi Instalasi</p>
              <p className="text-sm text-slate-400">
                Layanan maintenance dan support teknis.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-blue-500/10 p-3 rounded-lg">
              <BadgeCheck className="text-blue-400" size={20} />
            </div>
            <div>
              <p className="font-semibold">Harga Transparan</p>
              <p className="text-sm text-slate-400">
                Tanpa biaya tersembunyi dan konsultasi gratis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
