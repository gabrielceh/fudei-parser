import axios from "axios";
import { parsePdf } from "./parse-pdf";

export async function readPdfFromUrl(url: string) {
  const response = await axios.get<ArrayBuffer>(url, {
    responseType: "arraybuffer",
  });

  const buffer = Buffer.from(response.data);
  return parsePdf(buffer);
}
