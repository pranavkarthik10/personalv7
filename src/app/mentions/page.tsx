"use client";
import React from 'react';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const TweetCarousel = ({ isDark }: { isDark: boolean }) => {
  const tweets = [
    "1135700109931343872",
    "1275225681794748416",
    "1282204149082230784",
    "1997875261669621787"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % tweets.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [isHovered, tweets.length]);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % tweets.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + tweets.length) % tweets.length);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`p-8 rounded-2xl backdrop-blur-md border ${isDark ? 'bg-white/5 border-white/10' : 'bg-white/50 border-white/20'}`}>
        <div className="flex justify-center items-center min-h-[600px] rounded-xl overflow-hidden relative">
          {tweets.map((tweetId, index) => (
            <div
              key={tweetId}
              className={`w-full max-w-xl mx-auto ${index === currentIndex ? 'block' : 'hidden'}`}
            >
              <blockquote
                className="twitter-tweet"
                data-theme={isDark ? "dark" : "light"}
                data-dnt="true"
                data-conversation="none"
              >
                <a href={`https://twitter.com/x/status/${tweetId}`}></a>
              </blockquote>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className={`absolute left-2 top-1/2 -translate-y-1/2 p-3 rounded-full backdrop-blur-md border transition-all duration-300 hover:scale-110 ${isDark ? 'bg-white/10 text-white border-white/20 hover:bg-white/20' : 'bg-black/5 text-slate-700 border-slate-200 hover:bg-black/10'}`}
        aria-label="Previous tweet"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className={`absolute right-2 top-1/2 -translate-y-1/2 p-3 rounded-full backdrop-blur-md border transition-all duration-300 hover:scale-110 ${isDark ? 'bg-white/10 text-white border-white/20 hover:bg-white/20' : 'bg-black/5 text-slate-700 border-slate-200 hover:bg-black/10'}`}
        aria-label="Next tweet"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {tweets.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? isDark ? 'bg-white w-8' : 'bg-slate-800 w-8'
                : isDark ? 'bg-white/30 hover:bg-white/50' : 'bg-slate-400 hover:bg-slate-600'
            }`}
            aria-label={`Go to tweet ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default function Mentions() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const currentTheme = (theme || resolvedTheme || "dark");
  const isDark = currentTheme === "dark" || currentTheme === "starry";
  const effectiveIsDark = mounted ? isDark : true;

  return (
    <div className="min-h-screen transition-all duration-500">
      {/* Background glow effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl opacity-20 bg-blue-400 dark:bg-purple-500"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl opacity-20 bg-indigo-400 dark:bg-pink-500"></div>
      </div>

      <div className="relative z-10 max-w-screen-md mx-auto px-6 py-20">
        {/* Back button */}
        <Link
          href="/"
          className={`inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full backdrop-blur-md border transition-all duration-300 hover:scale-105 ${effectiveIsDark ? 'bg-white/10 text-white border-white/20 hover:bg-white/20' : 'bg-black/5 text-slate-700 border-slate-200 hover:bg-black/10'}`}
        >
          <ArrowLeft size={16} />
          <span className="font-medium">Back</span>
        </Link>

        {/* Header */}
        <header className="mb-16">
          <h1 className={`text-5xl md:text-6xl font-bold mb-4 ${effectiveIsDark ? 'text-white' : 'text-slate-800'}`}>
            Cool Mentions
          </h1>
          <p className={`text-xl md:text-2xl ${effectiveIsDark ? 'text-slate-300' : 'text-slate-700'}`}>
            Notable shoutouts and mentions from around the web.
          </p>
        </header>

        {/* Tweet Carousel */}
        <section>
          <TweetCarousel isDark={effectiveIsDark} />
        </section>
      </div>
    </div>
  );
}
