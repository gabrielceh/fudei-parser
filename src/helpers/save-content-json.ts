import * as fs from "fs";
import path from "path";

export async function saveContentInJson({data, fileName}:{data: any, fileName: string}): Promise<void> {
 const folderPath = path.join(`./json`); // carpeta donde quieres guardar
  const filePath = path.join(folderPath, `${fileName}.json`);

  // Crear carpeta si no existe
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
    console.log(`📁 Carpeta creada: ${folderPath}`);
  }

  // Guardar archivo
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");

  console.log(`✔ Contenido guardado en "${filePath}"`);
}