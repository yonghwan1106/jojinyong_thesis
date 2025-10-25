"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, ArrowRight } from "lucide-react";
import { Link } from "@/i18n/routing";

export default function LiteraryWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const works = [
    {
      id: "hamlet",
      title: "햄릿",
      author: "윌리엄 셰익스피어",
      type: "존재론적",
      typeColor: "ontological",
      summary: "유령을 봤다. 하지만 그것이 진짜일까?",
      description:
        "햄릿은 아버지의 유령을 만나지만, 그것이 진실인지 악마의 속임수인지 알 수 없습니다. 진실을 알 수 없다는 깨달음 자체가 카타르시스가 됩니다.",
      quote: "존재인가, 비존재인가, 그것이 문제로다",
      modernExample: "영화 <식스 센스>의 반전",
      href: "/works/hamlet",
    },
    {
      id: "tess",
      title: "테스",
      author: "토마스 하디",
      type: "가치론적",
      typeColor: "axiological",
      summary: "순수한 여인이 겪는 부당한 고통과 복수",
      description:
        "테스는 선한 사람이지만 부당하게 고통받습니다. 마지막에 그녀가 가해자를 처벌할 때, 독자는 복수의 카타르시스를 경험합니다.",
      quote: "'정의'는 실현되었다",
      modernExample: "드라마에서 악당이 벌 받는 장면",
      href: "/works/tess",
    },
    {
      id: "moby-dick",
      title: "모비딕",
      author: "허먼 멜빌",
      type: "가상적",
      typeColor: "imaginary",
      summary: "광적인 집착이 만들어낸 거대한 환상",
      description:
        "에이헙 선장은 고래를 절대악으로 만들고 그것과의 싸움에 모든 것을 겁니다. 이 장대한 환상에 몰입하는 것이 가상적 카타르시스입니다.",
      quote: "가면을 뚫고 공격하라!",
      modernExample: "<인터스텔라>의 우주 탐험",
      href: "/works/moby-dick",
    },
  ];

  return (
    <section
      id="literary-works"
      ref={ref}
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            명작으로 보는 카타르시스
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            세 가지 카타르시스는 실제 문학 작품에서 어떻게 나타날까요?
            <br />
            고전 명작들을 새로운 시각으로 분석합니다.
          </p>
        </motion.div>

        <div className="space-y-8">
          {works.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="md:flex">
                  {/* Left side - Visual */}
                  <div
                    className={`md:w-1/3 bg-gradient-to-br from-${work.typeColor}-500 to-${work.typeColor}-600 p-8 flex flex-col justify-center text-white`}
                  >
                    <div className="mb-4">
                      <BookOpen className="w-12 h-12 opacity-80" />
                    </div>
                    <h3 className="text-3xl font-bold mb-2">{work.title}</h3>
                    <p className="text-lg opacity-90 mb-4">{work.author}</p>
                    <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                      <span className="font-medium">{work.type} 카타르시스</span>
                    </div>
                  </div>

                  {/* Right side - Content */}
                  <div className="md:w-2/3 p-8">
                    <p className="text-xl font-medium text-gray-800 mb-4">
                      {work.summary}
                    </p>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {work.description}
                    </p>

                    <div className={`bg-${work.typeColor}-50 border-l-4 border-${work.typeColor}-500 p-4 mb-6`}>
                      <p className="text-sm text-gray-500 mb-1">명대사</p>
                      <p className={`text-lg font-medium text-${work.typeColor}-700 italic`}>
                        "{work.quote}"
                      </p>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">현대 작품과 비교하면</p>
                        <p className="font-medium text-gray-700">{work.modernExample}</p>
                      </div>
                      <Link href={work.href}>
                        <button
                          className={`flex items-center gap-2 px-6 py-3 bg-${work.typeColor}-600 text-white rounded-lg font-medium hover:bg-${work.typeColor}-700 transition-colors`}
                        >
                          자세히 보기
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
