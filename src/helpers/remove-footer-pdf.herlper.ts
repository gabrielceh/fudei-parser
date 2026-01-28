export const removeHeaderFooter = (text: string): string => {
  const pattern =
    /Fecha\/Hora:\s*\d{2}-\d{2}-\d{4}\s+\d{2}:\d{2}\s*Fecha\s*Cierre:\s*\d{2}-\d{2}-\d{4}\s*Folio:\s*[A-Z0-9-]+\s*Página:\s*\d+\s*\/?\s*\d+/gi;

  return text.replace(pattern, "").trim();
};