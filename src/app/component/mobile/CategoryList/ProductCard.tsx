interface ProductCardProps {
  id: string;
  title: string;
  image: string;
  category: string;
  color?: string;
  item: string;
}

export const ProductCard = ({ title, image, item }: ProductCardProps) => {
  return (
    <div className="group cursor-pointer">
      <div
        className=" rounded-2xl border p-1 mb-3 aspect-square overflow-hidden
        transition-all duration-300 ease-out
        shadow-card hover:shadow-xl hover:-translate-y-1
        group-active:scale-95"
      >
        <div className="w-full h-full flex-col rounded-xl overflow-hidden flex items-center justify-center">
          <img
            src={image}
            alt={title}
            className=" object-cover rounded-lg transition-transform duration-300"
          />
        </div>
        <h3 className="bg-gray-500 text-[7px] rounded-tl-md w-[15px] h-[15px] flex items-center justify-items-center   absolute top-0 left-0 text-white font-medium text-center leading-tight px-1">
          {item}
        </h3>
      </div>
      <h3 className="text-sm font-medium text-foreground text-center leading-tight px-1">
        {title}
      </h3>
      <div className="flex items-center justify-center mt-2 gap-1 md:mb-2 mb-1">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={10}
            height={10}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-star text-yellow-400 fill-current"
            aria-hidden="true"
          >
            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={10}
            height={10}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-star text-yellow-400 fill-current"
            aria-hidden="true"
          >
            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={10}
            height={10}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-star text-yellow-400 fill-current"
            aria-hidden="true"
          >
            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={10}
            height={10}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-star text-yellow-400 fill-current"
            aria-hidden="true"
          >
            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={10}
            height={10}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-star text-gray-300"
            aria-hidden="true"
          >
            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
          </svg>
        </div>
        <span className="text-xs text-gray-600">4.7</span>
      </div>

      <div className="flex items-center gap-1">
        <span className="md:text-lg text-sm font-bold text-gray-900">
          Rs 79.99
        </span>
        <span className="md:text-sm text-[10px] text-gray-500 line-through">
          Rs 99.99
        </span>
      </div>
    </div>
  );
};

export interface Product {
  id: string;
  title: string;
  image: string;
  category: string;
  color?: string;
  item: string;
}

