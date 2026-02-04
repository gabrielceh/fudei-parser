export const normalizePdfText = (text: string): string => {
  return (
    text
      // Unificar saltos de línea
      .replace(/\r\n/g, '\n')
      .replace(/\r/g, '\n')

      // Quitar headers / footers típicos
      .replace(/Fecha\/Hora:[\s\S]*?Página:\s*\d+\s*\/\s*\d+/gi, '')

      // Unir palabras cortadas por salto de línea
      .replace(/(\w)\n(\w)/g, '$1 $2')

      // Convertir múltiples saltos en uno
      .replace(/\n{2,}/g, '\n')

      // Normalizar espacios
      .replace(/[ \t]{2,}/g, ' ')

      // Trim final
      .trim()
  );
};
