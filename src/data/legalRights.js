const legalRights = [
  {
    key: "tenant",
    keywords: [
      "tenant",
      "renter",
      "rent",
      "renting",
      "landlord",
      "apartment",
      "flat",
      "house",
      "lease",
      "rental",
      "deposit",
      "security deposit",
      "eviction",
      "kicked out",
      "notice to leave",
      "rent increase",
      "housing",
    ],
    principle:
      "Tenants generally have the right to habitable housing and proper notice before eviction.",
    firstStep:
      "Review your lease agreement and document any issues or notices received.",
    note: "This is general legal information, not legal advice.",
  },

  {
    key: "employee",
    keywords: [
      "employee",
      "worker",
      "job",
      "work",
      "working",
      "boss",
      "manager",
      "employer",
      "company",
      "office",
      "salary",
      "pay",
      "paid",
      "unpaid",
      "late pay",
      "wages",
      "overtime",
      "extra hours",
      "worked extra",
      "fired",
      "got fired",
      "lost my job",
      "dismissed",
      "termination",
      "contract",
      "employment",
      "workplace",
    ],
    principle:
      "Employees typically have rights to timely payment, safe working conditions, and protection from unfair dismissal.",
    firstStep:
      "Keep written records of your employment terms, pay slips, and any correspondence with your employer.",
    note: "This is general legal information, not legal advice.",
  },

  {
    key: "consumer",
    keywords: [
      "consumer",
      "buyer",
      "bought",
      "purchase",
      "shopping",
      "product",
      "item",
      "order",
      "online order",
      "refund",
      "return",
      "warranty",
      "defective",
      "broken",
    ],
    principle:
      "Consumers usually have rights to safe products, accurate information, and remedies for defective goods.",
    firstStep:
      "Keep receipts and check warranty terms before making claims.",
    note: "This is general legal information, not legal advice.",
  },

  {
    key: "student",
    keywords: [
      "student",
      "school",
      "university",
      "college",
      "education",
      "exam",
      "test",
      "grades",
      "failed",
      "tuition",
      "fees",
      "admission",
      "campus",
    ],
    principle:
      "Students generally have rights to fair evaluation, non-discriminatory treatment, and transparent academic policies.",
    firstStep:
      "Know your educational institution's code of conduct and appeal procedures.",
    note: "This is general legal information, not legal advice.",
  },

  {
    key: "housing",
    keywords: [
      "housing",
      "home",
      "house",
      "mortgage",
      "property",
      "real estate",
      "buying a house",
      "homeowner",
      "property contract",
    ],
    principle:
      "Homeowners and buyers typically have rights to clear property titles and transparent contract terms.",
    firstStep:
      "Review all property documents carefully and seek clarification on unclear terms.",
    note: "This is general legal information, not legal advice.",
  },

  {
    key: "family",
    keywords: [
      "family",
      "marriage",
      "married",
      "divorce",
      "separation",
      "custody",
      "child support",
      "alimony",
      "inheritance",
      "parent",
    ],
    principle:
      "Family matters involve rights to fair divorce proceedings, child custody determinations, and inheritance claims.",
    firstStep:
      "Document important agreements and understand your legal options in family matters.",
    note: "This is general legal information, not legal advice.",
  },

  {
    key: "child",
    keywords: [
      "child",
      "children",
      "kids",
      "minor",
      "underage",
      "child rights",
      "children's rights",
    ],
    principle:
      "Children have basic rights to protection from harm, access to education, healthcare services, and safe development.",
    firstStep:
      "Ensure legal guardians are aware of these rights and report any violations.",
    note: "This is general legal information, not legal advice.",
  },

  {
    key: "healthcare",
    keywords: [
      "health",
      "medical",
      "hospital",
      "doctor",
      "clinic",
      "insurance",
      "treatment",
      "patient",
      "healthcare",
      "medical bill",
    ],
    principle:
      "Patients generally have rights to informed consent, medical privacy, and emergency treatment.",
    firstStep:
      "Keep copies of medical records and understand your insurance coverage.",
    note: "This is general legal information, not legal advice.",
  },

  {
    key: "privacy",
    keywords: [
      "privacy",
      "data",
      "personal data",
      "personal information",
      "digital",
      "online",
      "account",
      "social media",
      "confidential",
      "leaked",
    ],
    principle:
      "Individuals typically have rights to control their personal information and how it is collected and used.",
    firstStep:
      "Read privacy policies carefully and exercise your rights to access or delete data.",
    note: "This is general legal information, not legal advice.",
  },

  {
    key: "discrimination",
    keywords: [
      "discrimination",
      "treated unfairly",
      "unfair treatment",
      "racism",
      "sexism",
      "ageism",
      "because of my age",
      "because of my gender",
      "because of my race",
      "because of my religion",
      "prejudice",
      "bias",
    ],
    principle:
      "Most legal systems protect against discrimination based on race, gender, age, religion, or disability.",
    firstStep:
      "Document incidents and know the relevant authorities or organizations to report discrimination.",
    note: "This is general legal information, not legal advice.",
  },

  {
    key: "contracts",
    keywords: [
      "contract",
      "agreement",
      "signed",
      "signing",
      "document",
      "terms",
      "conditions",
      "legal document",
    ],
    principle:
      "When signing contracts, you generally have rights to understand terms, negotiate conditions, and seek legal review.",
    firstStep:
      "Read all contracts carefully and do not sign documents you do not fully understand.",
    note: "This is general legal information, not legal advice.",
  },

  {
    key: "business",
    keywords: [
      "business",
      "company",
      "startup",
      "own a business",
      "entrepreneur",
      "commercial",
      "trade",
    ],
    principle:
      "Business owners generally have rights to operate legally, fair competition, and contract enforcement.",
    firstStep:
      "Understand your industry regulations and business obligations to avoid legal issues.",
    note: "This is general legal information, not legal advice.",
  },

  {
    key: "immigration",
    keywords: [
      "immigration",
      "visa",
      "citizenship",
      "residency",
      "deportation",
      "asylum",
      "refugee",
      "immigrant",
    ],
    principle:
      "Immigrants generally have rights to due process and fair treatment in immigration proceedings.",
    firstStep:
      "Keep documentation updated and understand your rights in your jurisdiction.",
    note: "This is general legal information, not legal advice.",
  },

  {
    key: "criminal",
    keywords: [
      "arrested",
      "arrest",
      "police",
      "charged",
      "crime",
      "court",
      "trial",
      "lawyer",
      "bail",
    ],
    principle:
      "Individuals in criminal proceedings typically have rights to legal representation and a fair trial.",
    firstStep:
      "Exercise your right to remain silent and consult a legal professional immediately.",
    note: "This is general legal information, not legal advice.",
  },

  {
    key: "elderly",
    keywords: [
      "elderly",
      "senior",
      "retirement",
      "pension",
      "nursing home",
      "elder care",
      "old age care",
    ],
    principle:
      "Older adults generally have rights to protection from abuse and access to retirement benefits.",
    firstStep:
      "Document elder care arrangements and consult authorities if rights are violated.",
    note: "This is general legal information, not legal advice.",
  },

  {
    key: "disability-rights",
    keywords: [
      "disability",
      "disabled",
      "accessible",
      "accommodation",
      "special needs",
      "wheelchair",
    ],
    principle:
      "People with disabilities typically have rights to reasonable accommodations and protection from discrimination.",
    firstStep:
      "Request accommodations formally and keep documentation of communications.",
    note: "This is general legal information, not legal advice.",
  },
];

export default legalRights;
