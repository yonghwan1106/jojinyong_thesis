"use client";

import { motion } from "framer-motion";
import { Sparkles, Zap, Film, BookOpen, AlertTriangle } from "lucide-react";
import { Link } from "@/i18n/routing";

export default function ImaginaryPage() {
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
          <div className="w-20 h-20 bg-gradient-to-br from-imaginary-500 to-imaginary-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold mb-4 text-imaginary-700">
            가상적 카타르시스
          </h1>
          <p className="text-2xl text-gray-600">
            불가능한 꿈에 몰입할 때의 황홀함
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8"
        >
          <h2 className="text-3xl font-bold mb-6 text-imaginary-700">
            쉽게 말하면?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            <strong className="text-imaginary-600">인터스텔라</strong>에서 우주를 탐험하는 장면,
            <strong className="text-imaginary-600"> 반지의 제왕</strong>의 장대한 판타지 세계에
            완전히 빠져드는 순간을 생각해보세요. 현실에서는 불가능한 것, 실제로는 존재하지
            않는 것에 몰입하면서 느끼는 그 강렬하고도 위험한 쾌감, 그것이 바로 가상적
            카타르시스입니다.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            이것은 <strong>현실이 아닌 강력한 환상</strong>이나 <strong>이상</strong>을
            마치 진짜인 것처럼 받아들이고, 그 환상 속에서 자신을 신처럼 느끼는 경험입니다.
            짜릿하지만, 동시에 위험하기도 합니다.
          </p>
        </motion.div>

        {/* 위험한 매력 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-r from-imaginary-50 to-imaginary-100 rounded-2xl p-8 mb-8 border-2 border-imaginary-200"
        >
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="w-8 h-8 text-imaginary-600" />
            <h2 className="text-3xl font-bold">
              가장 짜릿하지만 가장 위험한 카타르시스
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            가상적 카타르시스는 세 가지 중 <strong className="text-imaginary-600">가장 강렬</strong>하지만,
            동시에 <strong className="text-imaginary-600">가장 위험</strong>합니다.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            왜냐하면 그것은 <strong>현실을 거부</strong>하고 <strong>자신만의 환상</strong>을
            절대적 진실로 믿는 경험이기 때문입니다. 에이헙 선장처럼 이 환상에 너무 깊이
            빠지면, 자신과 주변 사람들을 파멸로 이끌 수 있습니다.
          </p>
          <p className="text-gray-700 leading-relaxed">
            하지만 바로 그 <strong className="text-imaginary-600">위험함</strong> 때문에
            가상적 카타르시스는 가장 매혹적이고 강력한 미학적 경험이 됩니다.
          </p>
        </motion.div>

        {/* 핵심 특징 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold mb-6">핵심 특징</h2>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center gap-3 mb-3">
                <Zap className="w-6 h-6 text-imaginary-600" />
                <h3 className="text-xl font-bold text-imaginary-700">
                  1. 환상을 실재로 믿기
                </h3>
              </div>
              <p className="text-gray-700 mb-2">
                객관적 현실이 아닌 것을, 자신의 의지로 만든 환상을 절대적 진리로 받아들입니다.
              </p>
              <p className="text-sm text-gray-600 italic">
                예: 에이헙이 고래를 "절대악"으로 규정하고 믿는 것
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center gap-3 mb-3">
                <Sparkles className="w-6 h-6 text-imaginary-600" />
                <h3 className="text-xl font-bold text-imaginary-700">
                  2. 자기 신격화의 쾌감
                </h3>
              </div>
              <p className="text-gray-700 mb-2">
                자신의 의지로 현실을 재정의하고, 스스로를 세계의 창조자처럼 느끼는 경험
              </p>
              <p className="text-sm text-gray-600 italic">
                예: 니체의 초인(Übermensch), 도덕을 초월한 존재가 되는 환상
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center gap-3 mb-3">
                <AlertTriangle className="w-6 h-6 text-imaginary-600" />
                <h3 className="text-xl font-bold text-imaginary-700">
                  3. 현실 거부와 집착
                </h3>
              </div>
              <p className="text-gray-700 mb-2">
                객관적 사실을 무시하고 자신만의 "진실"에 광적으로 몰입
              </p>
              <p className="text-sm text-gray-600 italic">
                예: 에이헙이 모든 경고를 무시하고 고래를 추격하는 것
              </p>
            </div>
          </div>
        </motion.div>

        {/* 현대 작품 예시 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-imaginary-50 rounded-2xl p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Film className="w-8 h-8 text-imaginary-600" />
            <h2 className="text-3xl font-bold">현대 영화 속 예시</h2>
          </div>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-xl font-bold text-imaginary-700 mb-2">
                인터스텔라 (Interstellar, 2014)
              </h3>
              <p className="text-gray-700 mb-3">
                블랙홀 속으로 들어가 시공간을 초월하는 장면, 5차원 공간에서 과거와
                소통하는 광경. 과학적으로는 불가능하지만, 우리는 그 장대한 환상에
                완전히 몰입합니다. 인류를 구한다는 <strong className="text-imaginary-600">
                거대한 이상</strong>이 현실의 한계를 초월하게 만듭니다.
              </p>
              <p className="text-sm text-imaginary-600 font-medium">
                "사랑이 시공간을 초월한다" - 과학을 넘어선 환상의 힘
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-xl font-bold text-imaginary-700 mb-2">
                매트릭스 (The Matrix, 1999)
              </h3>
              <p className="text-gray-700 mb-3">
                네오가 "선택받은 자"라는 환상을 믿고 받아들이는 과정. 현실 세계의
                법칙을 거부하고 자신의 의지로 매트릭스를 지배하는 장면들. 우리는
                그의 <strong className="text-imaginary-600">초월적 힘</strong>에
                도취됩니다.
              </p>
              <p className="text-sm text-imaginary-600 font-medium">
                "나는 선택받은 자다" - 자기 신격화의 완벽한 예시
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-xl font-bold text-imaginary-700 mb-2">
                반지의 제왕 (The Lord of the Rings)
              </h3>
              <p className="text-gray-700 mb-3">
                중간계라는 완전한 판타지 세계, 절대반지라는 절대적 힘. 관객은
                이 거대한 환상 세계에 몰입하며, 선과 악의 우주적 대결이라는
                <strong className="text-imaginary-600"> 장엄한 환상</strong>을 경험합니다.
              </p>
              <p className="text-sm text-imaginary-600 font-medium">
                현실을 잊고 완전히 다른 세계에 빠져드는 경험
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
            <BookOpen className="w-8 h-8 text-imaginary-600" />
            <h2 className="text-3xl font-bold">문학 작품 속 예시</h2>
          </div>
          <div className="bg-gradient-to-r from-imaginary-50 to-imaginary-100 p-6 rounded-xl">
            <h3 className="text-2xl font-bold text-imaginary-700 mb-4">
              모비딕 - 광적 추구의 카타르시스
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              에이헙 선장은 자신의 다리를 앗아간 흰 고래를 단순한 동물이 아닌
              <strong className="text-imaginary-600"> "절대악의 화신"</strong>으로
              규정합니다. 이것은 객관적 사실이 아닌 에이헙 자신이 만들어낸 환상입니다.
            </p>
            <blockquote className="border-l-4 border-imaginary-500 pl-4 italic text-lg text-gray-700 mb-4">
              "모든 가시적 대상은 판지로 만든 가면에 불과하다. 내 목표는 그 가면을 뚫고 공격하는 것이다!"
            </blockquote>
            <p className="text-gray-700 mb-4 leading-relaxed">
              에이헙은 현실을 거부하고 자신만의 <strong>형이상학적 체계</strong>를
              만듭니다. 고래와의 싸움은 더 이상 복수가 아니라, 우주의 악 자체와의
              대결이 됩니다.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              독자들은 이 <strong className="text-imaginary-600">거대하고 장대한 환상</strong>에
              휩쓸립니다. 비록 그것이 광기이고 결국 파멸로 이어진다는 것을 알면서도,
              우리는 에이헙의 초월적 의지에 매혹됩니다. 이것이 바로 가상적 카타르시스의
              위험하고도 황홀한 쾌감입니다.
            </p>
            <p className="text-gray-700 leading-relaxed">
              멜빌은 이를 <strong>"질병이기도 한 인간의 위대함"</strong>이라고 표현했습니다.
              완벽한 가상적 카타르시스의 본질입니다.
            </p>
            <div className="mt-6">
              <Link href="/works/moby-dick">
                <button className="px-6 py-3 bg-imaginary-600 text-white rounded-lg font-medium hover:bg-imaginary-700 transition-colors">
                  모비딕 상세 분석 보기
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
              <strong className="text-imaginary-600">플라톤</strong>은 예술을
              "시뮬라크르(simulacrum)" - 실재의 복제본의 복제본 - 라고 비판했습니다.
              하지만 이 "가짜" 이미지들이 때로는 강력한 힘을 가집니다.
            </p>
            <p>
              <strong className="text-imaginary-600">니체</strong>는 더 나아갑니다.
              그의 <strong>초인(Übermensch)</strong> 개념은 실재하는 존재론적
              진리가 아니라, <strong>강력한 가상적 이상</strong>입니다. 하지만
              이 이상을 믿고 따르는 것이 인간을 위대하게 만든다고 니체는 말합니다.
            </p>
            <p>
              가상적 카타르시스는 이 통찰의 미학적 형태입니다. 우리는
              <strong className="text-imaginary-600"> 환상임을 알면서도</strong>
              그것에 몰입하고, 그 환상이 주는 자기 긍정과 초월의 쾌감을 즐깁니다.
            </p>
            <p className="font-medium text-imaginary-700">
              위험하지만, 바로 그 위험 때문에 가장 짜릿한 카타르시스입니다.
            </p>
          </div>
        </motion.div>

        {/* 경고 박스 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-yellow-50 border-2 border-yellow-300 rounded-2xl p-6 mb-8"
        >
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold text-yellow-800 mb-2">
                주의: 현실과 환상의 경계
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                가상적 카타르시스는 예술 작품 속에서 경험할 때는 안전하고 가치 있습니다.
                하지만 현실에서 자신의 환상을 절대적 진리로 믿고 행동하면 (에이헙처럼)
                위험할 수 있습니다. 좋은 예술은 우리가 이 경계를 이해하도록 도와줍니다.
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
          <Link href="/catharsis/axiological">
            <button className="px-6 py-3 border-2 border-axiological-600 text-axiological-600 rounded-lg font-medium hover:bg-axiological-50 transition-colors">
              ← 가치론적 카타르시스
            </button>
          </Link>
          <Link href="/">
            <button className="px-6 py-3 bg-gradient-to-r from-ontological-600 via-axiological-600 to-imaginary-600 text-white rounded-lg font-medium hover:shadow-lg transition-shadow">
              홈으로 돌아가기
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
