import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Budi Santoso",
    role: "Pemilik Toko Elektronik",
    message:
      "Pelayanannya sangat profesional. Instalasi cepat dan hasilnya rapi. Sekarang toko saya jauh lebih aman.",
    image: "/CCTV-ALLDAY-1.jpg",
  },
  {
    id: 2,
    name: "Siti Rahma",
    role: "Pemilik Rumah",
    message:
      "Harga transparan dan teknisinya ramah. Bisa monitoring langsung dari HP. Sangat recommended!",
    image: "/CCTV-ALLDAY-1.jpg",
  },
  {
    id: 3,
    name: "Andi Wijaya",
    role: "Manager Gudang",
    message:
      "Sudah pakai lebih dari 1 tahun, tidak ada kendala. Support cepat dan responsif.",
    image: "/CCTV-ALLDAY-1.jpg",
  },
];

export default function CCTVTestimonialSection() {
  return (
    <section className="bg-slate-950 text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Apa Kata Klien Kami
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Ratusan pelanggan telah mempercayakan sistem keamanan mereka kepada
            kami.
          </p>
        </div>

        {/* TESTIMONIAL GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-green-500 transition duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    className="text-blue-400 fill-blue-400"
                  />
                ))}
              </div>

              {/* Message */}
              <p className="text-slate-300 mb-6 leading-relaxed">
                "{item.message}"
              </p>

              {/* User */}
              <div className="flex items-center gap-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-sm text-slate-400">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
