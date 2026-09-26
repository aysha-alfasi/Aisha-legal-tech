import Aisha from "../imgs/lagalImg.png";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function SignatureSection() {
  const [typedText, setTypedText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [, setIsTypingComplete] = useState(false);
  const [openPrivacy, setOpenPrivacy] = useState(false);
  const [openTerms, setOpenTerms] = useState(false);
  const sectionRef = useRef(null);

  const fullText = "Empowering You with Legal Knowledge.";
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            setIsTypingComplete(false);
          } else {
            setIsVisible(false);
            setTypedText("");
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

  const currentRef = sectionRef.current;
return () => {
  if (currentRef) {
    observer.unobserve(currentRef);
  }
};
  }, []);

  // < typing effect ♥ />
  useEffect(() => {
    if (!isVisible) return;

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
                    alt="Adalex by Aisha Legal Tech Signature"
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
              <motion.p
                className="text-[10px] sm:text-[11px] uppercase tracking-[0.35em] text-gray-600 font-light mb-5"
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.25 }}
              >
                By Aisha Legal Tech
              </motion.p>

              <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-800 mb-2 tracking-wide"
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.3 }}
              >
                Adalex
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
                      <motion.span
                        className="ml-1 text-gray-800"
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                      >
                        |
                      </motion.span>
                    </span>
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

                <motion.div
                  className="flex justify-center space-x-4 mt-6"
                  initial={{ opacity: 0, y: 10 }}
                  animate={
                    isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                  }
                  transition={{ delay: 1.4 }}
                />

                {/* < copyright ♥ /> */}
                <motion.div
                  className="mt-14 flex flex-col items-center gap-y-2 text-[11px] text-gray-400 font-light tracking-wider"
                  initial={{ opacity: 0 }}
                  animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 1.6 }}
                >
                  <span>© 2026 Adalex.</span>

                  <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 mt-5">
                    <button
                      type="button"
                      onClick={() => setOpenPrivacy(true)}
                      className="hover:text-gray-600 transition-colors cursor-pointer bg-transparent border-0 p-0"
                    >
                      Privacy
                    </button>
                    <span className="text-gray-300">·</span>
                    <button
                      type="button"
                      onClick={() => setOpenTerms(true)}
                      className="hover:text-gray-600 transition-colors cursor-pointer bg-transparent border-0 p-0"
                    >
                      Terms
                    </button>
                    <span className="text-gray-300">·</span>
                    <a
                      href="https://legal.aishense.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gray-600 transition-colors"
                    >
                      About Us
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ===== Privacy Modal ===== */}
      {openPrivacy && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setOpenPrivacy(false)}
        >
          <div
            className="bg-[#FDFBF5] rounded-2xl max-w-3xl w-full max-h-[85vh] flex flex-col relative shadow-2xl border border-gray-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="px-8 sm:px-12 pt-10 pb-6 border-b border-gray-100 flex-shrink-0">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.35em] text-gray-400 font-light mb-2">
                    Adalex
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-light text-gray-800 tracking-wide">
                    Privacy Policy
                  </h2>
                  <p className="text-xs text-gray-400 font-light mt-2 tracking-wide">
                    Last updated: Sep 2026
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setOpenPrivacy(false)}
                  className="text-gray-400 hover:text-gray-700 text-2xl leading-none cursor-pointer w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors flex-shrink-0"
                  aria-label="Close"
                >
                  ×
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="px-8 sm:px-12 py-8 overflow-y-auto text-[14px] text-gray-600 font-light leading-[1.85]">
              <Section number="1" title="In short">
                We built Adalex to help people understand their rights, not
                to collect data about them. You don't need an account, we
                don't ask for personal information, and we don't store your
                conversations.
              </Section>

              <Section number="2" title="What we don't collect">
                We don't ask for your name, email, phone number, address, or
                any ID. We don't use cookies or tracking tools. You can use
                every part of Adalex without signing up or creating an
                account.
              </Section>

              <Section number="3" title="What happens when you chat with Aisha">
                When you type a message, it's sent to our server so Aisha can
                look for matching legal topics and reply. Your message isn't
                saved in any database, and it isn't linked to who you are.
                The Rights Identifier tool and the PDF summary it generates
                run entirely in your browser — nothing leaves your device.
              </Section>

              <Section number="4" title="Server logs">
                Adalex is hosted on Vercel. Like most hosting providers,
                Vercel may briefly record basic technical information for
                security and reliability. These logs aren't used to identify
                you.
              </Section>

              <Section number="5" title="We don't sell or share your data">
                We don't sell, rent, or share your information with
                advertisers, data brokers, or any third party. Adalex
                doesn't use AI services or external APIs to read your
                messages. Our hosting provider processes technical data
                only as needed to keep the service running.
              </Section>

              <Section number="6" title="Children's privacy">
                Adalex isn't meant for children under 13. Since we don't
                collect personal information from anyone, we don't
                knowingly collect it from children either.
              </Section>

              <Section number="7" title="If this policy changes" last>
                We may update this Privacy Policy from time to time. When
                we do, we'll update the date at the top of this page. If
                you keep using Adalex after a change, that means you accept
                the updated policy.
              </Section>
            </div>
          </div>
        </div>
      )}

      {/* ===== Terms Modal ===== */}
      {openTerms && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setOpenTerms(false)}
        >
          <div
            className="bg-[#FDFBF5] rounded-2xl max-w-3xl w-full max-h-[85vh] flex flex-col relative shadow-2xl border border-gray-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="px-8 sm:px-12 pt-10 pb-6 border-b border-gray-100 flex-shrink-0">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.35em] text-gray-400 font-light mb-2">
                    Adalex
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-light text-gray-800 tracking-wide">
                    Terms of Service
                  </h2>
                  <p className="text-xs text-gray-400 font-light mt-2 tracking-wide">
                    Last updated: Sep 2026
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setOpenTerms(false)}
                  className="text-gray-400 hover:text-gray-700 text-2xl leading-none cursor-pointer w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors flex-shrink-0"
                  aria-label="Close"
                >
                  ×
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="px-8 sm:px-12 py-8 overflow-y-auto text-[14px] text-gray-600 font-light leading-[1.85]">
              <Section number="1" title="Using Adalex means you agree to these terms">
                By using Adalex, you accept these Terms of Service. If you
                don't agree with any part of them, please don't use the
                platform.
              </Section>

              <Section number="2" title="What Adalex is">
                Adalex is an educational platform that explains general
                legal principles in plain language. It's designed to help
                you understand your rights, not to advise you on a specific
                situation. When you describe something, Aisha matches it
                against a fixed set of legal topics and shares what it
                finds.
              </Section>

              <Section number="3" title="Adalex is not your lawyer">
                Talking to Adalex doesn't create an attorney-client
                relationship. Nothing here is legal advice for your
                specific situation, and no conversation on this platform
                is protected by attorney-client privilege. For anything
                that affects your rights or obligations, please consult a
                licensed attorney in your jurisdiction.
              </Section>

              <Section number="4" title="For learning, not for deciding">
                Everything on Adalex, including the Legal Rights Summary
                generated by the Rights Identifier tool, is provided for
                general education. Laws differ between countries and change
                over time, so Adalex can't guarantee that everything is
                complete, up to date, or applicable to your situation. It's
                not a substitute for professional legal advice.
              </Section>

              <Section number="5" title="Your responsibility">
                You agree to use Adalex lawfully and respectfully. Please
                don't submit content that is false, misleading, harmful,
                or that violates other people's rights. Any decisions you
                make based on what you read here are your own.
              </Section>

              <Section number="6" title="What belongs to us">
                All content, design, and code on Adalex belong to Aisha Legal Tech. Some visual elements were created with the help of AI tools and are used under their respective terms. Please don't reproduce, distribute, or create derivative works without our written permission.
              </Section>

              <Section number="7" title="Limitation of liability">
                Adalex is provided "as is" and "as available", without
                warranties of any kind. To the fullest extent permitted by
                law, Aisha Legal Tech is not liable for any damages
                resulting from using, or being unable to use, the platform.
              </Section>

              <Section number="8" title="Changes to the service" last>
                We may modify, pause, or discontinue any part of Adalex at
                any time. We may also update these Terms. If you keep using
                the platform after changes are posted, that means you
                accept the updated Terms.
              </Section>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ===== Section Component for Legal Text ===== */
function Section({ number, title, children, last = false }) {
  return (
    <div className={last ? "" : "mb-7"}>
      <h3 className="text-gray-800 font-normal text-[15px] tracking-wide mb-2 flex items-baseline gap-3">
        <span className="text-[11px] text-gray-400 font-light tracking-[0.2em]">
          {String(number).padStart(2, "0")}
        </span>
        <span>{title}</span>
      </h3>
      <p className="pl-8">{children}</p>
    </div>
  );
}