export interface Category {
  id: string;
  name: string;
  image: string;
  color: string;
}

interface CategorySidebarProps {
  categories: Category[];
  activeCategory: string;
  onCategorySelect: (categoryId: string) => void;
}

export const CategorySidebar = ({
  categories,
  activeCategory,
  onCategorySelect,
}: CategorySidebarProps) => {
  return (
    <div className="w-24 bg-card border-r border-border h-full overflow-y-auto">
      <div className="flex flex-col gap-2 p-3">
        {categories.map((category) => {
          const isActive = category.id === activeCategory;

          return (
            <button
              key={category.id}
              onClick={() => onCategorySelect(category.id)}
              className={`
                flex flex-col items-center gap-2 p-3 rounded-xl transition-all duration-200
                ${
                  isActive
                    ? "bg-[#ff3b1f] text-white shadow-category scale-105"
                    : "hover:bg-category-hover hover:shadow-sm active:scale-95"
                }
              `}
            >
              <div
                className={`p-2 rounded-lg ${isActive ? "bg-white/20" : category.color}`}
              >
                <img
                  src={category?.image}
                  alt="img"
                  className={isActive ? "text-white" : "text-foreground"}
                />
              </div>
              <span
                className={`text-xs font-medium text-center leading-tight ${
                  isActive ? "text-white" : "text-muted-foreground"
                }`}
              >
                {category.name}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export const defaultCategories: Category[] = [
  {
    id: "mobiles",
    name: "Mobiles",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96/NI_CATALOG/IMAGES/CIW/2025/3/7/02575afa-87fd-4026-92f8-c7b32d025a5e_2389afe8-9e92-4a9f-b03d-c35cc3329857",
    color: "bg-pink-100",
  },
  {
    id: "earbuds",
    name: "Earbuds & Headsets",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96/NI_CATALOG/IMAGES/CIW/2025/1/17/281f4dc6-a580-4b75-98a4-9b43345203b3_e2051908-d8cc-4644-b25e-1bd1607b167b",
    color: "bg-blue-100",
  },
  {
    id: "speakers",
    name: "Speakers & Soundbars",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96/NI_CATALOG/IMAGES/CIW/2025/1/17/0ffab120-683c-4468-a074-224101e954cd_794456b1-46f9-4796-ba84-31b3ca3a5d86",
    color: "bg-purple-100",
  },
  {
    id: "watches",
    name: "Smart Watches",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96/NI_CATALOG/IMAGES/CIW/2025/1/17/f868b395-3ecb-470a-afe5-854737c10912_88889b38-d539-424c-9162-3b100008a9c2",
    color: "bg-green-100",
  },
  {
    id: "personalCare",
    name: "Personal Care Appliances",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96/NI_CATALOG/IMAGES/CIW/2025/1/17/fb58d91b-0fe2-4ecd-b3c7-4dc089ffa22b_da1732ed-9f99-45a0-9d97-64f661ee3bd3",
    color: "bg-indigo-100",
  },
  {
    id: "healthCare",
    name: "Health Care Appliances",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96/NI_CATALOG/IMAGES/CIW/2025/1/17/fd515811-e603-490d-a5d4-e504befcc709_6584df8a-3094-4fc4-80a9-d3848de97db3",
    color: "bg-yellow-100",
  },
  {
    id: "powerbanks",
    name: "Powerbanks Chargers Cables",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96/NI_CATALOG/IMAGES/CIW/2025/1/17/353fa2a1-5fb2-4de8-9586-e097b3250a60_753bfa77-4e6f-4cb2-b7ee-b720fd4941b4",
    color: "bg-orange-100",
  },
];
