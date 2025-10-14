export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ message: "Method not allowed" });

  const { message } = req.body;
  const lower = message.toLowerCase().trim();

  // Expanded legal rights database covering comprehensive topics ♥/>

  const legalRights = [
    {
      key: "tenant",
      keywords: ["tenant", "renter", "apartment", "lease", "landlord", "rent", "eviction", "deposit", "housing", "rental"],
      reply: "As a tenant, you generally have rights to habitable housing, proper notice before eviction, and return of your security deposit if conditions are met. Always get agreements in writing and know your local tenant laws."
    },
    {
      key: "employee",
      keywords: ["employee", "worker", "job", "salary", "dismissal", "employment", "contract", "wages", "termination", "workplace"],
      reply: "Employees typically have rights to timely payment, safe working conditions, and protection from discrimination. Keep records of your work agreements and understand your employment contract terms."
    },
    {
      key: "consumer",
      keywords: ["consumer", "buyer", "product", "refund", "warranty", "purchase", "defective", "return", "shopping"],
      reply: "Consumers usually have rights to safe products, accurate product information, and recourse for defective items. Save receipts and check warranty terms before making significant purchases."
    },
    {
      key: "student",
      keywords: ["student", "school", "university", "education", "exam", "grades", "tuition", "admission", "campus"],
      reply: "Students generally have rights to fair evaluation, non-discriminatory treatment, and transparent academic policies. Know your educational institution's code of conduct and appeal procedures."
    },
    {
      key: "housing",
      keywords: ["housing", "home", "mortgage", "property", "real estate", "buying house", "homeowner"],
      reply: "Homeowners and buyers typically have rights to clear property titles, transparent contract terms, and protection from fraudulent practices. Review all documents carefully before signing."
    },
    {
      key: "family",
      keywords: ["family", "marriage", "divorce", "custody", "child support", "alimony", "inheritance", "parent", "children"],
      reply: "Family matters involve rights to fair divorce proceedings, child custody determinations, and inheritance claims. Document important agreements and understand your legal options."
    },
    {
      key: "healthcare",
      keywords: ["health", "medical", "hospital", "doctor", "insurance", "treatment", "patient", "healthcare"],
      reply: "Patients generally have rights to informed consent, medical privacy, and emergency treatment. Keep copies of medical records and understand your insurance coverage."
    },
    {
      key: "privacy",
      keywords: ["privacy", "data", "personal information", "digital", "online", "social media", "confidential"],
      reply: "Individuals typically have rights to control their personal information and how it's collected and used. Read privacy policies and know your data protection options."
    },
    {
      key: "discrimination",
      keywords: ["discrimination", "racism", "sexism", "ageism", "equal", "fair treatment", "prejudice"],
      reply: "Most legal systems protect against discrimination based on race, gender, age, religion, or disability. Document incidents and know where to report discrimination."
    },
    {
      key: "contracts",
      keywords: ["contract", "agreement", "sign", "document", "terms", "obligation", "legal document"],
      reply: "When signing contracts, you generally have rights to understand terms, negotiate conditions, and seek legal review. Never sign documents you don't fully understand."
    },
    {
      key: "business",
      keywords: ["business", "commerce", "trade", "company", "startup", "entrepreneur", "commercial", "merchant"],
      reply: "Business owners generally have rights to operate legally, fair competition, contract enforcement, and intellectual property protection. Understand your industry regulations and business obligations."
    },
    {
      key: "intellectual-property",
      keywords: ["copyright", "trademark", "patent", "intellectual property", "invention", "creative work"],
      reply: "Creators and inventors typically have rights to protect their original works, inventions, and brand identities through copyrights, patents, and trademarks."
    },
    {
      key: "immigration",
      keywords: ["immigration", "visa", "citizenship", "residency", "deportation", "asylum", "refugee"],
      reply: "Immigrants generally have rights to due process, fair treatment in immigration proceedings, and protection from discrimination based on nationality."
    },
    {
      key: "criminal",
      keywords: ["criminal", "arrest", "police", "lawyer", "trial", "bail", "right to remain silent"],
      reply: "Individuals in criminal proceedings typically have rights to legal representation, fair trial, and protection against self-incrimination."
    },
    {
      key: "free-speech",
      keywords: ["free speech", "expression", "opinion", "censorship", "speak", "protest"],
      reply: "People generally have rights to freedom of expression and peaceful assembly, though these may have reasonable limitations in specific contexts."
    },
    {
      key: "environment",
      keywords: ["environment", "pollution", "clean air", "water", "environmental", "conservation"],
      reply: "Individuals typically have rights to a healthy environment and protection from pollution. Report environmental violations to relevant authorities."
    },
    {
      key: "digital-rights",
      keywords: ["digital", "internet", "online", "website", "social media", "digital rights", "cyber"],
      reply: "Internet users generally have rights to access information, digital privacy, and freedom of online expression within legal boundaries."
    },
    {
      key: "insurance",
      keywords: ["insurance", "coverage", "claim", "policy", "insurer", "premium"],
      reply: "Policyholders typically have rights to clear policy terms, fair claim processing, and transparent information about coverage and exclusions."
    },
    {
      key: "debt",
      keywords: ["debt", "loan", "credit", "borrow", "collection", "creditor", "bankruptcy"],
      reply: "Borrowers generally have rights to fair lending practices, transparent loan terms, and protection from abusive debt collection methods."
    },
    {
      key: "transportation",
      keywords: ["transportation", "travel", "airline", "passenger", "driver", "vehicle", "commute"],
      reply: "Travelers and commuters typically have rights to safe transportation, fair pricing, and proper handling of delays or cancellations."
    },
    {
      key: "elderly",
      keywords: ["elderly", "senior", "retirement", "pension", "age", "nursing home"],
      reply: "Older adults generally have rights to protection from age discrimination, proper elder care, and access to retirement benefits."
    },
    {
      key: "disability-rights",
      keywords: ["disability", "accessible", "accommodation", "handicap", "special needs"],
      reply: "People with disabilities typically have rights to reasonable accommodations, accessibility, and protection from discrimination in various settings."
    },
    {
      key: "voting",
      keywords: ["voting", "election", "vote", "ballot", "political", "democracy"],
      reply: "Eligible voters generally have rights to participate in elections, secret ballots, and equal voting opportunities without discrimination."
    },
    {
      key: "tax",
      keywords: ["tax", "taxation", "irs", "income tax", "deduction", "tax return"],
      reply: "Taxpayers typically have rights to fair tax assessment, appeal procedures, and protection from arbitrary tax collection methods."
    },
    {
      key: "banking",
      keywords: ["bank", "banking", "account", "financial", "atm", "transaction"],
      reply: "Bank customers generally have rights to secure accounts, transparent fees, and proper handling of financial transactions and errors."
    },
    {
      key: "energy",
      keywords: ["energy", "electricity", "utility", "power", "gas", "water service"],
      reply: "Utility consumers typically have rights to reliable service, fair pricing, and proper notice before service interruptions or changes."
    }
  ];

  // Message detection arrays ♥/>
  const greetings = ["hello", "hi", "hey", "good morning", "good afternoon", "good evening"];
  const thanks = ["thank you", "thanks", "excellent", "appreciate"];
  const farewells = ["goodbye", "bye", "see you", "farewell"];

  // Smart search system ♥/>
  const findBestMatch = (userMessage) => {
    const matches = legalRights.map(category => {
      let score = 0;
      category.keywords.forEach(keyword => {
        if (userMessage.includes(keyword)) {
          score += 1;
        }
      });
      return { ...category, score };
    }).filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score);

    return matches;
  };

  // Process the message ♥/>
  let reply;

  // Handle greetings ♥/>
  if (greetings.some(greet => lower.includes(greet))) {
    reply = "Hello! I'm Aisha, your legal education assistant. I help people understand their practical rights in various legal areas. What legal topic would you like to learn about?";

  // Handle thank you messages ♥/>
  } else if (thanks.some(thank => lower.includes(thank))) {
    reply = "You're welcome! Understanding your rights is the first step toward protecting them. Feel free to ask about other legal topics.";

  // Handle goodbye messages ♥/>
  } else if (farewells.some(farewell => lower.includes(farewell))) {
    reply = "Goodbye! Remember - being informed about your rights helps you make better decisions and navigate legal situations more confidently.";

  // Handle general help requests ♥/>
  } else if (lower.includes("help") || lower.includes("what can you do") || lower.includes("topics")) {
    reply = "I can educate you about practical rights in areas like housing, employment, business, consumer protection, family matters, healthcare, digital rights, and many other legal topics. Which area interests you?";

  // Search in legal topics ♥/>
  } else {
    const matches = findBestMatch(lower);
    
    if (matches.length > 0) {
      const bestMatch = matches[0];
      reply = bestMatch.reply;
    } else {
      reply = "I'm sorry, I couldn't identify a specific legal topic from your message. Could you please provide more details or let me know what area you'd like to discuss, such as work, housing, family, or consumer rights?";
    }
  }

  return res.status(200).json({ reply });
}