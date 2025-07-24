"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Grid3X3, User, ShoppingCart } from "lucide-react";

const BottomNavigation = () => {
  const pathname = usePathname();

  const navItems = [
    {
      id: "home",
      label: "Home",
      icon: Home,
      href: "/mobile",
      color: "text-[#222f3e]",
      bgColor: "bg-blue-50",
    },
    {
      id: "categories",
      label: "Categories",
      icon: Grid3X3,
      href: "",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      id: "account",
      label: "Account",
      href: "/",
      icon: User,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      id: "cart",
      label: "Cart",
      href: "/mobile-cart",
      icon: ShoppingCart,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
  ];

  const getActiveTab = () => {
    if (pathname === "/mobile") return "home";
    if (pathname.startsWith("/categories")) return "categories";
    if (pathname.startsWith("/account")) return "account";
    if (pathname.startsWith("/mobile-cart")) return "cart";
    return "home";
  };

  const activeTab = getActiveTab();

  return (
    <div className="bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col pt-[100px]">
      {/* Fixed Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50">
        {/* Glassmorphism background */}
        <div className="absolute inset-0 bg-white/90 backdrop-blur-lg border-t border-slate-200/50 shadow-lg"></div>

        {/* Navigation content */}
        <div className="relative px-6 py-3 pb-safe">
          <div className="flex justify-around items-center max-w-md mx-auto">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;

              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className="group relative flex flex-col items-center justify-center py-2 px-3 rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95 min-w-[60px]"
                >
                  {/* Background highlight for active state */}
                  <div
                    className={`absolute inset-0 rounded-2xl transition-all duration-300 ${
                      isActive
                        ? `${item.bgColor} scale-100 opacity-100`
                        : "scale-75 opacity-0"
                    }`}
                  ></div>

                  {/* Icon container */}
                  <div className="relative">
                    <div
                      className={`p-1.5 rounded-xl transition-all duration-300 ${
                        isActive
                          ? `${item.color} transform -translate-y-1`
                          : "text-slate-400 group-hover:text-slate-600"
                      }`}
                    >
                      <Icon
                        size={22}
                        className={`transform transition-all duration-300 ${
                          isActive ? "scale-110" : "group-hover:scale-105"
                        }`}
                      />
                    </div>

                    {/* Active indicator dot */}
                    <div
                      className={`absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        isActive
                          ? `${item.color.replace("text-", "bg-")} scale-100`
                          : "scale-0"
                      }`}
                    >
                      <div className="w-full h-full rounded-full bg-white/80 animate-pulse"></div>
                    </div>
                  </div>

                  {/* Label */}
                  <span
                    className={`relative mt-1 text-xs font-medium transition-all duration-300 ${
                      isActive
                        ? `${item.color} transform -translate-y-0.5`
                        : "text-slate-400 group-hover:text-slate-600"
                    }`}
                  >
                    {item.label}
                  </span>

                  {/* Ripple effect */}
                  <div className="absolute inset-0 rounded-2xl overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -translate-x-full transition-transform duration-1000 ${
                        isActive ? "translate-x-full" : ""
                      } opacity-20`}
                    ></div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Bottom safe area for mobile devices (iOS notch support) */}
        <div className="h-safe-area-inset-bottom bg-white/90 backdrop-blur-lg min-h-[8px]"></div>
      </div>
    </div>
  );
};

export default BottomNavigation;
