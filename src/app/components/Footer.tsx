import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-slate-950 border-t border-slate-800 text-slate-400"
    >
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* BRAND */}
        <div>
          <h3 className="text-white text-xl font-bold mb-4">
            CCTV<span className="text-blue-400">AllDay</span>
          </h3>
          <p className="text-sm leading-relaxed">
            Solusi keamanan terpercaya untuk rumah, kantor, dan bisnis Anda.
          </p>
        </div>

        {/* MENU */}
        <div>
          <h4 className="text-white font-semibold mb-4">Navigasi</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-blue-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/etalase" className="hover:text-blue-400 transition">
                Produk
              </Link>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-white font-semibold mb-4">Kontak</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={16} /> +62 896-0316-1196
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> teknikteknologimandiri@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} /> Depok Alam Lestari, Blk. A1 No.12A, Harapan
              Jaya, Cibinong, Bogor Regency, West Java 16914
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div>
          <h4 className="text-white font-semibold mb-4">Butuh Konsultasi?</h4>
          <Link
            href="https://wa.me/6289603161196"
            target="_blank"
            className="block text-center bg-blue-400 hover:bg-blue-600 transition py-3 rounded-xl font-semibold text-white"
          >
            Hubungi Sekarang
          </Link>
        </div>
      </div>

      <div className="border-t border-slate-800 text-center py-6 text-xs text-slate-500">
        © {new Date().getFullYear()} CCTV-ALLDAY. All rights reserved.
      </div>
    </footer>
  );
}
