
function Button({ text, onClick, type = "button", className = "" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-600 transition ${className}`}
    >
      {text}
    </button>
  );
}

export default Button;
