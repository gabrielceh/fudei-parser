import * as fs from 'fs';
import path from 'path';

interface SaveContentOptions {
  data: unknown;
  fileName: string;
  outputPath: string;
}

export async function saveContentInJson({
  data,
  fileName,
  outputPath,
}: SaveContentOptions): Promise<void> {
  const folderPath = path.resolve(outputPath); // carpeta donde quieres guardar
  const filePath = path.join(folderPath, `${fileName}.json`);

  // Crear carpeta si no existe
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }

  // Guardar archivo
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
  console.log(`✔ Contenido guardado en "${filePath}"`);
}
