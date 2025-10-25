"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Scale, Sparkles } from "lucide-react";
import { Link } from "@/i18n/routing";

export default function ThreeTypes() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const types = [
    {
      id: "ontological",
      icon: Brain,
      color: "ontological",
      title: "존재론적 카타르시스",
      subtitle: "진실을 깨달았을 때의 충격",
      description:
        "숨겨진 진실이 드러나는 순간, 또는 진실을 알 수 없다는 깨달음에서 오는 카타르시스",
      examples: [
        "영화 <식스 센스>의 반전 순간",
        "<인셉션>에서 꿈과 현실의 경계를 깨닫는 순간",
        "미스터리 소설의 범인이 밝혀지는 장면",
      ],
      literaryWork: "햄릿",
      href: "/catharsis/ontological",
    },
    {
      id: "axiological",
      icon: Scale,
      color: "axiological",
      title: "가치론적 카타르시스",
      subtitle: "정의가 실현되었을 때의 통쾌함",
      description:
        "선한 사람이 보상받거나, 악한 사람이 처벌받을 때 느끼는 도덕적 만족감",
      examples: [
        "<어벤져스>에서 타노스가 패배하는 순간",
        "드라마에서 나쁜 사람이 벌 받는 장면",
        "억울한 주인공이 명예를 회복하는 순간",
      ],
      literaryWork: "테스",
      href: "/catharsis/axiological",
    },
    {
      id: "imaginary",
      icon: Sparkles,
      color: "imaginary",
      title: "가상적 카타르시스",
      subtitle: "불가능한 꿈에 몰입할 때의 황홀함",
      description:
        "현실이 아닌 강력한 환상이나 이상에 빠져들 때 느끼는 짜릿하고도 위험한 쾌감",
      examples: [
        "<인터스텔라>의 우주 탐험에 몰입하는 경험",
        "<반지의 제왕>의 장대한 모험",
        "영웅이 세상을 구하는 판타지",
      ],
      literaryWork: "모비딕",
      href: "/catharsis/imaginary",
    },
  ];

  return (
    <section
      id="catharsis-types"
      ref={ref}
      className="py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            세 가지 카타르시스
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            이 연구의 핵심 발견: 카타르시스는 하나가 아닌 세 가지 차원을 가집니다.
            <br />
            각각은 우리가 예술 작품을 경험하는 서로 다른 방식입니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {types.map((type, index) => (
            <motion.div
              key={type.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div
                className={`h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-${type.color}-100 hover:border-${type.color}-300`}
              >
                {/* Card Header */}
                <div
                  className={`bg-gradient-to-br from-${type.color}-500 to-${type.color}-600 p-8 text-white`}
                >
                  <div
                    className={`w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4`}
                  >
                    <type.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{type.title}</h3>
                  <p className="text-lg opacity-90">{type.subtitle}</p>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {type.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-bold text-sm text-gray-500 uppercase mb-3">
                      일상 속 예시
                    </h4>
                    <ul className="space-y-2">
                      {type.examples.map((example, i) => (
                        <li key={i} className="flex items-start">
                          <span
                            className={`w-1.5 h-1.5 rounded-full bg-${type.color}-500 mt-2 mr-2 flex-shrink-0`}
                          ></span>
                          <span className="text-sm text-gray-600">
                            {example}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div
                    className={`bg-${type.color}-50 rounded-lg p-4 mb-4`}
                  >
                    <p className="text-sm text-gray-600 mb-1">
                      문학 작품 예시
                    </p>
                    <p
                      className={`font-bold text-${type.color}-700 text-lg`}
                    >
                      {type.literaryWork}
                    </p>
                  </div>

                  <Link href={type.href}>
                    <button
                      className={`w-full py-3 bg-${type.color}-600 text-white rounded-lg font-medium hover:bg-${type.color}-700 transition-colors`}
                    >
                      자세히 알아보기
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold text-center mb-8">
            세 가지 카타르시스 비교
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left font-bold text-gray-700">
                    구분
                  </th>
                  <th className="px-6 py-4 text-left font-bold text-ontological-700">
                    존재론적
                  </th>
                  <th className="px-6 py-4 text-left font-bold text-axiological-700">
                    가치론적
                  </th>
                  <th className="px-6 py-4 text-left font-bold text-imaginary-700">
                    가상적
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-700">
                    핵심 경험
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    진실을 깨닫거나 알 수 없음을 인식
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    정의가 실현되는 것을 목격
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    강력한 환상에 몰입
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-700">
                    핵심 질문
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    "이것이 진짜인가?"
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    "이것이 옳은가?"
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    "나는 무엇을 창조할 수 있는가?"
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-700">
                    주요 감정
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    경외감, 충격, 깨달음
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    통쾌함, 분노, 공감
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    황홀함, 짜릿함, 도취
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
