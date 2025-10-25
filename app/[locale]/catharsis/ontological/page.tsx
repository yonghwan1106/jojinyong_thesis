"use client";

import { motion } from "framer-motion";
import { Brain, Lightbulb, Film, BookOpen } from "lucide-react";
import { Link } from "@/i18n/routing";

export default function OntologicalPage() {
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
          <div className="w-20 h-20 bg-gradient-to-br from-ontological-500 to-ontological-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Brain className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold mb-4 text-ontological-700">
            존재론적 카타르시스
          </h1>
          <p className="text-2xl text-gray-600">
            진실을 깨달았을 때의 충격
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8"
        >
          <h2 className="text-3xl font-bold mb-6 text-ontological-700">
            쉽게 말하면?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            미스터리 영화에서 범인이 밝혀지는 순간, 또는 <strong className="text-ontological-600">식스 센스</strong>의
            마지막 반전을 보는 순간을 생각해보세요. "아, 그래서 그랬구나!" 하면서 느끼는 그 강렬한 깨달음,
            그것이 바로 존재론적 카타르시스입니다.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            이것은 <strong>무엇이 진짜인지</strong>, <strong>진실이 무엇인지</strong>를 알게 되는
            순간의 쾌감입니다. 때로는 진실을 <strong>알 수 없다</strong>는 깨달음 자체가
            카타르시스가 되기도 합니다.
          </p>
        </motion.div>

        {/* 두 가지 형태 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold mb-6">두 가지 형태</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-ontological-50 to-ontological-100 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="w-8 h-8 text-ontological-600" />
                <h3 className="text-xl font-bold text-ontological-700">
                  진실의 발견
                </h3>
              </div>
              <p className="text-gray-700 mb-4">
                숨겨진 진실이 드러나는 순간의 카타르시스
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-ontological-600 mr-2">•</span>
                  <span className="text-gray-700">
                    <strong>외디프스 왕</strong>: 자신의 정체를 깨닫는 순간
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-ontological-600 mr-2">•</span>
                  <span className="text-gray-700">
                    <strong>셜록 홈즈</strong>: 범인이 밝혀지는 순간
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-ontological-600 mr-2">•</span>
                  <span className="text-gray-700">
                    <strong>식스 센스</strong>: 주인공이 유령임을 깨닫는 반전
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Brain className="w-8 h-8 text-gray-600" />
                <h3 className="text-xl font-bold text-gray-700">
                  알 수 없음의 깨달음
                </h3>
              </div>
              <p className="text-gray-700 mb-4">
                진실을 알 수 없다는 인식 자체가 주는 카타르시스
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  <span className="text-gray-700">
                    <strong>햄릿</strong>: 유령이 진짜인지 확인할 수 없는 고통
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  <span className="text-gray-700">
                    <strong>인셉션</strong>: 꿈인지 현실인지 알 수 없는 결말
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  <span className="text-gray-700">
                    <strong>셔터 아일랜드</strong>: 무엇이 환상인지 모호함
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 현대 영화 예시 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-ontological-50 rounded-2xl p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Film className="w-8 h-8 text-ontological-600" />
            <h2 className="text-3xl font-bold">현대 영화 속 예시</h2>
          </div>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-xl font-bold text-ontological-700 mb-2">
                식스 센스 (The Sixth Sense, 1999)
              </h3>
              <p className="text-gray-700 mb-3">
                영화 내내 관객은 주인공이 살아있다고 믿습니다. 마지막 반전에서
                그가 실제로는 유령이었다는 사실이 밝혀지는 순간, 영화 전체가
                다시 해석되면서 강렬한 존재론적 카타르시스를 경험합니다.
              </p>
              <p className="text-sm text-ontological-600 font-medium">
                "무엇이 진짜 실재인가?"에 대한 충격적인 깨달음
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-xl font-bold text-ontological-700 mb-2">
                인셉션 (Inception, 2010)
              </h3>
              <p className="text-gray-700 mb-3">
                팽이가 계속 돌아가는지 멈추는지 확인하지 않고 영화가 끝납니다.
                우리는 주인공이 꿈속에 있는지 현실에 있는지 영원히 알 수 없습니다.
                이 "알 수 없음" 자체가 독특한 형태의 존재론적 카타르시스를 만듭니다.
              </p>
              <p className="text-sm text-ontological-600 font-medium">
                "우리는 진실을 알 수 있는가?"에 대한 철학적 질문
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-xl font-bold text-ontological-700 mb-2">
                유주얼 서스펙츠 (The Usual Suspects, 1995)
              </h3>
              <p className="text-gray-700 mb-3">
                평범해 보이던 용의자가 실제로는 전설적인 범죄자 카이저 소제였다는
                반전. 관객이 믿었던 모든 것이 정교한 거짓말이었음이 밝혀지면서
                실재에 대한 인식이 완전히 뒤집힙니다.
              </p>
              <p className="text-sm text-ontological-600 font-medium">
                "우리가 보는 것이 과연 진실인가?"
              </p>
            </div>
          </div>
        </motion.div>

        {/* 문학 작품 예시 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-8 h-8 text-ontological-600" />
            <h2 className="text-3xl font-bold">문학 작품 속 예시</h2>
          </div>
          <div className="bg-gradient-to-r from-ontological-50 to-ontological-100 p-6 rounded-xl">
            <h3 className="text-2xl font-bold text-ontological-700 mb-4">
              햄릿 - 인식 불가능성의 카타르시스
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              햄릿은 아버지의 유령을 만납니다. 유령은 클로디어스가 자신을 살해했다고
              말합니다. 하지만 그 유령이 진짜일까요, 아니면 악마의 속임수일까요?
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              햄릿은 진실을 확인할 방법이 없습니다. 그는 유령의 말을 믿어야 할지,
              아니면 의심해야 할지 결정할 수 없습니다. 이 인식론적 불가능성이
              극의 핵심 비극이자, 관객이 경험하는 카타르시스의 원천입니다.
            </p>
            <blockquote className="border-l-4 border-ontological-500 pl-4 italic text-lg text-gray-700 mb-4">
              "존재인가, 비존재인가, 그것이 문제로다"
            </blockquote>
            <p className="text-gray-700 leading-relaxed">
              이 유명한 대사는 단순히 자살에 대한 고민이 아닙니다. 그것은
              <strong className="text-ontological-600"> 무엇이 진짜로 존재하는지 알 수 없는</strong>
              인간 조건에 대한 깊은 통찰입니다.
            </p>
            <div className="mt-6">
              <Link href="/works/hamlet">
                <button className="px-6 py-3 bg-ontological-600 text-white rounded-lg font-medium hover:bg-ontological-700 transition-colors">
                  햄릿 상세 분석 보기
                </button>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* 철학적 배경 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 mb-8"
        >
          <h2 className="text-3xl font-bold mb-6">철학적 배경</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              <strong className="text-ontological-600">아리스토텔레스</strong>는
              비극의 카타르시스가 주인공의 <strong>'존재(Being)'</strong>가
              드러나는 순간에서 온다고 믿었습니다. 『외디프스 왕』에서 외디프스가
              "자신이 누구인지(Who he is)" 깨닫는 순간처럼 말입니다.
            </p>
            <p>
              하지만 <strong className="text-ontological-600">현대 철학</strong>
              (특히 하이데거)은 더 나아갑니다. 때로는 존재가 근본적으로
              <strong> 인식 불가능</strong>하다는 깨달음 자체가 심오한
              카타르시스를 만들어낼 수 있습니다.
            </p>
            <p>
              『햄릿』은 아리스토텔레스 모델을 넘어서는 완벽한 예입니다.
              외디프스는 진실을 발견하지만, 햄릿은 진실을 발견할 수 <strong>없습니다</strong>.
              그리고 바로 이 불가능성이 현대 관객에게 더 강력한 카타르시스를 선사합니다.
            </p>
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col md:flex-row gap-4 justify-between"
        >
          <Link href="/">
            <button className="px-6 py-3 border-2 border-ontological-600 text-ontological-600 rounded-lg font-medium hover:bg-ontological-50 transition-colors">
              ← 홈으로 돌아가기
            </button>
          </Link>
          <div className="flex gap-4">
            <Link href="/catharsis/axiological">
              <button className="px-6 py-3 bg-axiological-600 text-white rounded-lg font-medium hover:bg-axiological-700 transition-colors">
                가치론적 카타르시스 →
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
