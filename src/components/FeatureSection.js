import React from "react";
import { motion } from "framer-motion";
import Aisha from "../imgs/lagalImg.png";
import rights from "../imgs/knowYourRights.png";
import RQ from "../imgs/knowYourRightsQ.png";

/*  < Variants  ♥ /> */

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.97,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function FeatureSection({ onStart }) {
  return (
    <div className="flex items-center justify-center bg-[#1E2337]">
      <section className="py-32 w-full">
        <div className="max-w-6xl mx-auto px-6 text-center">
          {/*   < Title ♥ />   */}
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-teal-50 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.6 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Our Services
          </motion.h2>

          <motion.p
            className="text-teal-50/70 max-w-2xl mx-auto mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.6 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Smart and simple tools to help you understand, interact, and make
            decisions with confidence.
          </motion.p>

          {/*  <  Cards ♥ />   */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.4 }}
          >
            {[
              {
                img: Aisha,
                title: "Chat with Aisha",
                desc: "Describe your situation freely and get clear legal insights.",
              },
              {
                img: rights,
                title: "Know Your Rights",
                desc: "Step-by-step guide to Identify your legal rights.",
              },
              {
                img: RQ,
                title: "Interactive Quizzes",
                desc: "Test your knowledge through engaging and simple quizzes.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                transition={{
                  duration: 0.35,
                  ease: "easeOut",
                }}
                className="
                  group flex flex-col items-center text-center
                  bg-white/5 rounded-2xl p-8
                  border border-white/10
                  hover:border-teal-300/30
                  transition-colors
                "
              >
                {/*  < Icon ♥ /> */}
                <motion.img
                  src={item.img}
                  alt=""
                  className="w-32 h-32 sm:w-36 sm:h-36 mb-6"
                  whileHover={{ scale: 1.06, rotate: 3 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  style={{
                    filter: "drop-shadow(0 0 18px rgba(150,180,255,0.25))",
                  }}
                />

                <h3 className="text-xl font-semibold text-teal-50 mb-2">
                  {item.title}
                </h3>
                <p className="text-teal-50/70 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* < CTA ♥ />  */}
          <motion.div
            className="mt-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.6 }}
            transition={{ duration: 0.8 }}
          >
            <motion.button
              onClick={onStart}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="
                px-10 py-3
                bg-[#FAF3EA] text-[#1E2337]
                rounded-full
                text-base font-medium
                shadow-lg
                hover:shadow-xl
              "
            >
              Try It Now
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
