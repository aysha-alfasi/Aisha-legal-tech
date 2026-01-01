import legalRights from "../legalRights.js";
import { scenariosBank } from "./scenariosBank.js";

export function generateSmartGame(key) {
  const rightsData = legalRights.find(r => r.key === key);
  const scenarios = scenariosBank[key];

  if (!rightsData) {
    throw new Error(`Legal rights data for "${key}" not found`);
  }

  if (!scenarios || scenarios.length === 0) {
    throw new Error(`No scenarios found for "${key}"`);
  }

  return {
    key,
    title: `${key.charAt(0).toUpperCase() + key.slice(1)} Rights`,
    description: `Learn your ${key} rights through real-life situations.`,
      principle: rightsData.principle,

    scenarios: scenarios.map(s => ({
      ...s,
      explanation: s.explanation,
    })),
  };
}

