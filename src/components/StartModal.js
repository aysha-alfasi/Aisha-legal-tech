import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Aisha from "../imgs/lagalImg.png";
import rights from "../imgs/knowYourRights.png";
import RQ from "../imgs/knowYourRightsQ.png";
import ChatBot from "./ChatBot";
import RightsIdentifierModal from "./RightsIdentifierModal.js";

export default function StartModal({  openModal,
  setOpenModal}) {

     const [openChat, setOpenChat] = useState(false);
  const [openRights, setOpenRights] = useState(false);

  return (
    <div>
           {/* < Modal for options ♥ /> */}
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

              {/* < Chat Option ♥ /> */}
              <div
                className="flex flex-col items-center cursor-pointer p-4 hover:scale-105 transition-transform"
                onClick={() => {
                  setOpenChat(true);
                  setOpenModal(false);
                }}
              >
                <img src={Aisha} alt="Chat" className="w-20 h-20 mb-2" />
                <span className="text-white font-semibold text-center">
                  Chat with Aisha
                </span>
                <small className="text-[#9BB8FF] mt-1 text-center">
                  Describe your situation freely
                </small>
              </div>

 {/* < Rights Option ♥ */}
              <div
                className="flex flex-col items-center cursor-pointer p-4 hover:scale-105 transition-transform"
               onClick={() => {
  setOpenRights(true);
  setOpenModal(false);
}}

              >
                <img
                  src={rights}
                  alt="Rights"
                  className="w-20 h-20 mb-2"
                />
                <span className="text-white font-semibold text-center">
                  Know Your Rights
                </span>
                <small className="text-[#9BB8FF] mt-1 text-center">
                  Step-by-step guidance
                </small>
              </div>

              {/* < Games Option  ♥ /> */}
              <div
                className="flex flex-col items-center cursor-pointer p-4 hover:scale-105 transition-transform"
                onClick={() => {
                  document
                    .getElementById("game-section")
                    ?.scrollIntoView({ behavior: "smooth" });
                  setOpenModal(false);
                }}
              >
                <img
                  src={RQ}
                  alt="Games"
                  className="w-19 h-20 mb-2"
                />
                <span className="text-white font-semibold text-center">
                  Interactive Quizzes
                </span>
                <small className="text-[#9BB8FF] mt-1 text-center">
                  Test your knowledge
                </small>
              </div>

             
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
           {/* < ChatBot ♥ /> */}
      {openChat && (
  <ChatBot
    onClose={() => {
      setOpenChat(false);
      setOpenModal(true);
    }}
  />
)}

{/* < Rights Identifier Modal ♥ /> */}
<AnimatePresence>
  {openRights && (
    <RightsIdentifierModal
      onClose={() => {
        setOpenRights(false);
        setOpenModal(true);
      }}
    />
  )}
</AnimatePresence>

    </div>
  )
}
