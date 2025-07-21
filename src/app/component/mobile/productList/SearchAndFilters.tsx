import { useState } from "react";
import { Search, X, SlidersHorizontal, ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

interface SearchAndFiltersProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  categories: string[];
}

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
  { value: "newest", label: "Newest" },
];

export const SearchAndFilters = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  sortBy,
  onSortChange,
  categories,
}: SearchAndFiltersProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [tempCategory, setTempCategory] = useState(selectedCategory);
  const [tempSort, setTempSort] = useState(sortBy);

  const handleApplyFilters = () => {
    onCategoryChange(tempCategory);
    onSortChange(tempSort);
    setIsOpen(false);
  };

  const handleClearFilters = () => {
    setTempCategory("all");
    setTempSort("featured");
    onCategoryChange("all");
    onSortChange("featured");
    setIsOpen(false);
  };

  const activeFiltersCount = [
    selectedCategory !== "all" ? 1 : 0,
    sortBy !== "featured" ? 1 : 0,
  ].filter(Boolean).length;

  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="relative">
        <Search
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground"
          size={18}
        />
        <Input
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-12 pr-4 h-12 rounded-xl border-2 bg-card focus:border-primary transition-colors duration-200"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange("")}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X size={18} />
          </button>
        )}
      </div>

      {/* Filter Toggle Button */}
      <div className="flex items-center justify-between">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              className="flex items-center gap-2 rounded-xl"
            >
              <SlidersHorizontal size={16} />
              Filters
              {activeFiltersCount > 0 && (
                <span className="bg-primary text-primary-foreground text-xs rounded-full px-2 py-0.5 ml-1">
                  {activeFiltersCount}
                </span>
              )}
            </Button>
          </SheetTrigger>

          <SheetContent side="bottom" className="h-[90vh] p-0">
            <div className="flex flex-col h-full">
              {/* Header */}
              <SheetHeader className="flex-row items-center justify-between p-4 border-b">
                <div className="flex items-center gap-3">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="h-8 w-8"
                  >
                    <ArrowLeft size={18} />
                  </Button>
                  <SheetTitle className="text-lg font-semibold">
                    Filters
                  </SheetTitle>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleClearFilters}
                  className="text-muted-foreground hover:text-foreground"
                >
                  Clear Filters
                </Button>
              </SheetHeader>

              {/* Filter Content */}
              <div className="flex-1 overflow-auto">
                <div className="flex h-full">
                  {/* Sidebar */}
                  <div className="w-32 bg-muted/30 border-r p-4">
                    <div className="space-y-6">
                      <div className="text-sm font-medium text-primary">
                        Category
                      </div>
                      <div className="text-sm font-medium text-foreground">
                        Sort By
                      </div>
                    </div>
                  </div>

                  {/* Main Content */}
                  <div className="flex-1 p-4 space-y-6">
                    {/* Categories */}
                    <div>
                      <h3 className="font-semibold text-foreground mb-4">
                        Categories
                      </h3>
                      <div className="space-y-3">
                        {["all", ...categories].map((category) => (
                          <label
                            key={category}
                            className="flex items-center justify-between py-3 cursor-pointer"
                          >
                            <span className="text-foreground capitalize text-sm">
                              {category}
                            </span>
                            <div className="relative">
                              <input
                                type="radio"
                                name="category"
                                checked={tempCategory === category}
                                onChange={() => setTempCategory(category)}
                                className="sr-only"
                              />
                              <div
                                className={cn(
                                  "w-5 h-5 border-2 rounded transition-colors",
                                  tempCategory === category
                                    ? "bg-primary border-primary"
                                    : "border-muted-foreground",
                                )}
                              >
                                {tempCategory === category && (
                                  <Check
                                    size={12}
                                    className="text-primary-foreground m-0.5"
                                  />
                                )}
                              </div>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Sort Options */}
                    <div>
                      <h3 className="font-semibold text-foreground mb-4">
                        Sort By
                      </h3>
                      <div className="space-y-3">
                        {sortOptions.map((option) => (
                          <label
                            key={option.value}
                            className="flex items-center justify-between py-3 cursor-pointer"
                          >
                            <span className="text-foreground text-sm">
                              {option.label}
                            </span>
                            <div className="relative">
                              <input
                                type="radio"
                                name="sort"
                                checked={tempSort === option.value}
                                onChange={() => setTempSort(option.value)}
                                className="sr-only"
                              />
                              <div
                                className={cn(
                                  "w-5 h-5 border-2 rounded transition-colors",
                                  tempSort === option.value
                                    ? "bg-primary border-primary"
                                    : "border-muted-foreground",
                                )}
                              >
                                {tempSort === option.value && (
                                  <Check
                                    size={12}
                                    className="text-primary-foreground m-0.5"
                                  />
                                )}
                              </div>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="border-t p-4">
                <Button
                  onClick={handleApplyFilters}
                  className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl font-medium"
                >
                  Apply Filters
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        {/* Clear Filters Button */}
        {activeFiltersCount > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClearFilters}
            className="text-muted-foreground hover:text-foreground"
          >
            Clear All
          </Button>
        )}
      </div>
    </div>
  );
};
