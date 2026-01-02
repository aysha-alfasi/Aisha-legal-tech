import { useState, useEffect } from "react";
import { rightsConfig } from "../data/rightsConfig.js";
import legalRights from "../data/legalRights.js";
import { motion } from "framer-motion";
import jsPDF from "jspdf";

export default function RightsIdentifier() {
  const [step, setStep] = useState(1);
  const [areaKey, setAreaKey] = useState("");
  const [role, setRole] = useState("");
  const [issue, setIssue] = useState("");
  const [documentId, setDocumentId] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  function generateDocumentId() {
    const random = Math.random().toString(36).substring(2, 6).toUpperCase();
    const date = new Date().getFullYear();
    return `AISHA-EDU-${date}-${random}`;
  }

  useEffect(() => {
    if (step === 4 && !documentId) {
      setDocumentId(generateDocumentId());
    }
  }, [step, documentId]);

  const selectedArea = rightsConfig.find((a) => a.key === areaKey);
  const result = legalRights.find((r) => r.key === areaKey);

  function downloadPDF({ selectedArea, issue, result }) {
    const doc = new jsPDF("p", "mm", "a4");

    const pageWidth = doc.internal.pageSize.getWidth();
    let y = 20;

    //  < Title ♥ />
    doc.setFont("Times", "Bold");
    doc.setFontSize(18);
    doc.text("Legal Rights Summary", pageWidth / 2, y, { align: "center" });

    y += 25;

    // < Divider ♥ />
    doc.setDrawColor(180);
    doc.line(20, y - 10, pageWidth - 20, y - 10);
    y += 18;

    // < Meta Info ♥ />
    doc.setFont("Times", "Normal");
    doc.setFontSize(12);
    doc.text(`Area: ${selectedArea.label}`, 20, y);
    y += 8;
    doc.text(`Issue: ${issue}`, 20, y);
    y += 12;

    // < Section: Rights ♥ />
    doc.setFont("Times", "Bold");
    doc.setFontSize(13);
    doc.text("Your General Rights", 20, y);
    y += 8;

    doc.setFont("Times", "Normal");
    doc.setFontSize(11);
    const rightsText = doc.splitTextToSize(result.principle, pageWidth - 40);
    doc.text(rightsText, 20, y);
    y += rightsText.length * 6 + 6;

    // < Section: First Step ♥ />
    doc.setFont("Times", "Bold");
    doc.setFontSize(13);
    doc.text("First Recommended Step", 20, y);
    y += 8;

    doc.setFont("Times", "Normal");
    doc.setFontSize(11);
    const stepText = doc.splitTextToSize(result.firstStep, pageWidth - 40);
    doc.text(stepText, 20, y);
    y += stepText.length * 6 + 14;

    // < Footer Box ♥ />
    const footerY = 180;
    const footerHeight = 50;

    doc.setDrawColor(150);
    doc.rect(20, footerY - 8, pageWidth - 40, footerHeight);

    doc.setFont("Times", "Bold");
    doc.setFontSize(10);
    doc.text("Important Legal Information", 24, footerY);

    doc.setFont("Times", "Normal");
    doc.setFontSize(9);
    doc.text(
      "This document is provided for general legal education and awareness purposes only.\n" +
        "It does not constitute legal advice or legal representation.",
      24,
      footerY + 6
    );

    // < Prepared by ♥ />
    doc.setFontSize(9);
    doc.text("Prepared by", 24, footerY + 20);

    doc.setFont("Times", "Bold");
    doc.text("Aisha Alfassi", 24, footerY + 26);

    doc.setFont("Times", "Italic");
    doc.setFontSize(8);
    doc.text("Legal Tech Assistant", 24, footerY + 31);

    // < Right-aligned note ♥ />
    doc.setFont("Times", "Italic");
    doc.setFontSize(8);
    doc.text("Educational legal content", pageWidth - 24, footerY + 31, {
      align: "right",
    });

    doc.setFontSize(9);
    doc.setTextColor(120);

    doc.text(
      `Document ID: ${documentId}\nGenerated for educational purposes only.`,
      20,
      230,
      { maxWidth: 170 }
    );

    //  < Save PDF ♥ />
    doc.save("legal-rights-summary.pdf");
  }

  function handleNextStep(nextStep) {
    let isValid = true;
    
    if (step === 1 && !areaKey) {
      isValid = false;
    } else if (step === 2 && !role) {
      isValid = false;
    } else if (step === 3 && !issue) {
      isValid = false;
    }

    if (!isValid) {
      setShowFeedback(true);
      setTimeout(() => setShowFeedback(false), 3000);
      return;
    }
    
    setStep(nextStep);
    setShowFeedback(false);
  }

  return (
    <div className="max-w-3xl mx-auto px-6 pb-6 pt-2 text-white overflow-hidden max-h-[65vh]">
      {step > 1 && step < 4 && (
        <button
          onClick={() => setStep(step - 1)}
          className="mb-4 text-sm underline opacity-70 hover:opacity-100 transition-opacity duration-200"
        >
          ← Back
        </button>
      )}

      {step === 1 && (
        <>
          <h2 className="text-2xl mb-4">Identify Your Legal Area</h2>
          <select
            className="
  w-full p-3 rounded-xl
  bg-[#14182B]
  border border-white/20
  text-white
  focus:outline-none
  focus:border-[#9BB8FF]
  focus:ring-2 focus:ring-[#9BB8FF]/40
  transition
  appearance-none
  pr-10
  hover:border-white/30
  cursor-pointer
"
            value={areaKey}
            onChange={(e) => setAreaKey(e.target.value)}
          >
            <option value="">Select an area</option>
            {rightsConfig.map((area) => (
              <option key={area.key} value={area.key}>
                {area.label}
              </option>
            ))}
          </select>

          {showFeedback && !areaKey && (
            <motion.p
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-2 text-sm text-[#9BB8FF] font-medium"
            >
              Please select a legal area to continue
            </motion.p>
          )}

          <button
            onClick={() => handleNextStep(2)}
            className="mt-6 px-6 py-3 bg-[#FAF3EA] text-[#1E2337] rounded-lg transition-all duration-300 font-medium relative overflow-hidden group"
          >
            <span className="relative z-10">Next</span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#FAF3EA] to-[#e8ddd0] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            {!areaKey && (
              <span className="absolute top-0 right-0 bottom-0 left-0 bg-[#FAF3EA]/50 backdrop-blur-[1px] rounded-lg"></span>
            )}
          </button>
        </>
      )}

      {step === 2 && selectedArea && (
        <>
          <h2 className="text-2xl mb-4">Your Role</h2>
          <select
            className="
  w-full p-3 rounded-xl
  bg-[#14182B]
  border border-white/20
  text-white
  focus:outline-none
  focus:border-[#9BB8FF]
  focus:ring-2 focus:ring-[#9BB8FF]/40
  transition
  appearance-none
  pr-10
  hover:border-white/30
  cursor-pointer
"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="">Select your role</option>
            {selectedArea?.roles?.map((role) => (
              <option key={role.key} value={role.key}>
                {role.label}
              </option>
            ))}
          </select>

          {showFeedback && !role && (
            <motion.p
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-2 text-sm text-[#9BB8FF] font-medium"
            >
              Please select your role to continue
            </motion.p>
          )}

          <button
            onClick={() => handleNextStep(3)}
            className="mt-6 px-6 py-3 bg-[#FAF3EA] text-[#1E2337] rounded-lg transition-all duration-300 font-medium relative overflow-hidden group"
          >
            <span className="relative z-10">Next</span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#FAF3EA] to-[#e8ddd0] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            {!role && (
              <span className="absolute top-0 right-0 bottom-0 left-0 bg-[#FAF3EA]/50 backdrop-blur-[1px] rounded-lg"></span>
            )}
          </button>
        </>
      )}

      {step === 3 && selectedArea && (
        <>
          <h2 className="text-2xl mb-4">Main Issue</h2>
          <select
            className="
  w-full p-3 rounded-xl
  bg-[#14182B]
  border border-white/20
  text-white
  focus:outline-none
  focus:border-[#9BB8FF]
  focus:ring-2 focus:ring-[#9BB8FF]/40
  transition
  appearance-none
  pr-10
  hover:border-white/30
  cursor-pointer
"
            value={issue}
            onChange={(e) => setIssue(e.target.value)}
          >
            <option value="">Select an issue</option>
            {selectedArea?.issues?.map((i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>

          {showFeedback && !issue && (
            <motion.p
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-2 text-sm text-[#9BB8FF] font-medium"
            >
              Please select an issue to continue
            </motion.p>
          )}

          <button
            onClick={() => handleNextStep(4)}
            className="mt-6 px-6 py-3 bg-[#FAF3EA] text-[#1E2337] rounded-lg transition-all duration-300 font-medium relative overflow-hidden group"
          >
            <span className="relative z-10">Generate Summary</span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#FAF3EA] to-[#e8ddd0] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            {!issue && (
              <span className="absolute top-0 right-0 bottom-0 left-0 bg-[#FAF3EA]/50 backdrop-blur-[1px] rounded-lg"></span>
            )}
          </button>
        </>
      )}

      {step === 4 &&
        (result ? (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-[#FAF3EA] text-[#1E2337] rounded-sm shadow-xl mt-3 flex flex-col max-h-[75vh]"
          >
            <div className="flex-1 overflow-y-auto custom-scroll p-8 pb-32">
              <h2 className="text-2xl font-bold mb-12 text-center">
                Legal Rights Summary
              </h2>

              <p className="mb-2">
                <strong>Area:</strong> {selectedArea.label}
              </p>

              <p className="mb-4">
                <strong>Issue:</strong> {issue}
              </p>

              <h3 className="font-semibold mt-6 mb-1 text-lg">
                Your General Rights
              </h3>

              <p>{result.principle}</p>

              <h3 className="font-semibold mt-6 mb-1 text-lg">
                First Recommended Step
              </h3>

              <p>{result.firstStep}</p>

              <div className="mt-10 pt-6 border-t border-[#1E2337]/30 text-sm">
                <div className="bg-[#FAF3EA]/80 p-5 rounded-md border border-[#1E2337]/20 flex flex-col gap-4">
                  {/* < Legal notice ♥ /> */}
                  <div>
                    <p className="font-semibold mb-1">
                      Legal Information Notice
                    </p>
                    <p>
                      This document is provided for general legal education and
                      awareness purposes only.
                    </p>
                    <p className="mt-1">
                      It does not constitute legal advice or legal
                      representation.
                    </p>
                  </div>

                  {/* < Signature + metadata ♥ */}
                  <div className="flex items-end justify-between pt-2 -mt-3">
                    <div>
                      <p className="text-sm">Prepared by</p>
                      <p className="font-semibold">Aisha Alfassi</p>
                      <p className="text-xs opacity-80">Legal Tech Assistant</p>

                      <p className="text-[10px] opacity-50 mt-3">
                        Reference ID: {documentId}
                      </p>
                    </div>

                    <p className="text-xs opacity-70 italic text-right">
                      Educational legal content
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="sticky bottom-0 mb-12 bg-[#FAF3EA]/90 backdrop-blur-md px-8 py-4 border-t border-[#1E2337]/10">
              <button
                className="w-full px-6 py-3 rounded-xl
               bg-[#1E2337] text-[#FAF3EA]
               font-semibold
               hover:opacity-90 transition-all duration-300 transform hover:scale-[1.01] active:scale-[0.99]"
                onClick={() => downloadPDF({ selectedArea, issue, result })}
              >
                Download Your Rights Summary
              </button>

              <button
                onClick={() => {
                  setStep(1);
                  setAreaKey("");
                  setRole("");
                  setIssue("");
                  setDocumentId(null);
                }}
                className="mt-4 text-sm underline text-center w-full hover:opacity-80 transition-opacity"
              >
                Start over
              </button>
            </div>
          </motion.div>
        ) : (
          <p className="text-amber-300 mt-6 text-center">
            Sorry, we couldn't generate a summary for this area.
          </p>
        ))}
      <style>{`
  .custom-scroll::-webkit-scrollbar {
    width: 8px;
  }

  .custom-scroll::-webkit-scrollbar-thumb {
    background: rgba(30, 35, 55, 0.35); 
    border-radius: 20px;
    border: 2px solid rgba(250, 243, 234, 0.9); 
  }

  .custom-scroll::-webkit-scrollbar-thumb:hover {
    background: rgba(30, 35, 55, 0.55);
  }

  .custom-scroll::-webkit-scrollbar-track {
    background: rgba(30, 35, 55, 0.06);
    border-radius: 20px;
  }

  select {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
    background-position: right 0.75rem center;
    background-repeat: no-repeat;
    background-size: 1.5em 1.5em;
    padding-right: 2.5rem;
  }
`}</style>
    </div>
  );
}