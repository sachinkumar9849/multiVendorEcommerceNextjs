export type Subcategories = {
  [key: string]: string[];
};

export interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  hasSubmenu: boolean;
  subcategories?: Subcategories;
}

export interface SlideProps {
  id: number | string;
  image: string;
}
