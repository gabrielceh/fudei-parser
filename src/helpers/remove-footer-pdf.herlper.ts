export const removeHeaderFooter = (text: string): string => {
  // patron para encontrar algo similar a:
  //  Fecha/Hora: 02-12-2024 10:10 Fecha Cierre: 07-05-2024 Folio: 87C9615B2E1CC3-1 Página: 1 / 7
  const pattern =
    /Fecha\/Hora:\s*\d{2}-\d{2}-\d{4}\s+\d{2}:\d{2}\s*Fecha\s*Cierre:\s*\d{2}-\d{2}-\d{4}\s*Folio:\s*[A-Z0-9-]+\s*Página:\s*\d+\s*\/?\s*\d+/gi;

  return text.replace(pattern, '').trim();
};
