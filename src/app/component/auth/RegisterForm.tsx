"use client";
import React, { useState } from "react";
import { Eye, EyeOff, Mail, Lock, ArrowRight, User, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

const loginBg =
  "https://png.pngtree.com/thumb_back/fh260/background/20230616/pngtree-digital-depiction-of-the-online-shopping-experience-image_3609487.jpg";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex">
      <div className="flex-1 flex items-center justify-center p-8 bg-gradient-hero">
        <div className="w-full max-w-md animate-fade-in">
          <Card className="shadow-elegant border-0 bg-white/95 backdrop-blur-sm py-6">
            <CardHeader className="space-y-6 text-center">
              <div className="flex items-center justify-center space-x-2 bg-[#222f3e] w-[200px] p-[10px] rounded-md mx-auto">
                <Link href={"/"}>
                  <Image alt="logo" src="/logo.png" width={400} height={400} />
                </Link>
              </div>

              <CardDescription className="text-gray-600">
                Sign up to your account to continue shopping
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <label
                    htmlFor="text"
                    className="text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-[16px] h-4 w-4 text-gray-400" />
                    <Input
                      id="name"
                      type="name"
                      placeholder="Name"
                      className="pl-10 h-12  border-gray-200 focus:border-primary focus:ring-primary"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-[16px] h-4 w-4 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 h-12  border-gray-200 focus:border-primary focus:ring-primary"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-[16px] h-4 w-4 text-gray-400" />
                    <Input
                      id="phone"
                      type="phone"
                      placeholder="Enter your number"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 h-12  border-gray-200 focus:border-primary focus:ring-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="password"
                    className="text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-[16px] h-4 w-4 text-gray-400" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-10 pr-10 h-12 border-gray-200 focus:border-primary focus:ring-primary"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <Link href="/login">
                  <Button
                    size="lg"
                    className="w-full h-12 text-base font-semibold bg-[#222f3e]"
                  >
                    Sign Up
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>

                <div className="relative">
                  <Separator className="my-4" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-white px-3 text-sm text-gray-500">
                      or continue with
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" size="lg" className="h-12">
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="currentColor"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    Google
                  </Button>
                  <Button variant="outline" size="lg" className="h-12">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    Facebook
                  </Button>
                </div>
              </div>

              <div className="text-center text-sm text-gray-600">
                Don have an account?{" "}
                <Link
                  href="/login"
                  className="text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  Sign up now
                </Link>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 text-center text-xs text-gray-500">
            <p>© 2024 lorem ipsum. All rights reserved.</p>
            <div className="flex justify-center space-x-4 mt-2">
              <a href="#" className="hover:text-gray-700 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-gray-700 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-gray-700 transition-colors">
                Support
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:block flex-1 relative">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${loginBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-primary/20"></div>
        </div>

        <div className="loginBg relative h-full flex items-center justify-center p-12">
          <div className="text-center text-white animate-scale-in relative">
            <h2 className="text-4xl font-bold mb-6">
              Discover Amazing Products
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-md">
              Join thousands of happy customers and find everything you need in
              one place.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold">10K+</div>
                <div className="opacity-80">Products</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">50K+</div>
                <div className="opacity-80">Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">4.9</div>
                <div className="opacity-80">Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
