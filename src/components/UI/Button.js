import { motion } from "framer-motion";

function Button({
  text,
  onClick,
  type = "button",
  className = "",
  whileHover,
  whileTap,
  transition,
}) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={`
        rounded-lg 
        transition 
        bg-[#4C637D] 
        text-[#FAF3EA] 
        font-bold 
        text-[36px] 
        py-4 
        px-8 
        hover:brightness-110
        ${className}
      `}
      whileHover={whileHover}
      whileTap={whileTap}
      transition={transition}
    >
      {text}
    </motion.button>
  );
}

export default Button;
