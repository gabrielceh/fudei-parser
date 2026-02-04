# Fudei PDF Scraper

Este proyecto es una librería desarrollada en TypeScript diseñada para extraer y estructurar información desde archivos PDF específicos (formato FUDEI). Permite procesar archivos tanto locales como remotos (URLs) y transformar los datos extraídos en un formato JSON estructurado.

## 📋 Características

- **Lectura de PDF**: Soporte para cargar archivos PDF desde una ruta local o una URL.
- **Parsing Inteligente**: Extracción segmentada de información clave, incluyendo:
  - Antecedentes Generales
  - Resumen
  - Identificación NEE (Necesidades Educativas Especiales)
  - Firmas
- **Limpieza de Datos**: Eliminación automática de encabezados y pies de página para un texto más limpio.
- **Exportación a JSON**: Opción configurable para guardar los datos procesados en archivos JSON.

## 🛠️ Tecnologías

- [TypeScript](https://www.typescriptlang.org/)
- [pdf-parse](https://www.npmjs.com/package/pdf-parse)
- [axios](https://axios-http.com/)

## 🚀 Instalación

Puedes instalar la librería usando npm:

```bash
npm install pdf-pdf-fudei
```

## 💻 Uso

Importa `FudeiPdfScraper` en tu proyecto para iniciar el proceso de scraping.

### Ejemplo Básico

```typescript
import { FudeiPdfScraper } from 'pdf-pdf-fudei';

(async () => {
  // Configuración de opciones
  const options = {
    saveJson: true, // Opcional: Guardar el resultado en JSON
    fileName: 'mi_analisis', // Opcional: Nombre del archivo de salida
    outputPath: './output', // Requerido si saveJson es true
  };

  // Inicializar el scraper con la ruta del archivo o URL
  const scraper = new FudeiPdfScraper('./pdfs/mi_documento.pdf', options);

  try {
    const data = await scraper.parse();
    console.log('Datos extraídos:', data);
  } catch (error) {
    console.error('Error al procesar el PDF:', error);
  }
})();
```

### Opciones de Configuración (`FudeiScraperOptions`)

| Opción       | Tipo      | Descripción                                                                                   |
| ------------ | --------- | --------------------------------------------------------------------------------------------- |
| `saveJson`   | `boolean` | Si es `true`, guarda el resultado en un archivo JSON.                                         |
| `fileName`   | `string`  | Nombre del archivo JSON a generar (sin extensión). Si no se provee, se usa el nombre del PDF. |
| `outputPath` | `string`  | Ruta del directorio donde se guardará el archivo JSON. Requerido si `saveJson` es `true`.     |

## 🛠️ Desarrollo

Si deseas clonar el repositorio para contribuir o modificar el código fuente:

1. **Clonar el repositorio:**

   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd scraping-pdf-fudei
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```
3. **Scripts disponibles:**:
   - `npm run dev`: Ejecuta en modo desarrollo.
   - `npm run build`: Compila a JavaScript.
