import legalRights from "../src/data/legalRights.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { message } = req.body;
  const lower = message.toLowerCase().trim();

  // < essential keyword lists for simple matching ♥ />
  const greetings = [
    "hello",
    "hi",
    "hey",
    "good morning",
    "good afternoon",
    "good evening",
  ];
  const thanks = ["thank you", "thanks", "excellent", "appreciate"];
  const farewells = ["goodbye", "bye", "see you", "farewell"];

  // < introductory phrases for each category ♥ />
  const intros = {
    employee:
      "From what you described, this appears to relate to a work or employment situation.",

    tenant:
      "Housing situations like this can be stressful, and many people experience similar concerns.",

    consumer:
      "Situations involving purchases or products are quite common, and consumer rights often help clarify what applies.",

    family:
      "Family-related situations can be sensitive, so I’ll outline the general legal principles involved.",

    student:
      "This appears to be related to an education or student-related situation.",

    healthcare:
      "Health-related situations are important, and it’s good that you’re learning about your rights.",

    privacy:
      "Digital privacy concerns are increasingly common, especially with online services and platforms.",

    discrimination:
      "Concerns about fair treatment are important, and many legal systems address these issues.",

    criminal:
      "Situations involving criminal matters can feel serious. I’ll share general legal information only.",

    default:
      "Thanks for sharing your situation. I’ll explain the general legal principles that may apply.",
  };

  // < intelligent search logic ♥ />
  const findMatches = (userMessage) => {
    return legalRights
      .map((category) => {
        let score = 0;
        category.keywords.forEach((k) => {
          if (userMessage.includes(k)) score++;
        });
        return { ...category, score };
      })
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score);
  };

  let reply;

  // < welcome message ♥ />
  if (greetings.some((g) => lower === g || lower.startsWith(`${g} `))) {
    reply = {
      intro: "Hello! I'm Aisha 👋",
      principle:
        "I’m here to help you understand general legal principles in a simple and friendly way.",
      firstStep:
        "You can describe your situation in your own words. I’ll help identify general legal principles that may apply.",
      note: "This is general legal information, not legal advice.",
    };
  }

  // < appreciation response ♥ />
  else if (thanks.some((t) => lower.includes(t))) {
    reply = {
      intro: "You’re very welcome 😊",
      principle:
        "Learning about your rights is an important step toward making confident decisions.",
      firstStep:
        "Feel free to explore other topics or try the interactive tools anytime.",
      note: "This is general legal information, not legal advice.",
    };
  }

  // < ending message ♥ />
  else if (farewells.some((f) => lower.includes(f))) {
    reply = {
      intro: "Goodbye 👋",
      principle:
        "Being informed about your rights helps you navigate everyday situations more confidently.",
      firstStep: "You can always come back whenever you want to learn more.",
      note: "This is general legal information, not legal advice.",
    };
  }

  // < intelligent search logic ♥ />
  else {
    const matches = findMatches(lower);

    if (matches.length > 0) {
      let best = matches[0];

      // < handle special case for discrimination ♥ />
      const mentionsWork =
        lower.includes("work") ||
        lower.includes("job") ||
        lower.includes("employee");

      const mentionsAge =
        lower.includes("age") ||
        lower.includes("older") ||
        lower.includes("old");

      if (mentionsWork && mentionsAge) {
        const discriminationMatch = matches.find(
          (m) => m.key === "discrimination"
        );
        if (discriminationMatch) {
          best = discriminationMatch;
        }
      }

      reply = {
        intro: intros[best.key] || intros.default,
        principle: best.principle,
        firstStep: best.firstStep,
        note: "This is general legal information, not legal advice.",
      };
    } else {
      // < no matches found ♥ />
      reply = {
        intro: "I want to make sure I understand you correctly.",
        principle:
          "Your message may involve legal principles, but I couldn’t clearly identify a specific topic yet.",
        firstStep:
          "Common areas people ask about include Employment, Housing, Consumer, Family, and Privacy. You can describe your situation in a bit more detail.",
        note: "This is general legal information, not legal advice.",
      };
    }
  }

  return res.status(200).json({ reply });
}
