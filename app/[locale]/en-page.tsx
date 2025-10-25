"use client";

import { motion } from "framer-motion";
import { Brain, Scale, Sparkles, BookOpen } from "lucide-react";

export default function EnglishPage() {
  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-ontological-600 via-axiological-600 to-imaginary-600 bg-clip-text text-transparent">
            Beyond Aristotle
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Three Dimensions of Catharsis
          </h2>
          <p className="text-xl text-gray-600 mb-4">
            A New Theory Solving a 2,400-Year-Old Mystery
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-8">
            <p className="text-gray-700">
              <strong>Jinyong Jo</strong> | Ph.D. in English Literature
              <br />
              <a
                href="https://graduation.gknu.ac.kr/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ontological-600 transition-colors font-medium"
              >
                Kyungguk National University
              </a> | February 2025
            </p>
          </div>
        </motion.div>

        {/* The Problem */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-4 text-gray-800">
            The 2,400-Year Question
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            When Aristotle coined the term "catharsis" in his <em>Poetics</em>,
            he used it only once—and never defined it clearly. For over two
            millennia, scholars have debated: What exactly is catharsis?
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            This dissertation presents a revolutionary answer: catharsis is not
            one phenomenon but <strong>three distinct dimensions</strong> of
            aesthetic experience.
          </p>
        </motion.section>

        {/* Three Types */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-gray-800">
            Three Dimensions of Catharsis
          </h3>

          <div className="space-y-6">
            {/* Ontological */}
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-ontological-500">
              <div className="flex items-start gap-4">
                <div className="bg-ontological-100 p-3 rounded-lg">
                  <Brain className="w-6 h-6 text-ontological-600" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-ontological-700 mb-2">
                    1. Ontological Catharsis
                  </h4>
                  <p className="text-gray-700 mb-3">
                    <strong>The shock of discovering truth</strong> (or
                    realizing truth is unknowable)
                  </p>
                  <p className="text-gray-600 text-sm mb-2">
                    <strong>Example:</strong> The revelation in{" "}
                    <em>The Sixth Sense</em> that the protagonist is dead, or
                    Hamlet's realization that he can never know if the ghost is
                    real.
                  </p>
                  <p className="text-gray-600 text-sm">
                    <strong>Literary Work:</strong> <em>Hamlet</em> by William
                    Shakespeare
                  </p>
                </div>
              </div>
            </div>

            {/* Axiological */}
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-axiological-500">
              <div className="flex items-start gap-4">
                <div className="bg-axiological-100 p-3 rounded-lg">
                  <Scale className="w-6 h-6 text-axiological-600" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-axiological-700 mb-2">
                    2. Axiological Catharsis
                  </h4>
                  <p className="text-gray-700 mb-3">
                    <strong>The satisfaction when justice is served</strong>
                  </p>
                  <p className="text-gray-600 text-sm mb-2">
                    <strong>Example:</strong> The moment when the villain is
                    defeated in <em>Avengers: Endgame</em>, or when an innocent
                    character is vindicated.
                  </p>
                  <p className="text-gray-600 text-sm">
                    <strong>Literary Work:</strong> <em>Tess of the d'Urbervilles</em> by Thomas Hardy
                  </p>
                </div>
              </div>
            </div>

            {/* Imaginary */}
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-imaginary-500">
              <div className="flex items-start gap-4">
                <div className="bg-imaginary-100 p-3 rounded-lg">
                  <Sparkles className="w-6 h-6 text-imaginary-600" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-imaginary-700 mb-2">
                    3. Imaginary Catharsis
                  </h4>
                  <p className="text-gray-700 mb-3">
                    <strong>
                      The ecstasy of immersion in impossible fantasies
                    </strong>
                  </p>
                  <p className="text-gray-600 text-sm mb-2">
                    <strong>Example:</strong> The thrill of experiencing
                    interstellar travel in <em>Interstellar</em>, or the epic
                    quest in <em>The Lord of the Rings</em>.
                  </p>
                  <p className="text-gray-600 text-sm">
                    <strong>Literary Work:</strong> <em>Moby-Dick</em> by
                    Herman Melville
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Key Insights */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-4 text-gray-800">
            Why This Matters
          </h3>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
            <p className="text-gray-700 leading-relaxed mb-4">
              Previous theories treated catharsis as a single phenomenon—either
              emotional purging, moral education, or intellectual clarification.
              This research demonstrates that catharsis operates on{" "}
              <strong>three fundamentally different levels</strong>:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-ontological-600 mr-2">•</span>
                <span>
                  <strong>Ontological:</strong> Concerns what is real and
                  knowable (Being)
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-axiological-600 mr-2">•</span>
                <span>
                  <strong>Axiological:</strong> Concerns what is good and just
                  (Value)
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-imaginary-600 mr-2">•</span>
                <span>
                  <strong>Imaginary:</strong> Concerns creative possibilities
                  and ideals (Fantasy)
                </span>
              </li>
            </ul>
          </div>
        </motion.section>

        {/* Hamlet Deep Dive */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-4 text-gray-800 flex items-center gap-2">
            <BookOpen className="w-6 h-6" />
            Case Study: Hamlet
          </h3>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-700 leading-relaxed mb-4">
              <em>Hamlet</em> exemplifies <strong>Ontological Catharsis</strong>. Unlike classical tragedies
              where truth is revealed (like <em>Oedipus Rex</em>), Hamlet faces
              an <strong>epistemological impossibility</strong>: he can never
              know if the ghost is real or a demonic deception.
            </p>
            <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 my-4">
              "To be, or not to be"—not just about suicide, but about the
              fundamental uncertainty of existence itself.
            </blockquote>
            <p className="text-gray-700 leading-relaxed">
              This <strong>inability to know</strong> creates a distinctly
              modern form of catharsis that resonates with contemporary
              audiences living in an age of fake news, deepfakes, and
              post-truth politics.
            </p>
          </div>
        </motion.section>

        {/* Academic Contribution */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-4 text-gray-800">
            Academic Contribution
          </h3>
          <div className="bg-gray-50 rounded-lg p-6">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 font-bold">1.</span>
                <span>
                  <strong>Reconciles 2,400 years of scholarly debate</strong>{" "}
                  by showing that competing theories each describe different
                  dimensions of the same phenomenon
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 font-bold">2.</span>
                <span>
                  <strong>Bridges ancient and modern philosophy</strong> by
                  integrating Aristotelian poetics with Heideggerian ontology
                  and Nietzschean aesthetics
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 font-bold">3.</span>
                <span>
                  <strong>Provides a comprehensive framework</strong> for
                  analyzing how audiences experience literature, film, and other
                  narrative arts
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 font-bold">4.</span>
                <span>
                  <strong>Explains why certain works endure</strong> across
                  centuries while others fade—they engage multiple dimensions of
                  catharsis simultaneously
                </span>
              </li>
            </ul>
          </div>
        </motion.section>

        {/* Conclusion */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-ontological-500 via-axiological-500 to-imaginary-500 text-white rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">
              Catharsis is not a single experience—
              <br />
              it is three fundamental dimensions of human aesthetic experience.
            </h3>
            <p className="text-lg opacity-90">
              This research offers the first comprehensive, unified theory of
              catharsis since Aristotle.
            </p>
          </div>
        </motion.section>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center text-gray-500 text-sm"
        >
          <p>© 2025 Jinyong Jo. All rights reserved.</p>
        </motion.div>
      </div>
    </div>
  );
}
