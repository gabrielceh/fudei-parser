import axios, { AxiosError } from "axios";
import { parsePdf } from "./parse-pdf";

export async function readPdfFromUrl(url: string) {
  try {
    const response = await axios.get<ArrayBuffer>(url, {
      responseType: "arraybuffer",
      timeout: 15000,
      validateStatus: (status) => status >= 200 && status < 300,
    });

    // Validate Content-Type
    const contentType = response.headers["content-type"];

    if (!contentType || !contentType.toLowerCase().includes("application/pdf")) {
      throw new Error(
        `The URL did not return a valid PDF (Content-Type: ${contentType ?? "unknown"})`
      );
    }

    const buffer = Buffer.from(response.data);

    // Validate PDF magic header (%PDF-)
    const pdfHeader = buffer.subarray(0, 5).toString();

    if (pdfHeader !== "%PDF-") {
      throw new Error("The downloaded file does not have a valid PDF signature");
    }

    // Parse PDF
    return parsePdf(buffer);

  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(
        `Failed to download PDF: ${
          error.response?.status
            ? `${error.response.status} ${error.response.statusText}`
            : error.message
        }`
      );
    }

    throw error;
  }
}
