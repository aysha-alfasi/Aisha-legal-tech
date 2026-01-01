import { motion } from "framer-motion";
import RightsIdentifier from "./RightsIdentifier";

export default function RightsIdentifierModal({ onClose }) {
  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#1E2337] rounded-3xl w-full max-w-4xl max-h-[85vh] overflow-hidden px-6 pt-4 pb-6"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-white text-xl font-semibold">
            Identify Your Rights
          </h2>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white text-xl"
          >
            ✕
          </button>
        </div>

        <RightsIdentifier />
      </motion.div>
    </div>
  );
}
