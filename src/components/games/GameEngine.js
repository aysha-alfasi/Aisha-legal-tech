import { useState } from "react";

export default function GameEngine({ game, onFinish }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);

  const totalQuestions = game.scenarios.length;

  // < END SCREEN ♥ />
  if (currentIndex >= totalQuestions) {
    const percentage = Math.round((score / totalQuestions) * 100);

    let message = "You've taken a great step toward understanding your rights.";

    if (percentage >= 80)
      message = "You have a strong understanding of your rights.";
    else if (percentage >= 50)
      message = "You understand the basics, with room to learn more.";

    return (
      <div className="min-h-screen flex items-center justify-center  bg-gray-900">
        <div className="max-w-3xl mx-auto p-8 text-white">
          <div className="bg-[#1E2337] p-8 rounded-2xl shadow text-center">
            {/* < Back to games button ♥ */}
            <button
              onClick={onFinish}
              className="mb-6 text-sm underline opacity-80 hover:opacity-100 transition text-left block w-full"
            >
              ← Back to games
            </button>

            <h2 className="text-2xl font-bold mb-4">{message}</h2>

            <p className="text-sm opacity-80 mb-6">
              You answered <strong>{score}</strong> out of{" "}
              <strong>{totalQuestions}</strong> questions correctly.
            </p>

            <div className="mt-6 p-4 rounded-xl bg-black/30 border border-white/10 text-left">
              <p className="text-sm font-semibold mb-1 flex items-center gap-2">
                🛡️ Core principle you learned
              </p>
              <p className="text-sm opacity-90 leading-relaxed">
                {game.principle}
              </p>
            </div>

            <div className="flex flex-col gap-4 mt-6">
              {/* < Try again button ♥ /> */}
              {score < totalQuestions && (
                <button
                  onClick={() => {
                    setCurrentIndex(0);
                    setSelectedIndex(null);
                    setShowExplanation(false);
                    setScore(0);
                  }}
                  className="px-6 py-3 rounded-xl bg-[#FAF3EA] text-[#1E2337] font-semibold"
                >
                  Try again
                </button>
              )}

              {/* < Back to games board button ♥ />*/}
              <button
                onClick={onFinish}
                className="px-6 py-3 rounded-xl border border-[#FAF3EA] text-[#FAF3EA] font-semibold hover:bg-[#FAF3EA] hover:text-[#1E2337] transition"
              >
                ← Back to games board
              </button>

              {/* < Identify your rights button ♥ /> */}
              <button
                onClick={() => {
                  document
                    .getElementById("rights-section")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-sm underline opacity-80"
              >
                Identify your rights step by step
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = game.scenarios[currentIndex];
  const isCorrect = selectedIndex === currentQuestion.correctIndex;

  function handleSelect(index) {
    if (showExplanation) return;

    setSelectedIndex(index);
    setShowExplanation(true);

    if (index === currentQuestion.correctIndex) {
      setScore((prev) => prev + 1);
    }
  }

  function nextQuestion() {
    setSelectedIndex(null);
    setShowExplanation(false);
    setCurrentIndex((prev) => prev + 1);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="max-w-3xl mx-auto p-6 text-white">
        {/* < Back to games button ♥ */}
        <button
          onClick={onFinish}
          className="mb-6 text-sm underline opacity-80 hover:opacity-100 transition flex items-center gap-1"
        >
          ← Back to games
        </button>

        {/* < Title ♥ />*/}
        <h2 className="text-2xl font-bold mb-1 text-center">{game.title}</h2>
        <p className="text-center text-sm opacity-80 mb-6">
          {game.description}
        </p>

        {/* < Question box ♥ /> */}
        <div className="bg-[#1E2337] p-6 rounded-xl shadow">
          {/* < Progress ♥ /> */}
          <div className="mb-6">
            <div className="flex justify-between text-xs opacity-70 mb-1">
              <span>
                Question {currentIndex + 1} of {totalQuestions}
              </span>
              <span>
                Score: {score}/{totalQuestions}
              </span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-1.5">
              <div
                className="bg-[#FAF3EA] h-1.5 rounded-full transition-all"
                style={{
                  width: `${((currentIndex + 1) / totalQuestions) * 100}%`,
                }}
              />
            </div>
          </div>

          {/* < Question ♥ /> */}
          <h3 className="text-lg font-semibold mb-6">
            {currentQuestion.question}
          </h3>

          {/* < Options ♥ /> */}
          <div className="flex flex-col gap-4">
            {currentQuestion.options.map((option, index) => {
              let optionStyle = "bg-[#FAF3EA] text-[#1E2337]";

              if (showExplanation) {
                if (index === selectedIndex) {
                  optionStyle = isCorrect
                    ? "bg-green-500 text-white"
                    : "bg-red-500 text-white";
                } else {
                  optionStyle = "bg-[#FAF3EA]/60 text-[#1E2337]";
                }
              }

              return (
                <button
                  key={index}
                  onClick={() => handleSelect(index)}
                  disabled={showExplanation}
                  className={`w-full text-left px-4 py-3 rounded-lg transition ${optionStyle}`}
                >
                  {option}
                </button>
              );
            })}
          </div>

          {/* < Explanation ♥ /> */}
          {showExplanation && (
            <>
              <div className="mt-6 p-4 rounded-lg bg-black/30">
                <p className="font-semibold mb-2">
                  {isCorrect ? "✅ Correct" : "❌ Not quite right"}
                </p>
                <p className="text-sm opacity-90">
                  {currentQuestion.explanation}
                </p>
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={nextQuestion}
                  className="flex-1 px-4 py-3 rounded-lg bg-[#FAF3EA] text-[#1E2337] font-semibold hover:opacity-90 transition"
                >
                  {currentIndex === totalQuestions - 1
                    ? "Finish Game →"
                    : "Next Question →"}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
