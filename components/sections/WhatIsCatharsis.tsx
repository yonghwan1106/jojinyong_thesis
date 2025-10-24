"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Clock, Users } from "lucide-react";

export default function WhatIsCatharsis() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const facts = [
    {
      icon: Clock,
      title: "2,400년의 질문",
      description: "아리스토텔레스가 처음 언급한 이후 지금까지 논쟁 중",
    },
    {
      icon: Users,
      title: "세 가지 해석",
      description: "정화, 배설, 지적 명확화 - 어느 것이 맞을까요?",
    },
    {
      icon: Lightbulb,
      title: "새로운 발견",
      description: "카타르시스는 하나가 아닌 세 가지 차원을 가집니다",
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            카타르시스란 무엇일까요?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            영화를 보고 눈물을 흘렸던 경험이 있나요?
            <br />
            드라마에서 악당이 처벌받을 때 속이 시원했던 적은요?
            <br />
            그것이 바로 카타르시스입니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {facts.map((fact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <div className="w-12 h-12 bg-ontological-100 rounded-lg flex items-center justify-center mb-4">
                <fact.icon className="w-6 h-6 text-ontological-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">{fact.title}</h3>
              <p className="text-gray-600">{fact.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-r from-ontological-50 to-imaginary-50 p-8 md:p-12 rounded-2xl"
        >
          <h3 className="text-2xl font-bold mb-4">아리스토텔레스의 한계</h3>
          <p className="text-lg text-gray-700 mb-4">
            고대 그리스 철학자 아리스토텔레스는 비극을 보면서 느끼는 이 특별한 감정을
            '카타르시스'라고 불렀습니다. 하지만 정작 그는 이 단어를 딱 한 번만 사용하고,
            정확한 정의는 남기지 않았습니다.
          </p>
          <p className="text-lg text-gray-700">
            그 이후 2,400년 동안 학자들은 "카타르시스가 정확히 무엇인가?"에 대해 논쟁해왔습니다.
            이 연구는 그 오랜 논쟁에 새로운 답을 제시합니다.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
