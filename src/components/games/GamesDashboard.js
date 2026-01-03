import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gamesList } from "../../data/games/gamesList.js";
import GameEngine from "./GameEngine";

export default function GamesDashboard() {
  const [activeGame, setActiveGame] = useState(null);
  const [showBack, setShowBack] = useState(false);

  const gameSectionRef = useRef(null);

  useEffect(() => {
    const homeSection = document.getElementById("home");
    if (!homeSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowBack(!entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    observer.observe(homeSection);
    return () => observer.disconnect();
  }, []);

  if (activeGame) {
    return (
      <GameEngine
        game={activeGame}
        onFinish={() => setActiveGame(null)}
        scrollTargetRef={gameSectionRef}
      />
    );
  }

  return (
    <div className="bg-[#1E2337]" id="game-section" ref={gameSectionRef}>
      {/* < Section Wrapper ♥ /> */}
      <div className="min-h-screen flex flex-col items-center justify-center">
        {/* < Section Title ♥ /> */}
        <div className="text-center max-w-3xl px-6 mb-24 -translate-y-8">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-[#FAF3EA] mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.6 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Learn Your Rights Through Play
          </motion.h2>

          <motion.p
            className="text-slate-300 text-base md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.6 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Interactive games designed to help you understand your rights in a
            simple, engaging, and memorable way.
          </motion.p>
        </div>

        {/* < Games Grid ♥ /> */}
        <div className="-translate-y-8 w-full flex justify-center">
          <motion.div
            className="max-w-6xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.35 }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.15 },
              },
            }}
          >
            {gamesList.map((item) => (
              <motion.div
                key={item.key}
                className="bg-[#2f3754] p-6 rounded-2xl shadow-lg cursor-pointer"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.7,
                      ease: [0.25, 0.8, 0.25, 1],
                    },
                  },
                }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                onClick={() => setActiveGame(item.game)}
              >
                <motion.img
                  src={item.icon || "/imgs/game-placeholder.png"}
                  alt={item.title}
                  className="w-30 h-20 mb-4 mx-auto"
                  whileHover={{ scale: 1.05, rotate: 4 }}
                  transition={{ duration: 0.3 }}
                />

                <h3 className="text-xl font-bold text-center mb-2 text-slate-50">
                  {item.title}
                </h3>

                <p className="text-center text-sm opacity-70 text-slate-50">
                  {item.description}
                </p>

                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                  className="
                    mt-4 w-full py-2
                    bg-[#FAF3EA]
                    text-[#1E2337]
                    rounded-lg
                    font-semibold
                  "
                >
                  Play
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* < Go Up Button ♥ /> */}
        {showBack && (
          <motion.div
            className="mt-12 mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <button
              onClick={() => {
                document
                  .getElementById("home")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="
                flex items-center gap-2
                px-6 py-2
                bg-[#3b456b]/80
                text-[#FAF3EA]
                rounded-full
                shadow-md
                backdrop-blur
                hover:bg-[#FAF3EA]
                hover:text-[#1E2337]
                hover:shadow-[0_0_18px_rgba(250,243,234,0.35)]
                transition-all duration-300
              "
            >
              <span className="text-lg">↑</span>
              <span className="text-sm font-medium">Back to Home</span>
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
