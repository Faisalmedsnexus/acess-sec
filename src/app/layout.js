"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Hero } from "./public/Hero";
import { Footer } from "./public/Footer";
import { TopMenue } from "./public/TopMenue";
import { Header } from "./public/Header";
import { useState } from "react";

export default function RootLayout({ children }) {
  const [activeSection, setActiveSection] = useState("default");
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body>
        <Header />
        <TopMenue setActiveSection={setActiveSection} />
        <Hero activeSection={activeSection} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
