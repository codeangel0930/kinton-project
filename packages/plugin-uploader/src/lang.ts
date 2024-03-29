export type Lang = "ja" | "en";

/**
 * Get a default language based on LANG environment value
 * @param lang
 */
export const getDefaultLang = (lang?: string): Lang => {
  return lang && lang.startsWith("ja") ? "ja" : "en";
};
