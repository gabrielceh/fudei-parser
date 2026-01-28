import pdf from "pdf-parse";

export interface ParsedPdf {
  text: string;
  numPages: number;
  info: any;
  metadata: any;
}

export async function parsePdf(buffer: Buffer): Promise<ParsedPdf> {
  const data = await pdf(buffer);

  return {
    text: data.text,
    numPages: data.numpages,
    info: data.info,
    metadata: data.metadata,
  };
}
