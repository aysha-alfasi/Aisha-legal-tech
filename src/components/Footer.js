import Aisha from "../imgs/lagalImg.png";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function SignatureSection() {
  const [typedText, setTypedText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const sectionRef = useRef(null);

  const fullText = "Empowering You with Legal Knowledge.";
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            setIsTypingComplete(false); // reset typing complete status ♥ >
          } else {
            setIsVisible(false);
            setTypedText(""); // reset text only ♥ >
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // < typing effect ♥ />
  useEffect(() => {
    if (!isVisible) return;

    // < reset before applying typing effect ♥ />
    setTypedText("");
    setIsTypingComplete(false);

    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.substring(0, index + 1));
        index++;
      } else {
        setIsTypingComplete(true);
        clearInterval(interval);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [isVisible, fullText]);

  return (
    <div
      ref={sectionRef}
      className="min-h-screen flex items-start justify-center bg-[#1E2337] px-4 pt-20 pb-12"
    >
      <div className="flex flex-col items-center justify-center max-w-4xl mx-auto">
        <div className="relative">
          <motion.div
            className="absolute -inset-4 rounded-3xl opacity-0 blur-xl"
            animate={
              isVisible
                ? {
                    background:
                      "linear-gradient(to top right, #4C637D, #6B7C8B)",
                    opacity: 0.5,
                  }
                : {
                    opacity: 0,
                  }
            }
            whileHover={{
              opacity: 0.8,
              scale: 1.02,
              boxShadow: "0 0 70px rgba(100, 180, 255, 0.9)",
            }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
            }}
          />

          <motion.div
            className="relative bg-[#FDFBF5] rounded-2xl shadow-soft p-8 sm:p-12 md:p-16 border border-gray-100 w-full max-w-3xl z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            whileHover={{
              y: -6,
              scale: 1.02,
              boxShadow: `
                0 0 50px rgba(76, 99, 125, 0.7),
                0 0 100px rgba(100, 180, 255, 0.3),
                inset 0 0 30px rgba(255, 255, 255, 0.2)
              `,
              borderColor: "rgba(155, 184, 255, 0.4)",
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
              boxShadow: { duration: 0.5 },
            }}
            whileTap={{
              scale: 0.99,
              y: -3,
              boxShadow: "0 0 40px rgba(76, 99, 125, 0.5)",
            }}
          >
            <div className="flex justify-center mb-8 sm:mb-12">
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={
                  isVisible
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.9 }
                }
                transition={{ duration: 0.7, ease: "backOut", delay: 0.1 }}
              >
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48">
                  <motion.img
                    ref={imgRef}
                    src={Aisha}
                    alt="Aisha Legal Tech Signature"
                    className="absolute inset-0 w-full h-full rounded-full object-contain bg-white border-4 border-white shadow-md"
                    style={{
                      imageRendering: "auto",
                      transform: "translateZ(0)",
                      willChange: "transform",
                    }}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={
                      isVisible
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.95 }
                    }
                    transition={{ delay: 0.2, duration: 0.6 }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 25px rgba(100, 180, 255, 0.4)",
                    }}
                    loading="eager"
                    decoding="async"
                  />

                  <motion.div
                    className="absolute -inset-2 rounded-full opacity-0"
                    whileHover={{
                      opacity: 1,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            </div>

            <div className="text-center">
              <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-800 mb-2 tracking-wide"
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.3 }}
              >
                Aisha Legal Tech
              </motion.h2>

              <motion.div
                className="w-16 h-0.5 mx-auto mb-6 rounded-full relative overflow-hidden"
                initial={{ width: 0 }}
                animate={isVisible ? { width: "4rem" } : { width: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300"
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              <div className="min-h-[60px] flex items-center justify-center">
                <motion.div
                  className="font-signature text-gray-700 leading-relaxed max-w-2xl mx-auto"
                  initial={{ opacity: 0 }}
                  animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="flex items-center justify-center gap-0">
                    <span className="text-lg sm:text-xl md:text-2xl text-gray-800">
                      {typedText}
                    </span>

                    {isVisible && (
                      <motion.span
                        className="text-gray-800 font-bold inline-block h-6 ml-1"
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                        style={{
                          visibility:
                            typedText.length === 0 ? "hidden" : "visible",
                        }}
                      >
                        |
                      </motion.span>
                    )}
                  </div>
                </motion.div>
              </div>

              <motion.div
                className="mt-8 sm:mt-12 pt-6 border-t border-gray-100"
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 1.2 }}
              >
                <p className="text-sm text-gray-500 font-light tracking-wider mb-4">
                  Clarifying the complex.
                </p>

                {/* < connect icons ♥ /> */}
                <motion.div
                  className="flex justify-center space-x-4 mt-6"
                  initial={{ opacity: 0, y: 10 }}
                  animate={
                    isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                  }
                  transition={{ delay: 1.4 }}
                >
                  {/*     <motion.div 
                    className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center cursor-pointer border border-gray-200"
                    whileHover={{ 
                      scale: 1.3, 
                    }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <span className="text-xs text-gray-600">✉</span>
                  </motion.div> */}
                  {/*   <motion.div 
                    className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center cursor-pointer border border-gray-200"
                    whileHover={{ 
                      scale: 1.3, 
                    }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <span className="text-xs text-gray-600">🔗</span>
                  </motion.div> */}
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* < copyright ♥ /> */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.6 }}
        >
          <p className="text-xs text-gray-400 font-light tracking-wider pt-10">
            © 2025 Aisha Legal tech. All rights reserved.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
