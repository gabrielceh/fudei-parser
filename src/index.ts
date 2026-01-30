import { removeHeaderFooter } from "./helpers/remove-footer-pdf.herlper";
import { saveContentInJson } from "./helpers/save-content-json";
import { ParsedPdf } from "./pdf/parse-pdf";
import { readPdfFromFile } from "./pdf/read-from-file";
import { readPdfFromUrl } from "./pdf/read-from-url";
import { generalBackgroundSection } from "./sections/general-background/general-background-section";
import { summarySection } from "./sections/summary/summary-section";
import { neeIdentificationSection } from "./sections/nee-identification/nee-identification-section";
import { signaturesSection } from "./sections/signatures/sigantures-section";

const file1 = {path: "C:\/Users\/gach0\/OneDrive\/Desktop\/proyectos\/scraping-pdf-fudei\/pdfs\/FU_21498364.pdf", name: "FU_21498364"};
const file2 = {path:"./pdfs/FU_26166005.pdf", name: "FU_26166005"};


interface FudeiScraperOptions {
  saveJson?: boolean;
  fileName?: string;
  outputPath?: string;
}

export class FudeiPdfScraper {
  private source: string;
  private options: FudeiScraperOptions;

  constructor(source: string, options: FudeiScraperOptions = {}) {
    this.source = source;
    this.options = options;
  }

  private isUrl(): boolean {
    return /^https?:\/\//i.test(this.source);
  }

  private async readPdf(): Promise<ParsedPdf> {
    return this.isUrl()
      ? readPdfFromUrl(this.source)
      : readPdfFromFile(this.source);
  }

  private getFileName(): string {
    if (this.options.fileName) return this.options.fileName;
    // fallback automático
    const parts = this.source.split("/");
    return parts[parts.length - 1].replace(".pdf", "");
  }

  async parse() {
    const result = await this.readPdf();

    const textWithoutFooter = removeHeaderFooter(result.text);

    const fudei = {
      generalBackground: generalBackgroundSection(result.text),
      summary: summarySection(textWithoutFooter),
      neeIdentification: neeIdentificationSection(textWithoutFooter),
      signatures: signaturesSection(textWithoutFooter),
    };

   if (this.options.saveJson) {
      if (!this.options.outputPath) {
        throw new Error("outputPath is required when saveJson is enabled");
      }

      await saveContentInJson({
        data: fudei,
        fileName: this.getFileName(),
        outputPath: this.options.outputPath,
      });
    }

    return fudei;
  }
}

(async() => {
  const scraper = new FudeiPdfScraper(
    file1.path,
    // "https://ontheline.trincoll.edu/images/bookdown/sample-local-pdf.pdf", 
    {saveJson: true, fileName: file1.name, outputPath:"./json"});
  const fudei = await scraper.parse();
  console.log(fudei);
})();
