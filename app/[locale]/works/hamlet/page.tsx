"use client";

import { motion } from "framer-motion";
import { Brain, Quote, Lightbulb, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HamletPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-ontological-100 text-ontological-700 rounded-full font-medium mb-4">
            존재론적 카타르시스
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">햄릿</h1>
          <p className="text-2xl text-gray-600 mb-2">윌리엄 셰익스피어</p>
          <p className="text-xl text-gray-500">인식 불가능성의 카타르시스</p>
        </motion.div>

        {/* 30초 요약 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-r from-ontological-500 to-ontological-600 text-white rounded-2xl p-8 mb-8"
        >
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
            <Lightbulb className="w-8 h-8" />
            30초 요약
          </h2>
          <p className="text-lg leading-relaxed">
            햄릿은 아버지의 유령을 만납니다. 유령은 "클로디어스가 나를 죽였다"고 말합니다.
            하지만 그 유령이 진짜일까요? 악마의 속임수일까요? 햄릿은 영원히 확신할 수 없습니다.
            이 <strong>진실을 알 수 없다는 깨달음</strong> 자체가 관객에게 강렬한 카타르시스를
            선사합니다. 이것이 현대적 비극의 본질입니다.
          </p>
        </motion.div>

        {/* 이야기 개요 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8"
        >
          <h2 className="text-3xl font-bold mb-6">이야기 개요</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              덴마크의 왕자 햄릿. 그의 아버지(선왕)가 갑자기 죽고, 어머니 거트루드는
              한 달도 안 되어 숙부 클로디어스와 재혼합니다. 햄릿은 충격에 빠집니다.
            </p>
            <p>
              어느 날 밤, 성벽에 아버지의 유령이 나타납니다. 유령은 햄릿에게 충격적인
              진실을 폭로합니다:
            </p>
            <blockquote className="border-l-4 border-ontological-500 pl-6 py-2 bg-ontological-50 rounded">
              <p className="italic text-lg">
                "클로디어스가 나를 독살했다. 복수하라!"
              </p>
            </blockquote>
            <p>
              하지만 햄릿은 곧바로 행동하지 못합니다. 왜일까요?
            </p>
            <p className="text-xl font-medium text-ontological-700">
              그 유령이 정말 아버지일까? 아니면 악마가 자신을 속이는 것일까?
            </p>
          </div>
        </motion.div>

        {/* 핵심 문제: 인식론적 불가능성 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-ontological-50 to-ontological-100 rounded-2xl p-8 mb-8"
        >
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Brain className="w-8 h-8 text-ontological-600" />
            핵심 문제: 진실을 알 수 없다
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-xl font-bold text-ontological-700 mb-3">
                유령은 이율배반이다
              </h3>
              <p className="text-gray-700 mb-4">
                유령은 다른 사람들(호레이쇼, 병사들)에게도 목격됩니다. 그러니 실재하는
                것처럼 보입니다. 하지만 3막에서 거트루드는 햄릿이 보는 유령을 보지
                못합니다. 그렇다면 환각일 수도 있습니다.
              </p>
              <p className="text-gray-700 font-medium">
                유령은 <span className="text-ontological-600">실재하면서 동시에 실재하지 않을 수 있습니다</span>.
                이것은 논리적으로 모순입니다. 칸트는 이를 "이율배반"이라고 불렀습니다.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-xl font-bold text-ontological-700 mb-3">
                확인할 방법이 없다
              </h3>
              <p className="text-gray-700 mb-4">
                햄릿은 유령의 말이 진실인지 확인하려고 "극중극"을 시도합니다.
                클로디어스 앞에서 독살 장면을 연기하게 하여 그의 반응을 보는 것입니다.
              </p>
              <p className="text-gray-700 mb-4">
                클로디어스는 당황하여 자리를 뜹니다. 햄릿은 이를 유죄의 증거로 봅니다.
                하지만 정말 그럴까요? 단순히 불쾌한 연극 때문에 자리를 뜬 것은 아닐까요?
              </p>
              <p className="text-gray-700 font-medium text-ontological-700">
                절대적 확신은 불가능합니다. 햄릿은 영원히 의심 속에 갇혀있습니다.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-xl font-bold text-ontological-700 mb-3">
                행동의 마비
              </h3>
              <p className="text-gray-700">
                많은 사람들이 햄릿을 "우유부단한 사람"으로 봅니다. 하지만 진짜 문제는
                성격이 아닙니다. 그는 <strong>인식론적으로 불가능한 상황</strong>에
                놓여있습니다. 확신 없이 어떻게 사람을 죽일 수 있을까요? 만약 유령이
                거짓말을 했다면 그는 무고한 사람을 죽이는 것입니다.
              </p>
            </div>
          </div>
        </motion.div>

        {/* 가장 유명한 독백 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8"
        >
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Quote className="w-8 h-8 text-ontological-600" />
            "존재인가, 비존재인가"
          </h2>
          <blockquote className="text-2xl font-serif italic text-gray-700 mb-6 text-center py-6">
            "To be, or not to be, that is the question"
            <span className="block text-lg mt-2 not-italic text-gray-500">
              존재인가, 비존재인가, 그것이 문제로다
            </span>
          </blockquote>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              이 유명한 대사는 보통 "자살할 것인가, 말 것인가"로 해석됩니다.
              하지만 이 연구는 더 깊은 의미를 제시합니다.
            </p>
            <div className="bg-ontological-50 p-6 rounded-xl">
              <p className="font-medium text-ontological-700 mb-3">
                이것은 존재론적 질문입니다:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-ontological-600 mr-2">•</span>
                  <span>유령이 <strong>존재하는가</strong>, 아닌가?</span>
                </li>
                <li className="flex items-start">
                  <span className="text-ontological-600 mr-2">•</span>
                  <span>클로디어스의 죄가 <strong>실재하는가</strong>, 아닌가?</span>
                </li>
                <li className="flex items-start">
                  <span className="text-ontological-600 mr-2">•</span>
                  <span>우리는 진실이 <strong>무엇인지</strong> 알 수 있는가?</span>
                </li>
              </ul>
            </div>
            <p className="text-lg font-medium">
              햄릿의 비극은 <span className="text-ontological-600">존재를 알 수 없다는 것</span>입니다.
              이것이 현대인에게 공명하는 이유입니다.
            </p>
          </div>
        </motion.div>

        {/* 아리스토텔레스 모델과의 대조 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold mb-6">
            외디프스 vs 햄릿: 고전 vs 현대
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-700 mb-4">
                외디프스 왕 (고전 비극)
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">✓</span>
                  <span><strong>진실이 드러납니다</strong> - 외디프스는 자신이 누구인지 깨닫습니다</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">✓</span>
                  <span><strong>존재의 발견</strong> - "나는 누구인가?"에 대한 명확한 답</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">✓</span>
                  <span><strong>아리스토텔레스적</strong> - 인식이 가능한 세계</span>
                </li>
              </ul>
            </div>

            <div className="bg-ontological-50 p-6 rounded-xl border-2 border-ontological-300">
              <h3 className="text-xl font-bold text-ontological-700 mb-4">
                햄릿 (현대 비극)
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-ontological-600 mr-2">✓</span>
                  <span><strong>진실을 알 수 없습니다</strong> - 유령이 진짜인지 영원히 불확실</span>
                </li>
                <li className="flex items-start">
                  <span className="text-ontological-600 mr-2">✓</span>
                  <span><strong>인식 불가능성</strong> - "무엇이 진실인가?"에 답할 수 없음</span>
                </li>
                <li className="flex items-start">
                  <span className="text-ontological-600 mr-2">✓</span>
                  <span><strong>포스트모던적</strong> - 확실성이 없는 세계</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 현대인에게 주는 의미 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="bg-gradient-to-r from-ontological-50 to-imaginary-50 rounded-2xl p-8 mb-8"
        >
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Users className="w-8 h-8 text-ontological-600" />
            왜 현대인은 햄릿에 공감하는가?
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p className="text-lg">
              21세기를 사는 우리도 햄릿처럼 <strong className="text-ontological-600">
              확신 없이 살아갑니다</strong>:
            </p>
            <ul className="space-y-3 text-lg">
              <li className="flex items-start">
                <span className="text-ontological-600 mr-3 text-2xl">•</span>
                <span>
                  <strong>뉴스가 진짜인가 가짜 뉴스인가?</strong>
                  <br />
                  <span className="text-base text-gray-600">
                    햄릿처럼 우리도 무엇이 진실인지 확신할 수 없습니다.
                  </span>
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-ontological-600 mr-3 text-2xl">•</span>
                <span>
                  <strong>SNS 이미지가 실제 삶인가 연출인가?</strong>
                  <br />
                  <span className="text-base text-gray-600">
                    겉모습과 실재 사이의 간극을 끊임없이 의심합니다.
                  </span>
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-ontological-600 mr-3 text-2xl">•</span>
                <span>
                  <strong>내 선택이 옳은가?</strong>
                  <br />
                  <span className="text-base text-gray-600">
                    햄릿처럼 우리도 확신 없이 중요한 결정을 내려야 합니다.
                  </span>
                </span>
              </li>
            </ul>
            <p className="text-lg font-medium text-ontological-700 mt-6">
              햄릿은 400년 전 작품이지만, <strong>인식의 한계</strong>라는 현대적 주제를
              다룹니다. 이것이 햄릿이 오늘날까지 사랑받는 이유입니다.
            </p>
          </div>
        </motion.div>

        {/* 카타르시스 분석 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8"
        >
          <h2 className="text-3xl font-bold mb-6">존재론적 카타르시스의 완벽한 예</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              외디프스는 <strong>"나는 누구인가?"</strong>를 발견하면서 카타르시스를 만듭니다.
              햄릿은 <strong>"나는 무엇을 알 수 있는가?"</strong>라는 질문 자체가 답이 없다는
              것을 보여주면서 카타르시스를 만듭니다.
            </p>
            <div className="bg-ontological-50 p-6 rounded-xl">
              <p className="font-bold text-ontological-700 mb-3 text-lg">
                관객의 카타르시스는 어디서 오는가?
              </p>
              <p className="mb-3">
                햄릿이 실패하는 것을 보면서, 우리는 <strong>인간 조건의 근본적 한계</strong>를
                깨닫습니다. 우리도 햄릿처럼 완전한 확신을 가질 수 없습니다.
              </p>
              <p>
                이 깨달음 자체가 - 비록 환멸적이지만 - 심오한 <strong className="text-ontological-600">
                존재론적 통찰</strong>이며, 바로 이것이 현대적 카타르시스입니다.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col md:flex-row gap-4 justify-between"
        >
          <Link href="/catharsis/ontological">
            <button className="px-6 py-3 border-2 border-ontological-600 text-ontological-600 rounded-lg font-medium hover:bg-ontological-50 transition-colors">
              ← 존재론적 카타르시스
            </button>
          </Link>
          <div className="flex gap-4">
            <Link href="/works/tess">
              <button className="px-6 py-3 bg-axiological-600 text-white rounded-lg font-medium hover:bg-axiological-700 transition-colors flex items-center gap-2">
                다음: 테스
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
