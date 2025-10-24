"use client";

import { motion } from "framer-motion";
import { BookOpen, User, Calendar, School } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold mb-6 text-center">
            논문 소개
          </h1>
          <p className="text-xl text-gray-600 text-center mb-12">
            카타르시스 연구: 아리스토텔레스를 넘어
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-ontological-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <User className="w-6 h-6 text-ontological-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">저자</h2>
              <p className="text-lg text-gray-700">조진용</p>
            </div>
          </div>

          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-ontological-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <School className="w-6 h-6 text-ontological-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">학위</h2>
              <p className="text-lg text-gray-700">국립경북대학교 영문학 박사</p>
            </div>
          </div>

          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-ontological-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Calendar className="w-6 h-6 text-ontological-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">작성 시기</h2>
              <p className="text-lg text-gray-700">2025년 2월 21일</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-ontological-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <BookOpen className="w-6 h-6 text-ontological-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">논문 제목</h2>
              <p className="text-lg text-gray-700">카타르시스 연구 (Catharsis Studies)</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-ontological-50 to-imaginary-50 rounded-2xl p-8 mb-8"
        >
          <h2 className="text-3xl font-bold mb-6">논문 개요</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              본 논문은 아리스토텔레스 이후 2,400년 동안 계속되어 온 카타르시스 논쟁에
              근본적인 전환점을 제시합니다. 기존의 해석들이 아리스토텔레스의 단일한 정의를
              찾으려 했다면, 이 연구는 카타르시스가 본질적으로 <strong>세 가지 차원</strong>을
              가진 복합적인 현상임을 밝힙니다.
            </p>
            <p>
              <strong className="text-ontological-600">존재론적 차원</strong>은
              진실과 실재에 대한 깨달음에서 오는 카타르시스를,
            </p>
            <p>
              <strong className="text-axiological-600">가치론적 차원</strong>은
              정의와 도덕적 만족에서 오는 카타르시스를,
            </p>
            <p>
              <strong className="text-imaginary-600">가상적 차원</strong>은
              강력한 환상과 이상에 몰입할 때 느끼는 카타르시스를 설명합니다.
            </p>
            <p>
              이 삼원적 모델을 통해 『햄릿』, 『테스』, 『모비딕』과 같은 위대한 문학 작품들을
              새롭게 분석하고, 왜 우리가 각기 다른 작품에서 서로 다른 종류의 쾌감을
              경험하는지 설명합니다.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <h2 className="text-3xl font-bold mb-6">주요 기여</h2>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <span className="text-ontological-600 font-bold">1.</span>
              <p className="text-gray-700">
                <strong>아리스토텔레스 비판</strong>: 『시학』이 기술적 저작이 아니라
                시문학을 자신의 철학 체계에 편입시키려는 규범적 기획이었음을 밝힘
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-axiological-600 font-bold">2.</span>
              <p className="text-gray-700">
                <strong>가치론적 공백 발견</strong>: 아리스토텔레스 모델이 인간의
                도덕적 판단과 가치 지향성을 체계적으로 배제했음을 논증
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-imaginary-600 font-bold">3.</span>
              <p className="text-gray-700">
                <strong>삼원적 모델 제안</strong>: 존재론적, 가치론적, 가상적
                카타르시스라는 종합적이고 체계적인 새로운 이론 틀 구축
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-ontological-600 font-bold">4.</span>
              <p className="text-gray-700">
                <strong>문학 작품 재해석</strong>: 고전 명작들을 새로운 프레임워크로
                분석하여 이론의 설명력 입증
              </p>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <a
            href="/"
            className="inline-block px-8 py-4 bg-ontological-600 text-white rounded-lg font-medium text-lg hover:bg-ontological-700 transition-colors"
          >
            홈으로 돌아가기
          </a>
        </motion.div>
      </div>
    </div>
  );
}
