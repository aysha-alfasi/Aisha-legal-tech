import Aisha from "../imgs/lagalImg.png";
import Button from "./UI/Button";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div
      className="min-h-screen flex flex-col justify-between"
      style={{ backgroundColor: "#404137" }}
    >
      <div className="flex flex-col items-center mt-24 sm:mt-28 md:mt-32 px-1">
        <motion.h1
          className="text-white font-bold text-[48px] sm:text-[56px] md:text-[64px] lg:text-[64px] text-center mb-8 font-heading"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Aisha, tell me my rights!
        </motion.h1>

        <motion.p
          className="text-white text-center text-[18px] sm:text-[20px] md:text-[23px] max-w-3xl sm:max-w-full font-paragraph font-light px-4 sm:px-0 mb-10
"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Know your rights fast with Aisha! Find out what you are entitled to as
          a tenant, employee, or consumer.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center gap-12 sm:gap-8 md:gap-12 lg:mt-20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Button
            text="Start Now"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 8px 15px rgba(0,0,0,0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "tween", duration: 0.15, ease: "easeOut" }}
          />
          <motion.img
            src={Aisha}
            alt="Avatar"
            className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 mb-6 sm:mb-10"
            whileHover={{ scale: 1.05, rotate: 5 }}
            whileTap={{ scale: 0.95, rotate: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </motion.div>
      </div>

      <motion.p
        className="text-white text-[16px] sm:text-[18px] md:text-[20px] text-center mb-20 font-signature px-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        Aisha is a friendly chatbot, here to educate you about your basic
        rights. Tap Start!
      </motion.p>
    </div>
  );
}
