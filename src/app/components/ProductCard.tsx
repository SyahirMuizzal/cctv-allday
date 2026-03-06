import Image from "next/image";
import Link from "next/link";

interface ProductProps {
  id: number | string;
  name: string;
  price: string;
  image?: string | null;
  category: string;
}

export default function ProductCard({
  id,
  name,
  price,
  image,
  category,
}: ProductProps) {
  const imageSrc = image && image.trim() !== "" ? image : "/placeholder.jpg";

  const whatsappMessage = encodeURIComponent(
    `Halo, saya tertarik dengan produk ${name}. Bisa minta detailnya?`,
  );

  return (
    <div className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:shadow-xl hover:border-blue-500 transition duration-300 flex flex-col h-full">
      {/* IMAGE */}
      <Link href={`/etalase/${id}`} className="block">
        <div className="relative h-60 w-full bg-slate-800 overflow-hidden">
          <Image
            src={imageSrc}
            alt={name?.trim() ? `Gambar produk ${name}` : "Gambar produk"}
            fill
            className="object-cover group-hover:scale-105 transition duration-500"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      </Link>

      {/* CONTENT */}
      <div className="p-5 flex flex-col flex-1 gap-5">
        <span className="text-xs text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full w-fit">
          {category}
        </span>

        <Link href={`/etalase/${id}`}>
          <h3 className="text-lg font-semibold mt-4 text-white line-clamp-2 hover:text-blue-400 transition">
            {name}
          </h3>
        </Link>

        <p className="text-blue-400 text-xl font-bold mt-3">Rp. {price}</p>

        {/* BUTTON BAWAH */}
        <Link
          href={`https://wa.me/6289603161196?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto text-center bg-blue-500 hover:bg-blue-600 transition py-3 rounded-xl font-semibold text-white"
        >
          Tanya Produk
        </Link>
      </div>
    </div>
  );
}
