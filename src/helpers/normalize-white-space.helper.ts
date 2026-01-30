/**
 * Normaliza los espacios en un texto reemplazando cualquier secuencia de
 * espacios en blanco (espacios, saltos de línea, tabs, etc.) por un solo espacio.
 *
 * Útil para textos extraídos de PDFs donde el espaciado suele ser inconsistente.
 *
 * @param {string} text - Texto a normalizar.
 * @returns {string} Texto con los espacios normalizados.
 */
export const normalizeWhitespace = (text: string): string => {
  if(!text) return "";

  return text.replace(/\s+/g, " ").trim();
};
