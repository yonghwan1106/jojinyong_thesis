"use client";

import { motion } from "framer-motion";
import { Scale, Heart, Film, BookOpen } from "lucide-react";
import { Link } from "@/i18n/routing";

export default function AxiologicalPage() {
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
          <div className="w-20 h-20 bg-gradient-to-br from-axiological-500 to-axiological-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Scale className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold mb-4 text-axiological-700">
            가치론적 카타르시스
          </h1>
          <p className="text-2xl text-gray-600">
            정의가 실현되었을 때의 통쾌함
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8"
        >
          <h2 className="text-3xl font-bold mb-6 text-axiological-700">
            쉽게 말하면?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            드라마에서 나쁜 사람이 마침내 벌을 받는 장면, <strong className="text-axiological-600">어벤져스</strong>에서
            타노스가 패배하는 순간을 생각해보세요. "잘됐다!", "속이 시원하다!" 하면서 느끼는
            그 강렬한 만족감, 그것이 바로 가치론적 카타르시스입니다.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            이것은 <strong>정의와 불의</strong>, <strong>선과 악</strong>에 대한 우리의 도덕적 판단이
            실현되는 순간의 쾌감입니다. 좋은 사람이 보상받거나, 나쁜 사람이 처벌받을 때
            우리는 깊은 만족을 느낍니다.
          </p>
        </motion.div>

        {/* 아리스토텔레스가 놓친 것 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-r from-axiological-50 to-axiological-100 rounded-2xl p-8 mb-8"
        >
          <h2 className="text-3xl font-bold mb-6">
            아리스토텔레스가 놓친 것
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            아리스토텔레스는 <strong>선한 사람이 불행해지는 플롯</strong>을
            비극으로 인정하지 않았습니다. 왜일까요?
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            그에게 비극은 <strong>"존재의 본질"</strong>을 깨닫는 것이어야 했습니다.
            하지만 선한 사람이 부당하게 고통받으면, 관객은 존재가 아닌
            <strong className="text-axiological-600"> 정의와 불의</strong>에 대해
            생각하게 됩니다. 이것은 그의 철학 체계에 맞지 않았습니다.
          </p>
          <p className="text-gray-700 leading-relaxed">
            하지만 현대의 우리는 압니다. <strong>도덕적 판단과 정의감</strong>이야말로
            인간이 예술 작품을 경험하는 가장 강력한 방식 중 하나라는 것을요.
          </p>
        </motion.div>

        {/* 세 가지 형태 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold mb-6">세 가지 주요 형태</h2>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center gap-3 mb-3">
                <Heart className="w-6 h-6 text-axiological-600" />
                <h3 className="text-xl font-bold text-axiological-700">
                  1. 도덕적 만족 - 선이 승리할 때
                </h3>
              </div>
              <p className="text-gray-700 mb-2">
                선한 주인공이 마침내 보상을 받거나 행복을 찾을 때의 만족감
              </p>
              <p className="text-sm text-gray-600 italic">
                예: 신데렐라가 왕자를 만나는 순간, 반지의 제왕에서 반지가 파괴되는 순간
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center gap-3 mb-3">
                <Scale className="w-6 h-6 text-axiological-600" />
                <h3 className="text-xl font-bold text-axiological-700">
                  2. 복수의 카타르시스 - 악이 처벌될 때
                </h3>
              </div>
              <p className="text-gray-700 mb-2">
                나쁜 사람이 마침내 벌을 받을 때 느끼는 통쾌함과 정의의 실현
              </p>
              <p className="text-sm text-gray-600 italic">
                예: 테스가 알렉을 살해하는 장면, 드라마에서 악역이 감옥에 가는 장면
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center gap-3 mb-3">
                <Heart className="w-6 h-6 text-axiological-600" />
                <h3 className="text-xl font-bold text-axiological-700">
                  3. 분노와 공감 - 부당함을 목격할 때
                </h3>
              </div>
              <p className="text-gray-700 mb-2">
                억울하게 고통받는 주인공에 대한 깊은 공감과 정의로운 분노
              </p>
              <p className="text-sm text-gray-600 italic">
                예: 테스가 부당하게 대우받을 때, 레 미제라블에서 장 발장의 억울함
              </p>
            </div>
          </div>
        </motion.div>

        {/* 현대 작품 예시 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-axiological-50 rounded-2xl p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Film className="w-8 h-8 text-axiological-600" />
            <h2 className="text-3xl font-bold">현대 영화/드라마 속 예시</h2>
          </div>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-xl font-bold text-axiological-700 mb-2">
                어벤져스: 엔드게임 (2019)
              </h3>
              <p className="text-gray-700 mb-3">
                타노스가 우주 인구의 절반을 죽인 것은 명백한 악입니다. 어벤져스가
                타노스를 물리치는 순간, 전 세계 관객들이 느낀 것은 단순한 액션 영화의
                쾌감이 아니라 <strong className="text-axiological-600">정의가 실현되는
                도덕적 만족감</strong>이었습니다.
              </p>
              <p className="text-sm text-axiological-600 font-medium">
                "이것이 정의다" - 순수한 가치론적 카타르시스
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-xl font-bold text-axiological-700 mb-2">
                기생충 (2019)
              </h3>
              <p className="text-gray-700 mb-3">
                부유한 박 사장 가족과 가난한 기택 가족의 대비는 사회적 불평등에
                대한 분노를 불러일으킵니다. 마지막에 기택이 박 사장을 찔러 죽이는
                순간, 관객은 복잡한 감정을 느낍니다 - 충격이면서도 어떤 면에서는
                "그럴 만했다"는 가치론적 이해.
              </p>
              <p className="text-sm text-axiological-600 font-medium">
                계급 불평등에 대한 분노가 만들어낸 어두운 카타르시스
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-xl font-bold text-axiological-700 mb-2">
                더 글로리 (드라마, 2022)
              </h3>
              <p className="text-gray-700 mb-3">
                학교 폭력 피해자가 철저하게 계획한 복수를 실행하는 과정. 가해자들이
                하나씩 응분의 대가를 치르는 것을 보면서 시청자들은 강렬한
                <strong className="text-axiological-600"> 복수의 카타르시스</strong>를
                경험합니다.
              </p>
              <p className="text-sm text-axiological-600 font-medium">
                "악은 반드시 벌을 받아야 한다"는 정의감의 실현
              </p>
            </div>
          </div>
        </motion.div>

        {/* 문학 작품 예시 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-8 h-8 text-axiological-600" />
            <h2 className="text-3xl font-bold">문학 작품 속 예시</h2>
          </div>
          <div className="bg-gradient-to-r from-axiological-50 to-axiological-100 p-6 rounded-xl">
            <h3 className="text-2xl font-bold text-axiological-700 mb-4">
              테스 - 복수의 카타르시스
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              테스는 순수하고 선한 여성입니다. 하지만 알렉에 의해 침해당하고,
              사회로부터 부당하게 비난받습니다. 독자는 그녀의 고통에 깊이 공감하며
              분노합니다.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              마지막에 테스가 알렉을 칼로 찌르는 장면 - 법적으로는 살인이지만,
              도덕적으로는? 많은 독자들이 이 순간 <strong className="text-axiological-600">
              기쁨</strong>을 느낍니다. 테스 자신도 행위 후 "기쁨"을 느낀다고
              텍스트는 말합니다.
            </p>
            <blockquote className="border-l-4 border-axiological-500 pl-4 italic text-lg text-gray-700 mb-4">
              "'정의'는 실현되었다"
              <span className="block text-sm mt-2 not-italic text-gray-600">
                - 소설의 마지막 문장 (법정의 판결이지만, 동시에 도덕적 정의에 대한 아이러니)
              </span>
            </blockquote>
            <p className="text-gray-700 leading-relaxed">
              이것이 바로 가치론적 카타르시스입니다. 우리의 <strong>정의감</strong>이
              만족되는 순간, 비록 그것이 법을 어긴 것이더라도 우리는 깊은 쾌감을 느낍니다.
            </p>
            <div className="mt-6">
              <Link href="/works/tess">
                <button className="px-6 py-3 bg-axiological-600 text-white rounded-lg font-medium hover:bg-axiological-700 transition-colors">
                  테스 상세 분석 보기
                </button>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* 철학적 배경 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 mb-8"
        >
          <h2 className="text-3xl font-bold mb-6">철학적 배경</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              <strong className="text-axiological-600">니체와 사르트르</strong>는
              인간이 자신의 <strong>가치를 스스로 창조</strong>하는 존재라고 말했습니다.
              우리는 무엇이 선이고 악인지, 무엇이 정의로운지를 판단하고 그에 따라 살아갑니다.
            </p>
            <p>
              가치론적 카타르시스는 이 <strong>가치 창조 행위</strong>가 성공하는
              것을 목격하는 경험입니다. 주인공이 자신의 가치를 지키거나(테스의 복수),
              세계가 우리의 정의감과 일치하는 방향으로 움직일 때(악당의 처벌) 우리는
              카타르시스를 느낍니다.
            </p>
            <p>
              아리스토텔레스는 이를 "부적절한" 감정으로 배제했지만, 현대인에게
              <strong className="text-axiological-600"> 도덕적 판단과 정의에 대한
              열망</strong>은 예술 경험의 핵심입니다.
            </p>
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col md:flex-row gap-4 justify-between"
        >
          <Link href="/catharsis/ontological">
            <button className="px-6 py-3 border-2 border-ontological-600 text-ontological-600 rounded-lg font-medium hover:bg-ontological-50 transition-colors">
              ← 존재론적 카타르시스
            </button>
          </Link>
          <div className="flex gap-4">
            <Link href="/">
              <button className="px-6 py-3 border-2 border-axiological-600 text-axiological-600 rounded-lg font-medium hover:bg-axiological-50 transition-colors">
                홈으로
              </button>
            </Link>
            <Link href="/catharsis/imaginary">
              <button className="px-6 py-3 bg-imaginary-600 text-white rounded-lg font-medium hover:bg-imaginary-700 transition-colors">
                가상적 카타르시스 →
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
