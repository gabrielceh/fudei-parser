interface Args {
  text: string;
  startTitle: string;
  endTitle?: string;
}

/**
 * Extrae una sección de texto delimitada por un título inicial y, opcionalmente,
 * un título final. La búsqueda es sensible a mayúsculas/minúsculas y los títulos
 * deben coincidir exactamente con el texto presente en el documento.
 *
 * El contenido retornado corresponde al texto comprendido entre `startTitle`
 * y `endTitle` (sin incluirlos). Si `endTitle` no se proporciona, se extrae
 * todo el contenido desde `startTitle` hasta el final del texto.
 *
 * Es responsabilidad del llamador asegurarse de que los títulos estén escapados
 * correctamente si contienen caracteres especiales de expresiones regulares.
 *
 * @param {Object} args - Argumentos de la función.
 * @param {string} args.text - Texto completo del cual se extraerá la sección.
 * @param {string} args.startTitle - Título que marca el inicio de la sección.
 * @param {string} [args.endTitle] - Título que marca el fin de la sección.
 *
 * @returns {string | undefined}
 * Retorna el contenido de la sección encontrada, sin espacios en los extremos.
 * Retorna `undefined` si no se encuentra el `startTitle`.
 */
export const extractSectionByTitle = ({ startTitle, text, endTitle }: Args): string | undefined => {
  const safeStart = startTitle.trim();
  const safeEnd = endTitle && endTitle.trim();

  const pattern = safeEnd
    ? `${safeStart}([\\s\\S]*?)(?=${safeEnd}|$)`
    : `${safeStart}([\\s\\S]*?)$`;

  const regex = new RegExp(pattern, '');

  return text.match(regex)?.[1]?.trim();
};
