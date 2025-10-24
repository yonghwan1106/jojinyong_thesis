"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Film, GraduationCap, Sparkles } from "lucide-react";

export default function WhyImportant() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const reasons = [
    {
      icon: Film,
      title: "영화/드라마 선택에 도움",
      description:
        "오늘 기분에 맞는 작품을 찾을 수 있어요. 반전이 필요한가요? 정의 구현? 아니면 장대한 모험?",
    },
    {
      icon: Heart,
      title: "내 감정을 이해하기",
      description:
        "왜 어떤 작품에서 눈물이 나고, 어떤 작품에서 속이 시원한지 이제 설명할 수 있습니다.",
    },
    {
      icon: GraduationCap,
      title: "예술 작품을 더 깊이 즐기기",
      description:
        "작가가 어떤 카타르시스를 의도했는지 알면, 작품을 더 풍부하게 감상할 수 있습니다.",
    },
    {
      icon: Sparkles,
      title: "2,400년 된 질문에 대한 새로운 답",
      description:
        "아리스토텔레스 이후 처음으로 제시되는 종합적이고 현대적인 카타르시스 이론입니다.",
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            왜 이 연구가 중요한가요?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            학술적인 이론이 일상생활과 무슨 관계가 있을까요?
            <br />
            사실 우리의 감정과 예술 경험을 이해하는 열쇠입니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-ontological-500 to-imaginary-500 rounded-xl flex items-center justify-center mb-4">
                <reason.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-r from-ontological-600 via-axiological-600 to-imaginary-600 rounded-2xl p-1"
        >
          <div className="bg-white rounded-xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-center mb-6">
              이 연구의 학술적 의의
            </h3>
            <div className="space-y-4 text-gray-700">
              <p className="text-lg leading-relaxed">
                <strong className="text-ontological-600">존재론적 차원</strong>을 통해
                아리스토텔레스의 전통을 현대적으로 재해석하고,
              </p>
              <p className="text-lg leading-relaxed">
                <strong className="text-axiological-600">가치론적 차원</strong>을 추가하여
                도덕적 판단과 정의감이 카타르시스에서 차지하는 중요성을 밝혔으며,
              </p>
              <p className="text-lg leading-relaxed">
                <strong className="text-imaginary-600">가상적 차원</strong>을 발견함으로써
                니체 이후의 철학적 통찰을 문학 이론에 통합했습니다.
              </p>
              <p className="text-lg leading-relaxed mt-6 text-center">
                이로써 <span className="font-bold bg-gradient-to-r from-ontological-600 via-axiological-600 to-imaginary-600 bg-clip-text text-transparent">
                  카타르시스는 단일한 현상이 아니라,
                  <br />
                  인간의 미학적 경험을 구성하는 세 가지 근본적인 차원
                </span>임이 밝혀졌습니다.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12 text-center"
        >
          <a
            href="/about"
            className="inline-block px-8 py-4 bg-gradient-to-r from-ontological-600 to-imaginary-600 text-white rounded-lg font-medium text-lg hover:shadow-lg transition-shadow"
          >
            논문 전문 알아보기
          </a>
        </motion.div>
      </div>
    </section>
  );
}
