import { removeHeaderFooter } from "./helpers/remove-footer-pdf.herlper";
import { readPdfFromFile } from "./pdf/read-from-file";
import { readPdfFromUrl } from "./pdf/read-from-url";
import { generalBackgroundSection } from "./sections/general-background/general-background-section";
import { summarySection } from "./sections/summary/summary-section";

const file1= "./src/pdfs/FU_21498364.pdf";
const file2 = "./src/pdfs/FU_26166005.pdf";

async function main() {
  // 🔹 Desde archivo local
  const result = await readPdfFromFile(file1);

  // 🔹 Desde URL
  // const result = await readPdfFromUrl("https://example.com/archivo.pdf");

  // console.log("Páginas:", result.numPages);
  // console.log("Texto:", result.text);
  const textWithoutFooter = removeHeaderFooter(result.text);
  // const generalBackground = generalBackgroundSection(result.text);
  summarySection(textWithoutFooter);
  // console.log({generalBackground});
}

main().catch(console.error);
