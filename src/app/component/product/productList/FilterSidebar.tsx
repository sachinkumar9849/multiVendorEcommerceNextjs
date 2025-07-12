"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

interface FilterSection {
  id: string;
  title: string;
  isOpen: boolean;
}

interface PriceRange {
  min: number;
  max: number;
}

const FilterSidebar = () => {
  const [sections, setSections] = useState<FilterSection[]>([
    { id: "price", title: "Price Range", isOpen: true },
    { id: "category", title: "Categories", isOpen: true },
    { id: "brand", title: "Brands", isOpen: true },
    { id: "rating", title: "Customer Rating", isOpen: true },
    { id: "color", title: "Colors", isOpen: false },
    { id: "size", title: "Sizes", isOpen: false },
    { id: "availability", title: "Availability", isOpen: false },
  ]);

  const [priceRange, setPriceRange] = useState<PriceRange>({
    min: 0,
    max: 1000,
  });
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [inStockOnly, setInStockOnly] = useState(false);

  const categories = [
    { id: "electronics", name: "Electronics", count: 234 },
    { id: "clothing", name: "Clothing", count: 156 },
    { id: "home", name: "Home & Garden", count: 89 },
    { id: "sports", name: "Sports & Outdoors", count: 67 },
    { id: "books", name: "Books", count: 45 },
  ];

  const brands = [
    { id: "apple", name: "Apple", count: 23 },
    { id: "samsung", name: "Samsung", count: 18 },
    { id: "nike", name: "Nike", count: 34 },
    { id: "adidas", name: "Adidas", count: 28 },
    { id: "sony", name: "Sony", count: 15 },
  ];

  const colors = [
    { id: "black", name: "Black", hex: "#000000" },
    { id: "white", name: "White", hex: "#FFFFFF" },
    { id: "red", name: "Red", hex: "#EF4444" },
    { id: "blue", name: "Blue", hex: "#3B82F6" },
    { id: "green", name: "Green", hex: "#10B981" },
    { id: "yellow", name: "Yellow", hex: "#F59E0B" },
  ];

  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

  const toggleSection = (id: string) => {
    setSections(
      sections.map((section) =>
        section.id === id ? { ...section, isOpen: !section.isOpen } : section,
      ),
    );
  };

  const handleCategoryChange = (categoryId: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, categoryId]);
    } else {
      setSelectedCategories(
        selectedCategories.filter((id) => id !== categoryId),
      );
    }
  };

  const handleBrandChange = (brandId: string, checked: boolean) => {
    if (checked) {
      setSelectedBrands([...selectedBrands, brandId]);
    } else {
      setSelectedBrands(selectedBrands.filter((id) => id !== brandId));
    }
  };

  const handleColorChange = (colorId: string, checked: boolean) => {
    if (checked) {
      setSelectedColors([...selectedColors, colorId]);
    } else {
      setSelectedColors(selectedColors.filter((id) => id !== colorId));
    }
  };

  const handleSizeChange = (size: string, checked: boolean) => {
    if (checked) {
      setSelectedSizes([...selectedSizes, size]);
    } else {
      setSelectedSizes(selectedSizes.filter((s) => s !== size));
    }
  };

  const clearAllFilters = () => {
    setPriceRange({ min: 0, max: 1000 });
    setSelectedCategories([]);
    setSelectedBrands([]);
    setSelectedRating(null);
    setSelectedColors([]);
    setSelectedSizes([]);
    setInStockOnly(false);
  };

  const getActiveFiltersCount = () => {
    let count = 0;
    if (priceRange.min > 0 || priceRange.max < 1000) count++;
    if (selectedCategories.length > 0) count++;
    if (selectedBrands.length > 0) count++;
    if (selectedRating !== null) count++;
    if (selectedColors.length > 0) count++;
    if (selectedSizes.length > 0) count++;
    if (inStockOnly) count++;
    return count;
  };

  const renderSectionHeader = (section: FilterSection) => (
    <button
      onClick={() => toggleSection(section.id)}
      className="flex items-center justify-between w-full p-3 text-left border-b border-filter-border hover:bg-filter-item-hover transition-colors"
    >
      <span className="font-medium text-foreground">{section.title}</span>
      {section.isOpen ? (
        <ChevronUp className="h-4 w-4 text-muted-foreground" />
      ) : (
        <ChevronDown className="h-4 w-4 text-muted-foreground" />
      )}
    </button>
  );

  return (
    <Card className="w-full bg-filter-background border-filter-border shadow-[var(--shadow-filter)]">
      {/* Header */}
      <div className="p-4 border-b border-filter-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold text-foreground">Filters</h2>
            {getActiveFiltersCount() > 0 && (
              <Badge variant="secondary" className="ml-2">
                {getActiveFiltersCount()}
              </Badge>
            )}
          </div>
          {getActiveFiltersCount() > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearAllFilters}
              className="text-muted-foreground hover:text-foreground"
            >
              Clear All
            </Button>
          )}
        </div>
      </div>

      <div className="">
        {/* Price Range */}
        <div className="border-b border-filter-border">
          {renderSectionHeader(sections.find((s) => s.id === "price")!)}
          {sections.find((s) => s.id === "price")?.isOpen && (
            <div className="p-4">
              <div className="space-y-4">
                <Slider
                  value={[priceRange.min, priceRange.max]}
                  onValueChange={([min, max]) => setPriceRange({ min, max })}
                  max={1000}
                  step={10}
                  className="w-full"
                />
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>${priceRange.min}</span>
                  <span>${priceRange.max}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Categories */}
        <div className="border-b border-filter-border">
          {renderSectionHeader(sections.find((s) => s.id === "category")!)}
          {sections.find((s) => s.id === "category")?.isOpen && (
            <div className="p-4">
              <div className="space-y-3">
                {categories.map((category) => (
                  <div
                    key={category.id}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id={category.id}
                        checked={selectedCategories.includes(category.id)}
                        onCheckedChange={(checked) =>
                          handleCategoryChange(category.id, checked as boolean)
                        }
                      />
                      <label
                        htmlFor={category.id}
                        className="text-sm font-medium text-foreground cursor-pointer"
                      >
                        {category.name}
                      </label>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      ({category.count})
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Brands */}
        <div className="border-b border-filter-border">
          {renderSectionHeader(sections.find((s) => s.id === "brand")!)}
          {sections.find((s) => s.id === "brand")?.isOpen && (
            <div className="p-4">
              <div className="space-y-3">
                {brands.map((brand) => (
                  <div
                    key={brand.id}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id={brand.id}
                        checked={selectedBrands.includes(brand.id)}
                        onCheckedChange={(checked) =>
                          handleBrandChange(brand.id, checked as boolean)
                        }
                      />
                      <label
                        htmlFor={brand.id}
                        className="text-sm font-medium text-foreground cursor-pointer"
                      >
                        {brand.name}
                      </label>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      ({brand.count})
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Rating */}
        <div className="border-b border-filter-border">
          {renderSectionHeader(sections.find((s) => s.id === "rating")!)}
          {sections.find((s) => s.id === "rating")?.isOpen && (
            <div className="p-4">
              <div className="space-y-2">
                {[4, 3, 2, 1].map((rating) => (
                  <button
                    key={rating}
                    onClick={() =>
                      setSelectedRating(
                        selectedRating === rating ? null : rating,
                      )
                    }
                    className={`flex items-center w-full p-2 rounded-md text-left transition-colors ${
                      selectedRating === rating
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-filter-item-hover"
                    }`}
                  >
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`text-sm ${
                            i < rating
                              ? selectedRating === rating
                                ? "text-primary-foreground"
                                : "text-warning"
                              : "text-muted-foreground"
                          }`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="ml-2 text-sm">& Up</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Colors */}
        <div className="border-b border-filter-border">
          {renderSectionHeader(sections.find((s) => s.id === "color")!)}
          {sections.find((s) => s.id === "color")?.isOpen && (
            <div className="p-4">
              <div className="grid grid-cols-3 gap-3">
                {colors.map((color) => (
                  <button
                    key={color.id}
                    onClick={() =>
                      handleColorChange(
                        color.id,
                        !selectedColors.includes(color.id),
                      )
                    }
                    className={`flex flex-col items-center p-2 rounded-md border-2 transition-all ${
                      selectedColors.includes(color.id)
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <div
                      className="w-6 h-6 rounded-full border border-border"
                      style={{ backgroundColor: color.hex }}
                    />
                    <span className="text-xs text-foreground mt-1">
                      {color.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sizes */}
        <div className="border-b border-filter-border">
          {renderSectionHeader(sections.find((s) => s.id === "size")!)}
          {sections.find((s) => s.id === "size")?.isOpen && (
            <div className="p-4">
              <div className="grid grid-cols-3 gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() =>
                      handleSizeChange(size, !selectedSizes.includes(size))
                    }
                    className={`p-2 text-sm border rounded-md transition-all ${
                      selectedSizes.includes(size)
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border text-foreground hover:border-primary"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Availability */}
        <div>
          {renderSectionHeader(sections.find((s) => s.id === "availability")!)}
          {sections.find((s) => s.id === "availability")?.isOpen && (
            <div className="p-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="in-stock"
                  checked={inStockOnly}
                  onCheckedChange={(checked) =>
                    setInStockOnly(checked as boolean)
                  }
                />
                <label
                  htmlFor="in-stock"
                  className="text-sm font-medium text-foreground cursor-pointer"
                >
                  In Stock Only
                </label>
              </div>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default FilterSidebar;
