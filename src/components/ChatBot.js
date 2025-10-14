import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Aisha from "../imgs/lagalImg.png";

export default function SpaceChatBot({ onClose }) {
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "👋 Hello! I’m Aisha, your legal assistant. What would you like to know about your rights today?",
    },
  ]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  

  const handleSend = useCallback(async () => {
  const trimmed = input.trim();
  if (!trimmed) return;

  setMessages((prev) => [...prev, { type: "user", text: trimmed }]);
  setInput("");

  // show a temporary "Thinking..." message while waiting for the response ♥/>
  setMessages((prev) => [
    ...prev,
    { type: "bot", text: "Thinking..." },
  ]);

  try {
    const res = await fetch("/api/aishaChatBot", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: trimmed }),
    });
    const data = await res.json();

    // replace the "Thinking..." message with the actual reply ♥/>
    setMessages((prev) => [
      ...prev.slice(0, -1),
      { type: "bot", text: data.reply },
    ]);
  } catch (err) {
    setMessages((prev) => [
      ...prev.slice(0, -1),
      { type: "bot", text: "⚠️ There was an error. Please try again." },
    ]);
  }
}, [input]);


  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="fixed inset-0 bg-black/70 flex flex-col items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative w-full max-w-md h-[50vh] flex flex-col overflow-hidden rounded-3xl backdrop-blur-2xl border border-white/10 shadow-[0_0_40px_rgba(100,180,255,0.2),0_0_80px_rgba(76,99,125,0.25)] bg-[rgba(30,33,58,0.75)]"
      >
        {/* <Header ♥ /> */}
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <h2 className="text-[#FAF3EA] font-semibold text-lg tracking-wide">
            Aisha Assistant ✨
          </h2>
          <button
            onClick={onClose}
            className="text-[#FAF3EA]/70 hover:text-[#FAF3EA] text-xl font-bold"
          >
            ✕
          </button>
        </div>

        {/* < Chat Area ♥ /> */}
        <div className="flex-1 px-4 py-2 overflow-y-auto custom-scroll flex flex-col gap-3 mt-2">
          <AnimatePresence initial={false}>
            {messages.map(({ type, text }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className={`flex ${
                  type === "bot" ? "justify-start" : "justify-end"
                }`}
              >
                {type === "bot" && (
                  <img
                    src={Aisha}
                    alt="Aisha"
                    className="w-9 h-9 rounded-full mr-2 border border-white/10"
                  />
                )}
                <div
                  className={`px-4 py-2 rounded-2xl text-sm leading-relaxed max-w-[75%] ${
                    type === "bot"
                      ? "bg-[#4C637D]/60 text-[#FAF3EA] shadow-[0_0_8px_rgba(76,99,125,0.6)]"
                      : "bg-[#FAF3EA] text-[#4C637D] shadow-[0_0_10px_rgba(250,243,234,0.4)]"
                  }`}
                >
                  {text}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          <div ref={chatEndRef} />
        </div>

        {/* <Input Area ♥ /> */}
        <div className="flex items-center border-t border-white/10 p-3 bg-[rgba(255,255,255,0.04)]">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type your message..."
            className="flex-1 bg-transparent text-[#FAF3EA] placeholder-[#FAF3EA]/50 px-3 py-2 outline-none"
          />
          <button
            onClick={handleSend}
            className="ml-3 bg-[#FAF3EA] text-[#4C637D] px-5 py-2 rounded-2xl font-semibold hover:scale-105 hover:shadow-[0_0_15px_rgba(250,243,234,0.5)] transition-all duration-200"
          >
            Send
          </button>
        </div>
      </motion.div>

      {/* <Home Button ♥ /> */}
      <button
        onClick={onClose}
        className="mt-5 w-28 h-28 rounded-full text-[#FAF3EA] bg-gradient-to-tr from-[#4C637D] to-[#6B7C8B] shadow-[0_0_50px_rgba(76,99,125,0.7),0_0_100px_rgba(100,180,255,0.3)] text-xl font-bold tracking-wider hover:scale-110 hover:shadow-[0_0_70px_rgba(100,180,255,0.9)] transition-all duration-300"
      >
        Finish Session
      </button>

      {/* <Scrollbar styling ♥ /> */}
      <style>{`
        .custom-scroll::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scroll::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #4C637D, #FAF3EA);
          border-radius: 20px;
          box-shadow: 0 0 10px rgba(100,180,255,0.5);
        }
        .custom-scroll::-webkit-scrollbar-track {
          background: rgba(255,255,255,0.05);
        }
      `}</style>
    </div>
  );
}
