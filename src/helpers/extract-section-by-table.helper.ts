
interface Args {
  text: string;
  startTitle: string;
  endTitle?: string;
}

export const extractSectionByTitle = ({startTitle, text, endTitle}:Args): string | undefined => {
  const safeStart = startTitle.trim();
  const safeEnd = endTitle?.trim();

  const pattern = safeEnd
    ? `${safeStart}([\\s\\S]*?)(?=${safeEnd}|$)`
    : `${safeStart}([\\s\\S]*?)$`;

  const regex = new RegExp(pattern, "i");

  return text.match(regex)?.[1]?.trim();
};
