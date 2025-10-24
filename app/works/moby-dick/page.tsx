"use client";

import { motion } from "framer-motion";
import { Sparkles, Waves, Quote, Skull, AlertTriangle, Zap } from "lucide-react";
import Link from "next/link";

export default function MobyDickPage() {
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
          <div className="inline-block px-4 py-2 bg-imaginary-100 text-imaginary-700 rounded-full font-medium mb-4">
            가상적 카타르시스
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">모비딕</h1>
          <p className="text-2xl text-gray-600 mb-2">허먼 멜빌</p>
          <p className="text-xl text-gray-500">광적 추구의 카타르시스</p>
        </motion.div>

        {/* 30초 요약 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-r from-imaginary-500 to-imaginary-600 text-white rounded-2xl p-8 mb-8"
        >
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
            <Sparkles className="w-8 h-8" />
            30초 요약
          </h2>
          <p className="text-lg leading-relaxed">
            에이헙 선장은 자신의 다리를 앗아간 흰 고래를 단순한 동물이 아닌
            <strong> "절대악의 화신"</strong>으로 규정합니다. 그는 현실을 거부하고
            자신만의 거대한 환상 - 우주의 악과 대결하는 영웅이라는 환상 - 을 만들어냅니다.
            이 장대하고 위험한 환상에 몰입하는 경험, 그것이 바로 <strong>가상적 카타르시스</strong>입니다.
            짜릿하지만 결국 파멸로 이어지는, 가장 강렬하고도 위험한 쾌감입니다.
          </p>
        </motion.div>

        {/* 이야기 개요 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8"
        >
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Waves className="w-8 h-8 text-imaginary-600" />
            이야기 개요
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              <strong>에이헙 선장</strong>은 포경선 피쿼드 호의 선장입니다.
              그는 이전 항해에서 거대한 흰 고래 <strong className="text-imaginary-600">모비딕</strong>에게
              한쪽 다리를 잃었습니다.
            </p>
            <p className="text-lg font-medium text-imaginary-700">
              그것은 단순한 사고였을까요? 아니면...?
            </p>
            <p>
              대부분의 사람에게 그것은 불운한 사고입니다. 고래는 그저 동물일 뿐입니다.
              하지만 에이헙에게는 아닙니다.
            </p>
            <div className="bg-imaginary-50 p-6 rounded-xl border-2 border-imaginary-200">
              <p className="font-bold text-imaginary-700 mb-3">
                에이헙의 해석: 고래는 악의 화신이다
              </p>
              <p className="mb-3">
                에이헙은 고래를 <strong>"헤아릴 수 없는 악의"</strong>의 상징으로 규정합니다.
                모비딕은 더 이상 단순한 동물이 아닙니다. 그것은 우주의 모든 악,
                모든 불의, 모든 고통의 <strong className="text-imaginary-600">가면</strong>입니다.
              </p>
              <p className="text-sm text-gray-600">
                이것은 객관적 사실이 아닙니다. 에이헙 자신이 만들어낸 <strong>환상</strong>입니다.
                하지만 그는 이 환상을 절대적 진리로 믿습니다.
              </p>
            </div>
            <p>
              에이헙은 피쿼드 호와 선원들을 이끌고 모비딕을 추격합니다.
              모든 경고를 무시하고, 모든 위험을 감수하고, 광적으로 고래를 쫓습니다.
            </p>
            <p className="text-xl font-bold text-imaginary-700">
              결국 모비딕은 발견되고, 에이헙은 죽고, 배는 침몰합니다. 단 한 명(이스마엘)만 살아남습니다.
            </p>
          </div>
        </motion.div>

        {/* 가장 유명한 연설 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8"
        >
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Quote className="w-8 h-8 text-imaginary-600" />
            에이헙의 선언: "가면을 뚫고 공격하라"
          </h2>
          <blockquote className="text-xl font-serif italic text-gray-700 mb-6 p-6 bg-imaginary-50 rounded-xl border-l-4 border-imaginary-500">
            "모든 가시적 대상은 판지로 만든 가면에 불과하다.
            하지만 모든 사건에는 그 뒤에 알 수 없는 무언가, 추론할 수 없는 무언가가 있다.
            내 목표는 그 가면을 뚫고 공격하는 것이다!"
          </blockquote>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              이 연설이 에이헙의 철학을 완벽하게 드러냅니다:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-imaginary-50 p-6 rounded-xl">
                <h3 className="font-bold text-imaginary-700 mb-2">현실 거부</h3>
                <p className="text-sm">
                  눈에 보이는 현실(고래는 그저 동물이다)은 "가면"에 불과합니다.
                  에이헙은 객관적 사실을 거부합니다.
                </p>
              </div>
              <div className="bg-imaginary-50 p-6 rounded-xl">
                <h3 className="font-bold text-imaginary-700 mb-2">자신만의 진리</h3>
                <p className="text-sm">
                  가면 뒤에 "진짜 실재"가 있다고 믿습니다. 하지만 그것은
                  에이헙 자신이 만들어낸 형이상학적 체계입니다.
                </p>
              </div>
            </div>
            <p className="text-lg font-medium text-imaginary-700 mt-4">
              에이헙은 자신의 의지로 세계의 의미를 <strong>재정의</strong>합니다.
              이것이 가상적 카타르시스의 핵심입니다.
            </p>
          </div>
        </motion.div>

        {/* 가치론적에서 가상적으로의 변화 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-r from-axiological-50 via-purple-50 to-imaginary-50 rounded-2xl p-8 mb-8"
        >
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Zap className="w-8 h-8 text-imaginary-600" />
            복수에서 광기로: 카타르시스의 변형
          </h2>
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              에이헙의 여정은 세 가지 카타르시스가 어떻게 서로 연결되고 변형되는지 보여줍니다:
            </p>

            <div className="space-y-4">
              <div className="bg-white p-6 rounded-xl border-l-4 border-axiological-500">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-axiological-500 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <h3 className="text-lg font-bold text-axiological-700">
                    시작: 가치론적 카타르시스 (복수)
                  </h3>
                </div>
                <p className="text-gray-700">
                  처음에는 단순한 복수입니다. "고래가 내 다리를 앗아갔으니, 죽여야 한다."
                  이것은 정상적인 가치론적 분노입니다.
                </p>
              </div>

              <div className="flex items-center justify-center">
                <div className="text-4xl text-imaginary-600">↓</div>
              </div>

              <div className="bg-white p-6 rounded-xl border-l-4 border-purple-500">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <h3 className="text-lg font-bold text-purple-700">
                    변형: 의미의 확장
                  </h3>
                </div>
                <p className="text-gray-700">
                  점차 고래는 더 이상 단순한 동물이 아니게 됩니다.
                  에이헙은 고래에게 <strong className="text-imaginary-600">형이상학적 실재</strong>를
                  투사합니다. 그것은 모든 악, 모든 불의의 상징이 됩니다.
                </p>
              </div>

              <div className="flex items-center justify-center">
                <div className="text-4xl text-imaginary-600">↓</div>
              </div>

              <div className="bg-white p-6 rounded-xl border-l-4 border-imaginary-500">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-imaginary-500 text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <h3 className="text-lg font-bold text-imaginary-700">
                    완성: 가상적 카타르시스 (광기)
                  </h3>
                </div>
                <p className="text-gray-700">
                  이제 에이헙의 추구는 개인적 복수를 넘어섭니다.
                  그는 <strong>우주적 악과 싸우는 영웅</strong>이 됩니다.
                  이것은 더 이상 현실이 아닌 <strong className="text-imaginary-600">강력한 환상</strong>입니다.
                </p>
              </div>
            </div>

            <p className="text-lg font-medium text-center bg-white p-4 rounded-xl">
              개인의 가치 판단이 <span className="text-imaginary-600">존재 자체의 본질</span>에
              대한 주장으로 변형됩니다.
            </p>
          </div>
        </motion.div>

        {/* 독자의 경험 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8"
        >
          <h2 className="text-3xl font-bold mb-6">
            독자의 카타르시스: 위험한 매혹
          </h2>
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed text-lg">
              독자는 에이헙의 광기를 <strong>알고 있습니다</strong>.
              그가 틀렸다는 것을, 그의 환상이 그와 선원들을 파멸로 이끌 것을 압니다.
              하지만 그럼에도 불구하고...
            </p>

            <div className="bg-gradient-to-r from-imaginary-50 to-imaginary-100 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-imaginary-700 mb-4">
                우리는 그의 환상에 휩쓸립니다
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <Sparkles className="w-5 h-5 text-imaginary-600 mr-2 mt-1 flex-shrink-0" />
                  <span>
                    <strong>장대함</strong> - 에이헙의 추구는 평범한 복수를 넘어선
                    우주적 규모의 대결입니다.
                  </span>
                </li>
                <li className="flex items-start">
                  <Sparkles className="w-5 h-5 text-imaginary-600 mr-2 mt-1 flex-shrink-0" />
                  <span>
                    <strong>초월성</strong> - 그는 일상의 한계를 넘어 자신만의
                    실재를 창조합니다.
                  </span>
                </li>
                <li className="flex items-start">
                  <Sparkles className="w-5 h-5 text-imaginary-600 mr-2 mt-1 flex-shrink-0" />
                  <span>
                    <strong>의지의 순수성</strong> - 에이헙은 모든 것을 걸고
                    자신의 목표를 추구합니다. 이 절대적 헌신이 매혹적입니다.
                  </span>
                </li>
              </ul>
            </div>

            <blockquote className="text-xl font-serif italic text-center text-imaginary-700 py-6 border-y-2 border-imaginary-200">
              "인간의 위대함이면서 동시에 질병"
              <span className="block text-base mt-2 not-italic text-gray-600">
                - 멜빌의 표현
              </span>
            </blockquote>

            <p className="text-gray-700 leading-relaxed">
              이것이 가상적 카타르시스의 본질입니다. 우리는 환상임을 알면서도
              그 환상의 <strong className="text-imaginary-600">힘과 아름다움</strong>에
              매혹됩니다. 짜릿하고, 황홀하고, 위험합니다.
            </p>
          </div>
        </motion.div>

        {/* 니체와의 연결 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="bg-gradient-to-br from-imaginary-50 to-imaginary-100 rounded-2xl p-8 mb-8"
        >
          <h2 className="text-3xl font-bold mb-6">니체의 초인과 에이헙</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              니체는 <strong className="text-imaginary-600">초인(Übermensch)</strong>을
              제시했습니다 - 전통적 도덕을 초월하여 자신만의 가치를 창조하는 존재.
            </p>
            <p>
              에이헙은 이것의 문학적 구현입니다:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-xl">
                <h3 className="font-bold text-imaginary-700 mb-2">전통 거부</h3>
                <p className="text-sm">
                  사람들이 "고래는 그저 동물"이라고 말하지만, 에이헙은 이를 거부하고
                  자신만의 의미를 창조합니다.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <h3 className="font-bold text-imaginary-700 mb-2">자기 신격화</h3>
                <p className="text-sm">
                  에이헙은 스스로를 우주적 악과 대결하는 영웅으로 규정합니다.
                  그는 자신을 신의 위치에 놓습니다.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <h3 className="font-bold text-imaginary-700 mb-2">의지의 절대성</h3>
                <p className="text-sm">
                  니체의 "힘에의 의지"처럼, 에이헙은 순수한 의지로 자신의 실재를 만듭니다.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <h3 className="font-bold text-imaginary-700 mb-2">위험한 귀결</h3>
                <p className="text-sm">
                  하지만 니체와 멜빌 모두 경고합니다: 이 힘은 파괴적일 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 경고 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-yellow-50 border-2 border-yellow-400 rounded-2xl p-8 mb-8"
        >
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-yellow-800">
            <AlertTriangle className="w-8 h-8" />
            가장 위험한 카타르시스
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p className="text-lg font-medium">
              가상적 카타르시스는 세 가지 중 <strong className="text-yellow-700">가장 강력</strong>하지만,
              동시에 <strong className="text-yellow-700">가장 위험</strong>합니다.
            </p>
            <div className="bg-white p-6 rounded-xl">
              <h3 className="font-bold text-yellow-800 mb-3">왜 위험한가?</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Skull className="w-5 h-5 text-yellow-600 mr-2 mt-1 flex-shrink-0" />
                  <span>
                    <strong>현실과의 단절</strong> - 환상을 진리로 믿으면 현실을 보지 못합니다.
                  </span>
                </li>
                <li className="flex items-start">
                  <Skull className="w-5 h-5 text-yellow-600 mr-2 mt-1 flex-shrink-0" />
                  <span>
                    <strong>타인의 희생</strong> - 에이헙의 환상은 선원들을 죽음으로 이끕니다.
                  </span>
                </li>
                <li className="flex items-start">
                  <Skull className="w-5 h-5 text-yellow-600 mr-2 mt-1 flex-shrink-0" />
                  <span>
                    <strong>파멸의 필연성</strong> - 현실을 거부한 환상은 결국 현실과 충돌합니다.
                  </span>
                </li>
              </ul>
            </div>
            <p className="text-lg bg-white p-4 rounded-xl border-l-4 border-yellow-500">
              <strong>중요</strong>: 예술 작품 속에서 경험하는 가상적 카타르시스는 안전합니다.
              하지만 현실에서 에이헙처럼 행동하면 위험합니다. 좋은 문학은 이 경계를
              이해하도록 돕습니다.
            </p>
          </div>
        </motion.div>

        {/* 현대적 의미 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8"
        >
          <h2 className="text-3xl font-bold mb-6">현대 사회와의 연결</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p className="text-lg">
              에이헙 같은 인물들은 오늘날에도 존재합니다:
            </p>
            <div className="space-y-3">
              <div className="bg-imaginary-50 p-6 rounded-xl">
                <h3 className="font-bold text-imaginary-700 mb-2">
                  음모론자들
                </h3>
                <p className="text-sm">
                  자신만의 "진실"을 믿고, 모든 증거를 자신의 서사에 맞춰 해석합니다.
                  에이헙처럼 현실을 거부하고 환상 속에 삽니다.
                </p>
              </div>
              <div className="bg-imaginary-50 p-6 rounded-xl">
                <h3 className="font-bold text-imaginary-700 mb-2">
                  극단적 이데올로기
                </h3>
                <p className="text-sm">
                  자신의 신념을 절대적 진리로 믿고, 다른 모든 것을 "가면"으로 치부합니다.
                  에이헙의 "가면을 뚫고 공격하라"는 태도와 유사합니다.
                </p>
              </div>
              <div className="bg-imaginary-50 p-6 rounded-xl">
                <h3 className="font-bold text-imaginary-700 mb-2">
                  광적인 야망
                </h3>
                <p className="text-sm">
                  불가능한 목표에 모든 것을 걸고, 주변 사람들을 희생시키는 리더들.
                  에이헙처럼 자신의 비전에 타인을 끌어들입니다.
                </p>
              </div>
            </div>
            <p className="text-lg font-medium text-imaginary-700 bg-imaginary-50 p-4 rounded-xl">
              『모비딕』은 이러한 광기의 매력과 위험을 동시에 보여줍니다.
              우리는 그 장대함에 매혹되면서도, 그 결말을 통해 경고를 받습니다.
            </p>
          </div>
        </motion.div>

        {/* 가상적 카타르시스 분석 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="bg-gradient-to-r from-imaginary-50 to-imaginary-100 rounded-2xl p-8 mb-8"
        >
          <h2 className="text-3xl font-bold mb-6">가상적 카타르시스의 완벽한 예</h2>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed text-lg">
              『모비딕』은 가상적 카타르시스의 모든 요소를 갖추고 있습니다:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-6 rounded-xl">
                <div className="text-3xl text-imaginary-600 mb-2">1</div>
                <h3 className="font-bold text-imaginary-700 mb-2">환상 창조</h3>
                <p className="text-sm text-gray-700">
                  에이헙은 고래를 절대악으로 <strong>재정의</strong>합니다.
                  이것은 객관적 사실이 아닌 그의 환상입니다.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <div className="text-3xl text-imaginary-600 mb-2">2</div>
                <h3 className="font-bold text-imaginary-700 mb-2">자기 신격화</h3>
                <p className="text-sm text-gray-700">
                  에이헙은 스스로를 우주적 전사로 규정합니다.
                  의지의 힘으로 세계의 의미를 만듭니다.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <div className="text-3xl text-imaginary-600 mb-2">3</div>
                <h3 className="font-bold text-imaginary-700 mb-2">독자의 몰입</h3>
                <p className="text-sm text-gray-700">
                  우리는 위험을 알면서도 그 장대한 환상에
                  매혹됩니다. 이것이 카타르시스입니다.
                </p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed mt-6 text-lg">
              이것은 <strong>진실</strong>도 <strong>정의</strong>도 아닌
              <strong className="text-imaginary-600"> 환상</strong>에 기반한 카타르시스입니다.
              가장 강렬하고, 가장 위험하고, 가장 인간적인 미학적 경험입니다.
            </p>
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex flex-col md:flex-row gap-4 justify-between"
        >
          <Link href="/works/tess">
            <button className="px-6 py-3 border-2 border-axiological-600 text-axiological-600 rounded-lg font-medium hover:bg-axiological-50 transition-colors">
              ← 이전: 테스
            </button>
          </Link>
          <div className="flex gap-4">
            <Link href="/catharsis/imaginary">
              <button className="px-6 py-3 border-2 border-imaginary-600 text-imaginary-600 rounded-lg font-medium hover:bg-imaginary-50 transition-colors">
                가상적 카타르시스
              </button>
            </Link>
            <Link href="/">
              <button className="px-6 py-3 bg-gradient-to-r from-ontological-600 via-axiological-600 to-imaginary-600 text-white rounded-lg font-medium hover:shadow-lg transition-shadow">
                홈으로 돌아가기
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
