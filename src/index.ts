import path from "path";
import { ENVIRONMENTS } from "./const/environments";
import { removeHeaderFooter } from "./helpers/remove-footer-pdf.herlper";
import { saveContentInJson } from "./helpers/save-content-json";
import { ParsedPdf } from "./pdf/parse-pdf";
import { readPdfFromFile } from "./pdf/read-from-file";
import { readPdfFromUrl } from "./pdf/read-from-url";
import { generalBackgroundSection } from "./sections/general-background/general-background-section";
import { summarySection } from "./sections/summary/summary-section";
import { neeIdentificationSection } from "./sections/nee-identification/nee-identification-section";

const file1 = {path: "C:\/Users\/gach0\/OneDrive\/Desktop\/proyectos\/scraping-pdf-fudei\/pdfs\/FU_21498364.pdf", name: "FU_21498364"};
const file2 = {path:"./pdfs/FU_26166005.pdf", name: "FU_26166005"};

const nodeEnv = ENVIRONMENTS.NODE_ENV;

async function main() {
  let result:ParsedPdf = {
    text: "",
    numPages: 0,
    info: undefined,
    metadata: undefined,
  }
  let currentFile:{path: string, name: string} = {path: "", name: ""};

  // 🔹 Desde archivo local
  if(nodeEnv === "development"){
    currentFile = file1;
    result = await readPdfFromFile(currentFile.path);
  }else{
    // 🔹 Desde URL
    // const result = await readPdfFromUrl("https://example.com/archivo.pdf");
  }


  // console.log("Páginas:", result.numPages);
  // console.log("Texto:", result.text);
  const textWithoutFooter = removeHeaderFooter(result.text);
  const generalBackground = generalBackgroundSection(result.text);
  const summary = summarySection(textWithoutFooter);
  const neeIdentification = neeIdentificationSection(textWithoutFooter);

  const fudei = {
    generalBackground,
    summary,
    neeIdentification,
  }

  await saveContentInJson({data: fudei, fileName: currentFile.name});

  return fudei;
}

main().catch(console.error);
