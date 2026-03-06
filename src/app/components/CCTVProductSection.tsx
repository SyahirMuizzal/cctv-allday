import Image from "next/image";
import Link from "next/link";

interface ProductProps {
  id: number | string;
  slug?: string;
  name: string;
  price: number;
  image?: string | null;
  category?: string;
  badge?: string;
  whatsappNumber?: string;
}

export default function ProductCard({
  id,
  slug,
  name,
  price,
  image,
  category,
  badge,
  whatsappNumber = "6281234567890",
}: ProductProps) {
  // fallback image
  const imageSrc = image && image.trim() !== "" ? image : "/placeholder.jpg";

  // format rupiah otomatis
  const formattedPrice = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(price);

  const productUrl = `/etalase/${slug ?? id}`;

  const whatsappMessage = encodeURIComponent(
    `Halo, saya tertarik dengan produk ${name}. Bisa minta detailnya?`,
  );

  return (
    <div className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:shadow-2xl hover:border-green-500 transition-all duration-300 flex flex-col">
      {/* IMAGE */}
      <Link href={productUrl} className="block relative">
        <div className="relative w-full aspect-[4/3] bg-slate-800 overflow-hidden">
          <Image
            src={imageSrc}
            alt={name?.trim() ? name : "Product Image"}
            fill
            className="object-cover group-hover:scale-110 transition duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Badge */}
        {badge && (
          <span className="absolute top-3 left-3 bg-green-500 text-white text-xs px-3 py-1 rounded-full shadow">
            {badge}
          </span>
        )}
      </Link>

      {/* CONTENT */}
      <div className="p-5 flex flex-col flex-1">
        {category && (
          <span className="text-xs text-green-400 bg-green-500/10 px-3 py-1 rounded-full w-fit">
            {category}
          </span>
        )}

        <Link href={productUrl}>
          <h3 className="text-base sm:text-lg font-semibold mt-3 text-white line-clamp-2 hover:text-green-400 transition">
            {name}
          </h3>
        </Link>

        <p className="text-green-400 text-lg sm:text-xl font-bold mt-2">
          {formattedPrice}
        </p>

        {/*tombol di bawah */}
        <div className="flex-grow" />

        {/* CTA */}
        <Link
          href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 text-center bg-green-500 hover:bg-green-600 transition py-3 rounded-xl font-semibold text-white text-sm sm:text-base"
        >
          Tanya Produk
        </Link>
      </div>
    </div>
  );
}
