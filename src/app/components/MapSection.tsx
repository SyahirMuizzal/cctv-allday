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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.78185718223614!2d106.8342917086088!3d-6.456914217840927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69eb9b5dc9e553%3A0xe3b3a47fb7195df2!2sCCTV%20ALLDAY%20%7C%20CCTV%20MURAH%20CCTV%20ONLINE%20CCTV%20TERDEKAT%20CIBINONG%20BOGOR%20SERVICE%20CCTV%20DTERPERCAYA%20DAN%20BERGARANSI%20RESMI!5e0!3m2!1sid!2sid!4v1776241360964!5m2!1sid!2sid"
          className="w-full h-[450px] border-0"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Button Arah */}
      <div className="text-center mt-8">
        <a
          href="https://maps.app.goo.gl/QCvERb78bbQGf2Hi7"
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
