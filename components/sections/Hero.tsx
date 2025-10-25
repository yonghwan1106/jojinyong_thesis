"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-ontological-50 via-white to-imaginary-50">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-ontological-600 via-axiological-600 to-imaginary-600 bg-clip-text text-transparent">
            카타르시스 연구
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-4">
            2,400년 동안 풀리지 않았던 질문
          </p>
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            영화를 보고 울었던 경험, 드라마를 보고 속이 시원했던 순간,
            <br />
            그것은 단순한 감정이 아니었습니다.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="#catharsis-types"
              className="px-8 py-3 bg-ontological-600 text-white rounded-lg font-medium hover:bg-ontological-700 transition-colors"
            >
              카타르시스 알아보기
            </a>
            <a
              href="/thesis-2025_2_21.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-ontological-600 text-ontological-600 rounded-lg font-medium hover:bg-ontological-50 transition-colors"
            >
              논문 소개
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={scrollToContent}
        >
          <ChevronDown className="w-8 h-8 text-gray-400 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
