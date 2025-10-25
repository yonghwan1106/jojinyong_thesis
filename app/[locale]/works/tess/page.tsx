"use client";

import { motion } from "framer-motion";
import { Scale, Heart, Quote, Flame, ArrowRight } from "lucide-react";
import { Link } from "@/i18n/routing";

export default function TessPage() {
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
          <div className="inline-block px-4 py-2 bg-axiological-100 text-axiological-700 rounded-full font-medium mb-4">
            가치론적 카타르시스
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">테스</h1>
          <p className="text-2xl text-gray-600 mb-2">토마스 하디</p>
          <p className="text-xl text-gray-500">복수의 카타르시스</p>
        </motion.div>

        {/* 30초 요약 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-r from-axiological-500 to-axiological-600 text-white rounded-2xl p-8 mb-8"
        >
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
            <Heart className="w-8 h-8" />
            30초 요약
          </h2>
          <p className="text-lg leading-relaxed">
            테스는 순수하고 선한 여성입니다. 하지만 알렉이라는 남자에게 침해당하고,
            사회로부터 부당하게 비난받습니다. 그녀가 겪는 고통은 명백히 <strong>부당</strong>합니다.
            마지막에 테스가 알렉을 죽이는 장면 - 법적으로는 범죄이지만, 독자들은 이 순간
            <strong>기쁨</strong>을 느낍니다. 이것이 바로 <strong>복수의 카타르시스</strong>,
            정의가 실현되는 순간의 통쾌함입니다.
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
              <strong>테스 더버빌</strong>은 가난하지만 순수한 시골 처녀입니다.
              가족의 생계를 돕기 위해 부유한 친척(으로 알려진) <strong>알렉 더버빌</strong>의
              집에서 일하게 됩니다.
            </p>
            <p className="text-lg font-medium text-axiological-700">
              체이스 숲 사건: 무슨 일이 일어났는가?
            </p>
            <p>
              어느 밤, 체이스 숲에서 테스와 알렉 사이에 무언가가 일어납니다.
              소설은 이 장면을 모호하게 묘사합니다. 하지만 많은 독자들은 이를
              <strong className="text-axiological-600"> 폭력적인 침해</strong>로 해석합니다.
            </p>
            <div className="bg-axiological-50 p-6 rounded-xl">
              <p className="font-medium text-axiological-700 mb-2">
                연구의 핵심 개념: "해석된 텍스트" (Interpreted Text)
              </p>
              <p>
                독자가 이 장면을 어떻게 해석하느냐에 따라 이후의 모든 감정이 달라집니다.
                만약 독자가 알렉을 <strong>가해자</strong>로 규정하면, 테스의 고통은
                <strong className="text-axiological-600"> 부당함</strong>이 되고, 이것이
                나중의 복수 카타르시스를 위한 도덕적 토대가 됩니다.
              </p>
            </div>
            <p>
              테스는 아이를 낳지만 곧 죽습니다. 그녀는 과거를 잊고 새로운 삶을 시작합니다.
              <strong> 엔젤 클레어</strong>라는 순수한 남자를 만나 사랑에 빠지고 결혼합니다.
            </p>
            <p>
              하지만 신혼 첫날 밤, 테스가 과거를 고백하자 엔젤은 그녀를 버립니다.
              이것은 <strong className="text-axiological-600">이중 잣대</strong>입니다.
              엔젤 자신도 과거가 있었지만, 테스는 용서받지 못합니다.
            </p>
            <p>
              버림받은 테스는 다시 알렉과 마주칩니다. 생활고에 시달리던 그녀는 결국
              알렉과 함께 살게 됩니다. 하지만 엔젤이 돌아옵니다. 너무 늦게.
            </p>
            <p className="text-xl font-bold text-axiological-700">
              그리고 테스는 알렉을 칼로 찔러 죽입니다.
            </p>
          </div>
        </motion.div>

        {/* 왜 부당한가? */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-axiological-50 to-axiological-100 rounded-2xl p-8 mb-8"
        >
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Scale className="w-8 h-8 text-axiological-600" />
            왜 독자는 분노하는가?
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-xl font-bold text-axiological-700 mb-3">
                1. 테스는 선하다
              </h3>
              <p className="text-gray-700">
                소설 전체가 테스의 순수함을 강조합니다. 부제목이 <em>"순수한 여인"</em>입니다.
                그녀는 가족을 위해 희생하고, 아이를 사랑하고, 진실되게 살아갑니다.
                독자는 그녀에게 깊이 공감합니다.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-xl font-bold text-axiological-700 mb-3">
                2. 알렉은 악하다 (독자의 해석)
              </h3>
              <p className="text-gray-700">
                알렉은 자신의 권력과 부를 이용해 테스를 침해했습니다 (독자의 해석).
                그 후에도 그녀를 계속 괴롭힙니다. 독자는 그를 명백한 <strong className="text-axiological-600">
                악당</strong>으로 규정합니다.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-xl font-bold text-axiological-700 mb-3">
                3. 사회는 불공정하다
              </h3>
              <p className="text-gray-700 mb-3">
                <strong>이중 잣대</strong>: 엔젤도 과거가 있지만 용서받습니다.
                테스는 피해자인데도 비난받습니다.
              </p>
              <p className="text-gray-700">
                <strong>계급 차별</strong>: 부유한 알렉은 아무 처벌도 받지 않습니다.
                가난한 테스는 계속 고통받습니다.
              </p>
            </div>

            <p className="text-lg font-medium text-center bg-white p-4 rounded-xl">
              선한 사람이 부당하게 고통받는 것을 목격하면서,
              독자는 강렬한 <span className="text-axiological-600">정의로운 분노</span>를 느낍니다.
            </p>
          </div>
        </motion.div>

        {/* 복수의 순간 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8"
        >
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Flame className="w-8 h-8 text-axiological-600" />
            복수의 순간: 카타르시스
          </h2>
          <div className="space-y-6">
            <blockquote className="border-l-4 border-axiological-500 pl-6 py-4 bg-axiological-50 rounded text-lg italic">
              "알렉이 죽은 후, 테스는 기쁨을 느꼈다..."
              <span className="block text-sm mt-2 not-italic text-gray-600">
                - 소설 본문
              </span>
            </blockquote>

            <p className="text-gray-700 leading-relaxed">
              테스가 알렉을 칼로 찌르는 장면. 법적으로는 명백히 살인입니다.
              하지만 <strong className="text-axiological-600">도덕적으로는?</strong>
            </p>

            <div className="bg-gradient-to-r from-axiological-50 to-axiological-100 p-6 rounded-xl">
              <p className="font-bold text-axiological-700 mb-3 text-lg">
                독자의 감정
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-axiological-600 mr-2">✓</span>
                  <span><strong>통쾌함</strong> - "잘했다!", "당연하다!"</span>
                </li>
                <li className="flex items-start">
                  <span className="text-axiological-600 mr-2">✓</span>
                  <span><strong>만족감</strong> - 정의가 실현되었다는 느낌</span>
                </li>
                <li className="flex items-start">
                  <span className="text-axiological-600 mr-2">✓</span>
                  <span><strong>카타르시스</strong> - 쌓였던 분노가 해소되는 쾌감</span>
                </li>
              </ul>
            </div>

            <p className="text-gray-700 leading-relaxed">
              이것이 <strong className="text-axiological-600">복수의 카타르시스</strong>입니다.
              법정의 정의가 실패한 곳에서, 개인의 행동이 도덕적 정의를 실현합니다.
              독자는 이 순간 법을 넘어선 더 높은 정의를 목격합니다.
            </p>

            <blockquote className="text-2xl font-serif italic text-center text-axiological-700 py-6">
              "'정의'는 실현되었다"
              <span className="block text-base mt-2 not-italic text-gray-600">
                - 소설의 마지막 문장
              </span>
            </blockquote>

            <p className="text-gray-700">
              이 문장은 이중적 의미를 가집니다. 법정에서 테스는 사형당합니다 - 이것이
              법률적 "정의"입니다. 하지만 독자가 경험한 진짜 정의는 이미 실현되었습니다.
              테스가 알렉을 죽였을 때 말입니다.
            </p>
          </div>
        </motion.div>

        {/* 아리스토텔레스가 거부한 것 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 mb-8"
        >
          <h2 className="text-3xl font-bold mb-6">
            왜 아리스토텔레스는 이런 플롯을 거부했는가?
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              아리스토텔레스는 『시학』에서 명확히 말했습니다:
            </p>
            <blockquote className="border-l-4 border-gray-400 pl-6 py-2 italic text-lg">
              "선한 사람이 행복에서 불행으로 떨어지는 것은 적절하지 않다.
              이것은 연민도 공포도 불러일으키지 않고, 단지 혐오감만 준다."
            </blockquote>
            <p>
              왜일까요? 아리스토텔레스에게 비극은 <strong>존재의 본질</strong>을
              깨닫는 것이어야 했습니다. "이 사람이 누구인지" 발견하는 것입니다.
            </p>
            <p>
              하지만 선한 사람이 부당하게 고통받으면, 관객은 존재가 아닌
              <strong className="text-axiological-600"> 정의와 불의</strong>에 대해
              생각하게 됩니다. "이것은 옳은가? 공정한가?"
            </p>
            <p className="font-medium">
              이것은 아리스토텔레스의 철학 체계에 맞지 않았습니다. 그래서 그는 이런
              플롯을 "부적절"하다고 거부했습니다.
            </p>
            <p className="text-lg text-axiological-700 font-bold">
              하지만 현대 독자에게 테스의 이야기는 극도로 강력합니다. 왜냐하면
              우리는 <strong>가치</strong>를 중요하게 여기기 때문입니다.
            </p>
          </div>
        </motion.div>

        {/* 현대적 의미 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8"
        >
          <h2 className="text-3xl font-bold mb-6">현대 사회와의 연결</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p className="text-lg">
              테스의 이야기는 19세기 소설이지만, 오늘날에도 공명합니다:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-axiological-50 p-6 rounded-xl">
                <h3 className="font-bold text-axiological-700 mb-2">미투 운동</h3>
                <p className="text-sm">
                  권력자의 성범죄 피해자들이 목소리를 내는 것. 테스처럼 많은 이들이
                  부당하게 비난받았고, 정의를 요구합니다.
                </p>
              </div>
              <div className="bg-axiological-50 p-6 rounded-xl">
                <h3 className="font-bold text-axiological-700 mb-2">이중 잣대</h3>
                <p className="text-sm">
                  여성과 남성, 부자와 가난한 자에게 다른 기준을 적용하는 사회적 불공정.
                  테스가 겪은 것과 같은 차별이 여전히 존재합니다.
                </p>
              </div>
              <div className="bg-axiological-50 p-6 rounded-xl">
                <h3 className="font-bold text-axiological-700 mb-2">복수의 욕망</h3>
                <p className="text-sm">
                  법이 정의를 실현하지 못할 때, 우리는 직접적인 복수를 꿈꿉니다.
                  "더 글로리" 같은 복수 드라마가 인기 있는 이유입니다.
                </p>
              </div>
              <div className="bg-axiological-50 p-6 rounded-xl">
                <h3 className="font-bold text-axiological-700 mb-2">정의에 대한 갈증</h3>
                <p className="text-sm">
                  "악은 반드시 벌을 받아야 한다"는 인간의 근본적 욕구.
                  테스의 복수는 이 욕구를 충족시킵니다.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 가치론적 카타르시스 분석 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-r from-axiological-50 to-axiological-100 rounded-2xl p-8 mb-8"
        >
          <h2 className="text-3xl font-bold mb-6">가치론적 카타르시스의 완벽한 예</h2>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed text-lg">
              『테스』는 가치론적 카타르시스의 모든 요소를 갖추고 있습니다:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-6 rounded-xl">
                <div className="text-3xl text-axiological-600 mb-2">1</div>
                <h3 className="font-bold text-axiological-700 mb-2">도덕적 판단</h3>
                <p className="text-sm text-gray-700">
                  독자는 테스가 <strong>선</strong>하고 알렉이 <strong>악</strong>하다고
                  명확히 판단합니다.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <div className="text-3xl text-axiological-600 mb-2">2</div>
                <h3 className="font-bold text-axiological-700 mb-2">정의로운 분노</h3>
                <p className="text-sm text-gray-700">
                  선한 사람이 고통받는 것을 보며 강렬한 분노와 공감을 느낍니다.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <div className="text-3xl text-axiological-600 mb-2">3</div>
                <h3 className="font-bold text-axiological-700 mb-2">복수의 카타르시스</h3>
                <p className="text-sm text-gray-700">
                  악이 처벌받을 때 극도의 만족감과 쾌감을 경험합니다.
                </p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed mt-6">
              이것은 <strong>존재</strong>가 아닌 <strong className="text-axiological-600">가치</strong>에
              기반한 카타르시스입니다. 우리가 무엇을 옳다고 믿는지, 무엇이 정의롭다고
              느끼는지가 미학적 경험의 핵심이 됩니다.
            </p>
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col md:flex-row gap-4 justify-between"
        >
          <Link href="/works/hamlet">
            <button className="px-6 py-3 border-2 border-ontological-600 text-ontological-600 rounded-lg font-medium hover:bg-ontological-50 transition-colors">
              ← 이전: 햄릿
            </button>
          </Link>
          <div className="flex gap-4">
            <Link href="/catharsis/axiological">
              <button className="px-6 py-3 border-2 border-axiological-600 text-axiological-600 rounded-lg font-medium hover:bg-axiological-50 transition-colors">
                가치론적 카타르시스
              </button>
            </Link>
            <Link href="/works/moby-dick">
              <button className="px-6 py-3 bg-imaginary-600 text-white rounded-lg font-medium hover:bg-imaginary-700 transition-colors flex items-center gap-2">
                다음: 모비딕
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
