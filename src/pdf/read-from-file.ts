import fs from 'fs';
import path from 'path';
import { parsePdf } from './parse-pdf';

export async function readPdfFromFile(filePath: string) {
  const absolutePath = path.resolve(filePath);

  // 1️⃣ Check existence
  if (!fs.existsSync(absolutePath)) {
    throw new Error('PDF file does not exist');
  }

  const stat = fs.statSync(absolutePath);

  // 2️⃣ Check it's a file
  if (!stat.isFile()) {
    throw new Error('Provided path is not a file');
  }

  // 3️⃣ Check extension
  if (path.extname(absolutePath).toLowerCase() !== '.pdf') {
    throw new Error('File is not a PDF');
  }

  const buffer = fs.readFileSync(absolutePath);

  // 4️⃣ Validate PDF magic header (%PDF-)
  const pdfHeader = buffer.subarray(0, 5).toString();

  if (pdfHeader !== '%PDF-') {
    throw new Error('File does not have a valid PDF signature');
  }

  // 5️⃣ Parse PDF
  return parsePdf(buffer);
}
