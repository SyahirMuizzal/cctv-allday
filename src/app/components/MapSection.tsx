"use client";

export default function MapSection() {
  return (
    <section id="location" className="bg-slate-950 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">Lokasi Kami</h2>
        <p className="text-slate-400">
          Kunjungi lokasi kami atau lihat langsung di Google Maps
        </p>
      </div>

      <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden border border-slate-800 shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.1279754154797!2d106.83403902851714!3d-6.45663496699557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ea0ebb6ca735%3A0x77da5b0070042d9!2sDepok%20Alam%20Lestari%2C%20Blk.%20B4%20No.12a%2C%20Harapan%20Jaya%2C%20Cibinong%2C%20Bogor%20Regency%2C%20West%20Java%2016914!5e0!3m2!1sid!2sid!4v1776233289214!5m2!1sid!2sid"
          className="w-full h-[450px] border-0"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Button Arah */}
      <div className="text-center mt-8">
        <a
          href="https://maps.app.goo.gl/AbWLLB2V22sJLUp29"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-500 hover:bg-blue-600 transition px-6 py-3 rounded-lg font-semibold"
        >
          Buka di Google Maps
        </a>
      </div>
    </section>
  );
}
