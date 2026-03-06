import ProductCard from "@/app/components/ProductCard";
import { products } from "@/data/products";

export default function EtalasePage() {
  return (
    <section className="min-h-screen bg-slate-950 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          {/* etalase */}
          Produk CCTV-ALLDAY
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              slug={product.slug}
              name={product.name}
              price={product.price}
              image={product.image}
              category={product.category}
              badge={product.badge}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
