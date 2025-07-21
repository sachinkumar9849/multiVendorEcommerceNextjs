"use client";

import { useState } from "react";
import { Package, MessageCircle } from "lucide-react";
import ProductRating from "./ProductRating";

interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
}

const mockReviews: Review[] = [
  {
    id: "1",
    author: "Sarah M.",
    rating: 5,
    comment:
      "Amazing sound quality! The noise cancellation is perfect for my daily commute.",
    date: "2024-01-15",
    verified: true,
  },
  {
    id: "2",
    author: "Mike T.",
    rating: 4,
    comment:
      "Great headphones, very comfortable for long listening sessions. Battery life is excellent.",
    date: "2024-01-10",
    verified: true,
  },
  {
    id: "3",
    author: "Emma L.",
    rating: 5,
    comment:
      "Best purchase I've made this year! The build quality is outstanding.",
    date: "2024-01-08",
    verified: false,
  },
];

const tabs = [
  { id: "description", label: "Details", icon: Package },
  { id: "reviews", label: "Reviews", icon: MessageCircle },
];

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState("description");

  const renderContent = () => {
    switch (activeTab) {
      case "description":
        return (
          <div className="space-y-4 text-sm">
            <div>
              <h4 className="font-semibold mb-2">
                Premium Wireless Headphones
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                Experience exceptional sound quality with our premium wireless
                headphones. Featuring advanced noise cancellation technology,
                premium materials, and all-day comfort for the ultimate
                listening experience.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Key Features</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Active Noise Cancellation (ANC)</li>
                <li>• 30-hour battery life</li>
                <li>• Premium leather ear cups</li>
                <li>• Bluetooth 5.0 connectivity</li>
                <li>• Quick charge: 5 min = 3 hours</li>
                <li>• Voice assistant compatible</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Specifications</h4>
              <div className="grid grid-cols-2 gap-2 text-muted-foreground">
                <div>Driver: 40mm</div>
                <div>Weight: 250g</div>
                <div>Frequency: 20Hz-20kHz</div>
                <div>Impedance: 32Ω</div>
              </div>
            </div>
          </div>
        );

      case "reviews":
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold">Customer Reviews</h4>
              <ProductRating
                rating={4.7}
                reviewCount={1243}
                showReviewCount={false}
              />
            </div>

            <div className="space-y-4">
              {mockReviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-secondary rounded-2xl p-4 space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="font-medium text-sm">
                        {review.author}
                      </span>
                      {review.verified && (
                        <span className="bg-success text-success-foreground text-xs px-2 py-1 rounded-full">
                          Verified
                        </span>
                      )}
                    </div>
                    <ProductRating
                      rating={review.rating}
                      reviewCount={0}
                      showReviewCount={false}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {review.comment}
                  </p>
                  <p className="text-xs text-muted-foreground">{review.date}</p>
                </div>
              ))}
            </div>

            <button className="btn-accent w-full">View All Reviews</button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-4">
      {/* Tab Navigation */}
      <div className="flex space-x-1 bg-secondary rounded-2xl p-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 flex items-center justify-center space-x-1 py-2 px-3 rounded-xl font-medium text-sm transition-smooth ${
              activeTab === tab.id
                ? "bg-card text-foreground shadow-md"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <tab.icon className="w-4 h-4" />
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="animate-fade-in">{renderContent()}</div>
    </div>
  );
}
