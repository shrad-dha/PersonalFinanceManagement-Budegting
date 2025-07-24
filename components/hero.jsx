"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { WarningProvider } from "@radix-ui/react-dialog";
import SplineViewer from "./SplineViewer";
import { motion } from "framer-motion";

export const HeroSection = () => {
  const imageRef = useRef();

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreashold = 100;

      if (scrollPosition > scrollThreashold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="pb-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title">
          Smart Finances,Smart Life <br />
          Finance Your Future
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          An AI-powered financial management platform that helps you track,
          analyze and optimize your spending with real-time insights.
        </p>
        {/* <div className="flex justify-center space-x-4"></div> */}
        <Link href="/dashboard">
          <Button size="lg" className="px-8">
            Get Started
          </Button>
        </Link>
      </div>
      <div className="hero-image-wrapper">
        {/* <div ref={imageRef} className="hero-image"> 
      <Image src='/banner.jpg' 
      width={1280}
      height={720}
      alt="Dashboard Preview"
      className="rounded-lg shadow-2xl border mx-auto"
      priority
      />  
    </div> */}
        <motion.div
      ref={imageRef}
      className="hero-image max-w-5xl mx-auto mt-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      whileHover={{
        scale: 1.03,
        boxShadow: "0px 0px 40px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Image
        src="/banner.jpg"
        width={1280}
        height={720}
        alt="Dashboard Preview"
        className="rounded-2xl border shadow-xl transition-all duration-300"
        priority
      />
    </motion.div>

        <div className="hero-image-wrapper">
          <div ref={imageRef} className="hero-image rounded-lg overflow-hidden">
            {/* <SplineViewer /> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
