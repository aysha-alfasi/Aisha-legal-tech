import { motion, AnimatePresence } from "framer-motion";
import Aisha from "../imgs/lagalImg.png";
import rights from "../imgs/knowYourRights.png";
import RQ from "../imgs/knowYourRightsQ.png";

export default function StartModal({
  openModal,
  setOpenModal,
  onServiceSelect,
}) {
  const options = [
    {
      key: "chat",
      img: Aisha,
      title: "Chat with Aisha",
      subtitle: "Describe your situation freely",
    },
    {
      key: "rights",
      img: rights,
      title: "Know Your Rights",
      subtitle: "Step-by-step guidance",
    },
    {
      key: "quiz",
      img: RQ,
      title: "Interactive Quizzes",
      subtitle: "Test your knowledge",
    },
  ];

  return (
    <AnimatePresence>
      {openModal && (
        <motion.div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={() => setOpenModal(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-[#1E2337] rounded-3xl p-8 flex flex-col sm:flex-row gap-6 sm:gap-10 w-full max-w-3xl shadow-lg justify-center"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {options.map((opt) => (
              <div
                key={opt.key}
                className="flex flex-col items-center cursor-pointer p-4 hover:scale-105 transition-transform"
                onClick={() => onServiceSelect(opt.key)}
              >
                <img
                  src={opt.img}
                  alt={opt.title}
                  className="w-20 h-20 mb-2"
                />
                <span className="text-white font-semibold text-center">
                  {opt.title}
                </span>
                <small className="text-[#9BB8FF] mt-1 text-center">
                  {opt.subtitle}
                </small>
              </div>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}