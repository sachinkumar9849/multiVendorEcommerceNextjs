import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart, Star } from "lucide-react";
import Link from "next/link";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  isPopular?: boolean;
  discount?: number;
}

export const ProductCard = ({
  name,
  price,
  originalPrice,
  image,
  rating,
  isPopular,
  discount,
}: ProductCardProps) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating
            ? "fill-yellow-400 text-yellow-400"
            : "text-muted-foreground"
        }`}
      />
    ));
  };

  return (
    <Card className="group relative overflow-hidden border-0 shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 bg-card">
      {/* Product Image */}
      <div className="relative overflow-hidden bg-gradient-secondary md:rounded-t-lg">
        {isPopular && (
          <Badge className="absolute top-3 left-3 z-10 bg-gradient-primary text-primary-foreground border-0">
            Most Viewed
          </Badge>
        )}
        {discount && (
          <Badge className="absolute top-3 right-3 z-10 bg-destructive text-destructive-foreground border-0">
            -{discount}%
          </Badge>
        )}

        <div className="relative md:h-64 w-full overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full md:h-full h-[150px] object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        </div>

        {/* Hover Actions */}
      </div>

      <CardContent className="md:px-6 px-2 py-0">
        <div className="md:space-y-3 space-y-1">
          <h3 className="font-semibold md:text-lg text-md text-card-foreground leading-tight  p-0">
            {name.slice(0, 20)}
          </h3>

          <div className="md:flex justify-between">
            <div className="flex items-center gap-2 ">
              <div className="flex items-center gap-0">
                <span className="flex md:text-[13px] text-[10px] ">
                  {renderStars(rating)}
                </span>
              </div>
              <span className="text-sm text-muted-foreground">
                ({rating}.0)
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="md:text-[16px] text-[13px] font-bold text-primary">
                Rs {price.toFixed(2)}
              </span>
              {originalPrice && (
                <span className="text-[14px] text-muted-foreground line-through">
                  Rs {originalPrice.toFixed(2)}
                </span>
              )}
            </div>
          </div>
        </div>
      </CardContent>

      {/* Actions */}
      <CardFooter className="md:p-6 p-2 mt-[-8px] pt-0">
        <div className="flex gap-2 w-full">
          <Button
            variant="outline"
            size="sm"
            className="md:block hidden flex-1 bg-[#f8f7fc]"
          >
            <Heart className="w-4 h-4 mr-2" />
            Save
          </Button>
          <Link href="/mobile-cart">
            <Button size="sm" className="flex-1 bg-[#ff3b1f] text-white">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Add to Cart
            </Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};
