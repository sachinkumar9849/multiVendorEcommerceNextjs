"use client";

import Footer from "../component/comman/Footer";
import Nav from "../component/header/Nav";

// import Footer from "../components/comman/Footer";
// import Header from "../components/comman/Header";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}
