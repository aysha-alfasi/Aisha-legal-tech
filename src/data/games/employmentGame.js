import legalRights from "../legalRights.js";

const employmentRights = legalRights.find(
  r => r.key === "employee"
);

if (!employmentRights) {
  throw new Error("Employment rights data not found");
}

export const employmentGame = {
  key: "employment",
  title: "Employment Rights",
  description: "Learn your basic work rights through real-life situations.",

  scenarios: [
    {
      id: "salary-delay",
      question:
        "Your employer has not paid your salary for two months. What should you do first?",

      options: [
        "Ignore the problem and wait",
        "Quit your job immediately",
        "Check your contract and collect proof",
      ],

      correctIndex: 2,

      explanation:
        "Employees have the right to receive their salary on time. " +
        employmentRights.principle,

      firstStep: employmentRights.firstStep,
    },

    {
      id: "unsafe-workplace",
      question:
        "Your workplace is unsafe and may cause injury. What is the best first step?",

      options: [
        "Continue working without saying anything",
        "Report the issue and document the danger",
        "Post about it on social media",
      ],

      correctIndex: 1,

      explanation:
        "Employees have the right to a safe working environment. " +
        employmentRights.principle,

      firstStep: employmentRights.firstStep,
    },

    {
      id: "unfair-termination",
      question:
        "You were fired without explanation or warning. What should you do first?",

      options: [
        "Accept it without asking",
        "Review your contract and termination notice",
        "Confront your employer aggressively",
      ],

      correctIndex: 1,

      explanation:
        "Termination should follow legal rules and fair procedures. " +
        employmentRights.principle,

      firstStep: employmentRights.firstStep,
    },

    {
      id: "extra-hours",
      question:
        "Your employer asks you to work extra hours without pay. What is the best response?",

      options: [
        "Work for free to avoid problems",
        "Ask for written clarification about overtime",
        "Refuse without explanation",
      ],

      correctIndex: 1,

      explanation:
        "Employees are usually entitled to payment for extra work. " +
        employmentRights.principle,

      firstStep: employmentRights.firstStep,
    },

    {
      id: "discrimination",
      question:
        "You feel treated unfairly at work because of your background. What should you do?",

      options: [
        "Stay silent and do nothing",
        "Document incidents and seek guidance",
        "Immediately quit your job",
      ],

      correctIndex: 1,

      explanation:
        "Discrimination at work is not acceptable. " +
        employmentRights.principle,

      firstStep: employmentRights.firstStep,
    },
  ],
};

export default employmentGame;