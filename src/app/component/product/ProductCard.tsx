import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart, Eye, Star } from "lucide-react";

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
      <div className="relative overflow-hidden bg-gradient-secondary rounded-t-lg">
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

        <div className="relative h-64 w-full overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        </div>

        {/* Hover Actions */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex gap-2">
            <Button size="icon" className="h-10 w-10 bg-white">
              <Heart className="w-4 h-4" />
            </Button>
            <Button size="icon" className="h-10 w-10 bg-white">
              <Eye className="w-4 h-4" />
            </Button>
            <Button size="icon" className="h-10 w-10 bg-white">
              <ShoppingCart className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      <CardContent className="px-6 py-0">
        <div className="space-y-3">
          <h3 className="font-semibold text-lg text-card-foreground leading-tight line-clamp-2 p-0">
            {name}
          </h3>

          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-0">
                {renderStars(rating)}
              </div>
              <span className="text-sm text-muted-foreground">
                ({rating}.0)
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[16px] font-bold text-primary">
                ${price.toFixed(2)}
              </span>
              {originalPrice && (
                <span className="text-[14px] text-muted-foreground line-through">
                  ${originalPrice.toFixed(2)}
                </span>
              )}
            </div>
          </div>
        </div>
      </CardContent>

      {/* Actions */}
      <CardFooter className="p-6 pt-0">
        <div className="flex gap-2 w-full">
          <Button variant="outline" size="sm" className="flex-1 bg-[#f8f7fc]">
            <Heart className="w-4 h-4 mr-2" />
            Save
          </Button>
          <Button size="sm" className="flex-1 bg-[#ff3b1f] text-white">
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
