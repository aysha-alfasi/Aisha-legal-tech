import { useState, useEffect } from "react";
import Aisha from "../imgs/lagalImg.png";
import Button from "./UI/Button";
import ChatBot from "./ChatBot";
import { motion } from "framer-motion";

export default function HeroSection() {
  const [openChat, setOpenChat] = useState(false);
  const [typedText, setTypedText] = useState("");

  const fullText =
    "Aisha is a friendly chatbot, here to educate you about your basic rights. Tap Start!";

  // typing effect <♥
  useEffect(() => {
    let index = 0;
    let interval;

    const typeNextChar = () => {
      // make sure the letter exists before adding it <♥
      if (index < fullText.length) {
        setTypedText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(interval); // stop when done <♥
      }
    };

    interval = setInterval(typeNextChar, 45);

    return () => clearInterval(interval); // cleanup on unmount <♥
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col justify-start relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0B0C10 0%, #1E2337 50%, #0C0F1E 100%)",
      }}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 animate-grid" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 30% 40%, rgba(255,223,128,0.12) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(100,180,255,0.15) 0%, transparent 70%)
            `,
            mixBlendMode: "overlay",
          }}
        />
      </div>

      <div className="flex flex-col items-center mt-32 gap-y-10 px-1 relative z-10">
        <motion.h1
          className="text-white font-bold text-[48px] sm:text-[56px] md:text-[64px] text-center mb-8 font-heading tracking-wide"
          initial={{ opacity: 0, y: -30, scale: 0.9 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: [1.02, 0.98, 1],
            textShadow: "0 0 20px rgba(100,180,255,0.4)",
          }}
          transition={{
            duration: 1.8,
            ease: "easeInOut",
          }}
        >
          Aisha, tell me my rights!
        </motion.h1>

        <motion.p
          className="text-white text-center text-[18px] sm:text-[20px] md:text-[23px] max-w-3xl font-light font-paragraph px-4 sm:px-0 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
        >
          Know your rights fast with Aisha! Find out what you are entitled to as
          a tenant, employee, or consumer.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center gap-12 sm:gap-8 md:gap-40 md:mt-6 lg:mt-6 xl:mt-8"
          initial={{ opacity: 0, scale: 0.8, rotateX: 15 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.25, 0.8, 0.25, 1] }}
        >
          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              borderRadius: "1rem",
              transformOrigin: "center",
              filter: "drop-shadow(0 0 20px rgba(150,180,255,0.3))",
              transition: "transform 0.25s ease-out",
            }}
          >
            <Button text="Start Now" onClick={() => setOpenChat(true)} />
          </motion.div>

          <motion.img
            src={Aisha}
            alt="Avatar"
            className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 mb-6 sm:mb-10"
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0,
              filter: "drop-shadow(0 0 20px rgba(150,180,255,0.4))",
            }}
            whileHover={{ scale: 1.05, rotate: 5 }}
            whileTap={{ scale: 0.95, rotate: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </motion.div>
      </div>

      <motion.div
        className="px-4 sm:px-6 md:px-8 text-center mb-10 sm:mb-12 md:mb-14 max-w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <span className="whitespace-pre-wrap font-signature text-white text-[16px] sm:text-[18px] md:text-[20px] inline-block">
          {typedText}
          <motion.span
            className="ml-1 text-[#9BB8FF]"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          >
            |
          </motion.span>
        </span>
      </motion.div>

      {openChat && <ChatBot onClose={() => setOpenChat(false)} />}

      {/* < background grid animation ♥ /> */}
      <style>{`
        @keyframes moveGrid {
          from { background-position: 0 0, 0 0; }
          to { background-position: 200px 200px, -200px -200px; }
        }

        .animate-grid {
          background-image: 
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(0deg, rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size: 60px 60px;
          animation: moveGrid 10s linear infinite;
          filter: blur(0.5px);
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
