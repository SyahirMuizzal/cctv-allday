export interface Product {
  id: number;
  slug: string;
  name: string;
  price: number;
  image: string;
  category: string;
  badge?: string;
}

export const products: Product[] = [
  {
    id: 1,
    slug: "cctv-indoor-2mp",
    name: "EZVIZ H1c",
    price: 200000,
    image: "/products/EZVIZ-H1c.jpg",
    category: "Smart Home Wi-Fi Camera",
    badge: "Best Seller",
  },
  {
    id: 2,
    slug: "cctv-outdoor-5mp",
    name: "EZVIZ H8C",
    price: 600000,
    image: "/products/EZVIZ-H8C.jpg",
    category: "Outdoor",
    badge: "Promo",
  },
  {
    id: 3,
    slug: "paket-cctv-4-channel",
    name: "Paket 2 Chanel",
    price: "xxxx",
    image: "/products/Paket-2-Chanel.jpg",
    category: "Paket",
  },
  {
    id: 4,
    slug: "paket-cctv-8-channel",
    name: "Paket 4 Chanel",
    price: "xxxx",
    image: "/products/Paket-4-Chanel.jpg",
    category: "Paket",
    badge: "Hot",
  },
  {
    id: 5,
    slug: "kamera-ip-wireless",
    name: "Paket 8 Chanel",
    price: "xxxx",
    image: "/products/Paket-8-Chanel.jpg",
    category: "Paket",
  },
];