// Sample product data
export const sampleProducts: Record<string, Product[]> = {
  mobiles: [
    {
      id: "1",
      item: "12",
      title: "Samsung Galaxy M35",
      image:
        "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_272,w_252/NI_CATALOG/IMAGES/CIW/2025/5/10/68221a5b-9b6e-4bd5-b9b0-d8a36f7a6d58_718742_1.png",
      category: "mobiles",
      color: "bg-gradient-to-br from-teal-200 to-teal-300",
    },
    {
      id: "2",
      item: "1",
      title: "Digital product",
      image:
        "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_272,w_252/NI_CATALOG/IMAGES/CIW/2025/3/5/207173d5-a334-465c-b48b-5b3291e5e921_158002_1.png",
      category: "mobiles",
      color: "bg-gradient-to-br from-gray-800 to-gray-900",
    },
    {
      id: "3",
      item: "23",
      title: "Electronics",
      image:
        "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_272,w_252/NI_CATALOG/IMAGES/CIW/2025/3/5/9f831343-226d-4246-8b5c-8879814a5fb5_446896_4.png",
      category: "mobiles",
      color: "bg-gradient-to-br from-gray-300 to-gray-400",
    },
    {
      id: "4",
      item: "3",
      title: "Men's Fashion",
      image:
        "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_272,w_252/NI_CATALOG/IMAGES/CIW/2025/3/15/2275f05d-00de-4124-9d3b-04e6e2df1dc3_659665_1.png",
      category: "mobiles",
      color: "bg-gradient-to-br from-blue-200 to-blue-300",
    },
    {
      id: "5",
      item: "2",
      title: "Wall Decor",
      image:
        "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_272,w_252/NI_CATALOG/IMAGES/CIW/2025/3/15/1e8ab84b-4f83-4091-9fda-168cf87ff04c_552859_1.png",
      category: "mobiles",
      color: "bg-gradient-to-br from-teal-300 to-cyan-300",
    },
    {
      id: "6",
      item: "12",
      title: "MOBILE",
      image:
        "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_272,w_252/NI_CATALOG/IMAGES/CIW/2025/3/22/ed4e92af-91f3-4f31-b2c6-16a763e9683c_641105_1.png",
      category: "mobiles",
      color: "bg-gradient-to-br from-purple-400 to-purple-500",
    },
    {
      id: "7",
      item: "12",
      title: "Furniture",
      image:
        "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_272,w_252/NI_CATALOG/IMAGES/CIW/2025/3/5/207173d5-a334-465c-b48b-5b3291e5e921_158002_1.png",
      category: "mobiles",
      color: "bg-gradient-to-br from-gray-800 to-black",
    },
    {
      id: "8",
      item: "12",
      title: "Outdoor & Garden",
      image:
        "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_272,w_252/NI_CATALOG/IMAGES/CIW/2025/3/5/08e16ca7-ce9b-47de-b691-9d6d8eb4dc15_800281_1.png",
      category: "mobiles",
      color: "bg-gradient-to-br from-green-600 to-teal-700",
    },
    {
      id: "9",
      item: "12",
      title: "Watches",
      image:
        "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_272,w_252/NI_CATALOG/IMAGES/CIW/2025/3/5/73fd0a32-b3f1-457f-bbca-0ca6d279a358_822165_1.png",
      category: "mobiles",
      color: "bg-gradient-to-br from-teal-600 to-teal-700",
    },
  ],
  earbuds: [
    {
      id: "10",
      item: "12",
      title: "Sofa Set",
      image:
        "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_272,w_252/NI_CATALOG/IMAGES/CIW/2025/1/28/f9e294ae-6905-4de6-804a-9cd9cb6a0579_355946_1.png",
      category: "furniture",
      color: "bg-gradient-to-br from-amber-200 to-orange-300",
    },
    {
      id: "11",
      item: "12",
      title: "Dining Table",
      image:
        "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_272,w_252/NI_CATALOG/IMAGES/CIW/2025/4/21/da6323bc-63f9-40ff-93e7-44676e97fd93_127754_1.png",
      category: "furniture",
      color: "bg-gradient-to-br from-brown-200 to-brown-300",
    },
    {
      id: "12",
      item: "12",
      title: "Bed Frame",
      image:
        "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_272,w_252/NI_CATALOG/IMAGES/CIW/2024/8/14/244d14ec-eca4-4f93-bb32-68bd4f764709_626981_1.png",
      category: "furniture",
      color: "bg-gradient-to-br from-gray-200 to-gray-300",
    },
  ],
  speakers: [
    {
      id: "13",
      item: "12",
      title: "Summer Dress",
      image:
        "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_272,w_252/NI_CATALOG/IMAGES/CIW/2025/4/8/55c5c1d7-64f9-415a-b555-3b8a5ab16177_653195_1.png",
      category: "fashion",
      color: "bg-gradient-to-br from-pink-200 to-rose-300",
    },
    {
      id: "14",
      item: "12",
      title: "Casual Shirt",
      image:
        "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_272,w_252/NI_CATALOG/IMAGES/CIW/2025/3/29/d4510ec5-cbcf-4eaf-93f6-3165b497864b_458037_1.png",
      category: "fashion",
      color: "bg-gradient-to-br from-blue-200 to-indigo-300",
    },
    {
      id: "15",
      item: "12",
      title: "Sneakers",
      image:
        "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_272,w_252/NI_CATALOG/IMAGES/CIW/2025/2/1/0ffc5eff-e72c-47df-86ff-e1f49b8b45b0_361618_1.png",
      category: "fashion",
      color: "bg-gradient-to-br from-white to-gray-100",
    },
  ],
  personalCare: [
    {
      id: "16",
      item: "12",
      title: "Smartphone",
      image:
        "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_272,w_252/NI_CATALOG/IMAGES/CIW/2025/1/10/be3c4d1b-e2f5-4377-99fd-ac33d6c13fca_442894_1.png",
      category: "electronics",
      color: "bg-gradient-to-br from-gray-800 to-black",
    },
    {
      id: "17",
      item: "12",
      title: "Laptop",
      image:
        "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_272,w_252/NI_CATALOG/IMAGES/CIW/2024/8/16/b6358708-1883-4547-8499-f99777523acd_26723_1.jpg",
      category: "electronics",
      color: "bg-gradient-to-br from-slate-300 to-slate-400",
    },
    {
      id: "18",
      item: "12",
      title: "Headphones",
      image:
        "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_272,w_252/NI_CATALOG/IMAGES/CIW/2024/11/16/483a0168-e56a-4951-9cea-64cbbb56ce32_51306_1.jpg",
      category: "electronics",
      color: "bg-gradient-to-br from-black to-gray-900",
    },
  ],
  healthCare: [
    {
      id: "19",
      item: "12",
      title: "Software License",
      image:
        "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_272,w_252/NI_CATALOG/IMAGES/CIW/2024/10/8/3ea9fea2-134b-4d06-ac66-fab7397267f7_558208_1.png",
      category: "digital",
      color: "bg-gradient-to-br from-blue-500 to-purple-600",
    },
    {
      id: "20",
      item: "12",
      title: "Digital Art",
      image:
        "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_272,w_252/NI_CATALOG/IMAGES/CIW/2025/4/5/89cd4e9d-7096-4b69-b096-0ed83855d62d_416038_1.png",
      category: "digital",
      color: "bg-gradient-to-br from-purple-400 to-pink-500",
    },
  ],
  watches: [
    {
      id: "21",
      item: "12",
      title: "Smart Watch",
      image:
        "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_272,w_252/NI_CATALOG/IMAGES/CIW/2025/5/21/9f3e2ee1-8ab7-4134-b83e-6fa487ada454_483270_1.jpg",
      category: "watches",
      color: "bg-gradient-to-br from-blue-600 to-blue-700",
    },
    {
      id: "22",
      item: "12",
      title: "Classic Watch",
      image:
        "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_272,w_252/NI_CATALOG/IMAGES/CIW/2024/8/14/1ae550de-babd-4e3c-affe-f6b9bcc85b5f_92566_1.png",
      category: "watches",
      color: "bg-gradient-to-br from-yellow-400 to-amber-500",
    },
  ],
  powerbanks: [
    {
      id: "23",
      item: "12",
      title: "Organic Fruits",
      image:
        "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_272,w_252/NI_CATALOG/IMAGES/CIW/2025/3/29/31346435-492b-413a-90de-40b1a30223e9_210415_1.png",
      category: "food",
      color: "bg-gradient-to-br from-green-300 to-lime-400",
    },
    {
      id: "24",
      item: "12",
      title: "Gourmet Meal",
      image:
        "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_272,w_252/NI_CATALOG/IMAGES/CIW/2024/12/4/fbfa5b9e-ca1d-40a8-a7da-fccc01d3508b_883960_1.png",
      category: "food",
      color: "bg-gradient-to-br from-orange-300 to-red-400",
    },
  ],
};
