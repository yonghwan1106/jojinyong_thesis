"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, BookMarked } from "lucide-react";
import { glossaryData, categories, type Category } from "@/data/glossary";

export default function GlossaryPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category>("전체");

  const filteredTerms = useMemo(() => {
    return glossaryData.filter((term) => {
      const matchesSearch =
        term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
        term.simpleDefinition.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "전체" || term.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "철학":
        return "bg-ontological-100 text-ontological-700";
      case "문학":
        return "bg-axiological-100 text-axiological-700";
      case "미학":
        return "bg-imaginary-100 text-imaginary-700";
      case "심리학":
        return "bg-purple-100 text-purple-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-ontological-500 to-imaginary-500 rounded-xl flex items-center justify-center mx-auto mb-4">
            <BookMarked className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-5xl font-bold mb-4">용어 사전</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            어려운 철학 용어들을 쉽게 풀어드립니다.
            <br />
            일상 언어로 이해하는 카타르시스 연구
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          {/* Search Box */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="용어 검색..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-ontological-500 focus:outline-none text-lg"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-ontological-600 to-imaginary-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mb-6 text-gray-600"
        >
          <p>
            총 <strong className="text-ontological-600">{filteredTerms.length}개</strong>의
            용어
          </p>
        </motion.div>

        {/* Glossary List */}
        <div className="space-y-4">
          {filteredTerms.map((term, index) => (
            <motion.div
              key={term.term}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * (index % 5) }}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden"
            >
              <div className="p-6">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {term.term}
                    </h3>
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(
                        term.category
                      )}`}
                    >
                      {term.category}
                    </span>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-ontological-50 to-imaginary-50 p-4 rounded-lg mb-4">
                  <p className="text-lg font-medium text-gray-800">
                    {term.simpleDefinition}
                  </p>
                </div>

                <p className="text-gray-700 leading-relaxed mb-4">
                  {term.detailedExplanation}
                </p>

                {term.example && (
                  <div className="bg-gray-50 border-l-4 border-ontological-500 p-4 mb-4">
                    <p className="text-sm font-medium text-gray-500 mb-1">예시</p>
                    <p className="text-gray-700">{term.example}</p>
                  </div>
                )}

                {term.relatedTerms && term.relatedTerms.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    <span className="text-sm font-medium text-gray-500 mr-2">
                      관련 용어:
                    </span>
                    {term.relatedTerms.map((related) => (
                      <button
                        key={related}
                        onClick={() => setSearchTerm(related)}
                        className="text-sm px-3 py-1 bg-gray-100 text-gray-700 rounded-full hover:bg-ontological-100 hover:text-ontological-700 transition-colors"
                      >
                        {related}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredTerms.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-xl text-gray-500 mb-4">
              "{searchTerm}"에 대한 검색 결과가 없습니다.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("전체");
              }}
              className="px-6 py-3 bg-ontological-600 text-white rounded-lg font-medium hover:bg-ontological-700 transition-colors"
            >
              전체 보기
            </button>
          </motion.div>
        )}

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <a
            href="/"
            className="inline-block px-8 py-4 border-2 border-ontological-600 text-ontological-600 rounded-lg font-medium hover:bg-ontological-50 transition-colors"
          >
            ← 홈으로 돌아가기
          </a>
        </motion.div>
      </div>
    </div>
  );
}
