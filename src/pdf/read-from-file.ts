import fs from "fs";
import path from "path";
import { parsePdf } from "./parse-pdf";

export async function readPdfFromFile(filePath: string) {  
  const absolutePath = path.resolve(filePath);
  
  if (!fs.existsSync(absolutePath)) {
    throw new Error("El archivo PDF no existe");
  }

  const buffer = fs.readFileSync(absolutePath);
  return parsePdf(buffer);
}
