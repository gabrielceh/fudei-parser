# Fudei Parser

**Fudei Parser** es una librería potente y fácil de usar escrita en TypeScript para extraer (scrapear) y estructurar información desde documentos PDF en formato FUDEI (Formulario Único de Evaluación Integral).

Ideal para desarrolladores que necesitan procesar evaluaciones psicopedagógicas y transformarlas en datos JSON estructurados para su análisis o almacenamiento.

## Características Principales

*   **Fuentes Flexibles**: Lee archivos PDF desde rutas locales o URLs remotas.
*   **Limpieza Automática**: Elimina encabezados y pies de página molestos para asegurar una extracción limpia.
*   **Estructura Semántica**: Divide la información en secciones lógicas (Antecedentes, Resumen, NEE, Firmas).
*   **Exportación Integrada**: Capacidad nativa para guardar el resultado directamente como archivo JSON.
*   **Tipado Fuerte**: Definiciones TypeScript completas para una excelente experiencia de desarrollo.

## Instalación

Instala el paquete mediante npm:

```bash
npm install fudei-parser
```

## Cómo Usar

### Uso Básico

La forma más sencilla de usar la librería es proporcionando la ruta a un archivo PDF.

```typescript
import { FudeiPdfScraper } from 'fudei-parser';

(async () => {
  // Inicializa el scraper con un archivo local
  const scraper = new FudeiPdfScraper('./documentos/mi-fudei.pdf');

  try {
    // Ejecuta el proceso de parsing
    const data = await scraper.parse();
    console.log('Datos extraídos:', JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Ocurrió un error:', error);
  }
})();
```

### Uso Avanzado con Opciones

Puedes configurar el scraper para guardar automáticamente el resultado en un JSON y personalizar el nombre del archivo.

```typescript
import { FudeiPdfScraper } from 'fudei-parser';

const opciones = {
  saveJson: true,         // Guardar resultado como archivo JSON
  outputPath: './output', // Carpeta de destino (Requerido si saveJson es true)
  fileName: 'analisis-alumno-1' // Nombre del archivo salida (sin extensión)
};

const scraper = new FudeiPdfScraper('https://ejemplo.com/fudei.pdf', opciones);

scraper.parse().then(data => {
  console.log('Proceso completado. Archivo guardado en ./output/analisis-alumno-1.json');
});
```

## Tipado y Definiciones

### Opciones (`FudeiScraperOptions`)

| Propiedad | Tipo | Requerido | Descripción |
| :--- | :--- | :--- | :--- |
| `saveJson` | `boolean` | No | Si es `true`, guarda el resultado en un archivo físico. Por defecto es `false`. |
| `fileName` | `string` | No | Nombre del archivo de salida. Si no se indica, se intenta inferir del nombre del PDF. |
| `outputPath` | `string` | Sí* | Ruta del directorio donde se guardará el JSON. **Obligatorio si `saveJson` es true**. |

### Respuesta (`FudeiResponse`)

El método `parse()` devuelve una promesa que resuelve en un objeto con la siguiente estructura principal:

```typescript
interface FudeiResponse {
  generalBackground: GeneralBackground;
  summary: Summary;
  neeIdentification: NeeIdentificationSection;
  signatures: SignatureOfResponsibles;
}
```

A continuación se detalla cada sección de la respuesta.

#### 1. Antecedentes Generales (`generalBackground`)

Incluye la información de identificación del estudiante y del establecimiento educativo.

**Estudiante (`student`)**

| Propiedad | Tipo | Descripción |
| :--- | :--- | :--- |
| `fullName` | `string` | Nombre completo del estudiante. |
| `nationality` | `string` | Nacionalidad. |
| `dni` | `string` | RUT o DNI del estudiante. |
| `address` | `string` | Dirección particular (opcional). |
| `gender` | `string` | Género. |
| `region` | `string` | Región de residencia. |
| `birthDate` | `string` | Fecha de nacimiento. |
| `commune` | `string` | Comuna de residencia. |
| `age` | `string` | Edad actual. |
| `admissionCourse` | `string` | Curso de ingreso. |
| `currentCourse` | `string` | Curso actual. |
| `isPriorityStudent` | `boolean` | Indica si es alumno prioritario. |
| `isPreferredStudent` | `boolean` | Indica si es alumno preferente. |
| `isJunaebBeneficiary` | `boolean` | Indica si es beneficiario JUNAEB. |
| `hasPreviousSpecialSchoolParticipation` | `boolean` | Asistencia previa a escuela especial. |
| `hasPreviousPIEParticipation` | `boolean` | Participación previa en PIE. |
| `previousPIEYears` | `number` | Años de permanencia anterior en PIE (opcional). |
| `isSpanishNativeLanguage` | `boolean` | Indica si el español es su lengua materna. |

**Establecimiento (`establishment`)**

| Propiedad | Tipo | Descripción |
| :--- | :--- | :--- |
| `name` | `string` | Nombre del establecimiento educacional. |
| `dependencyType` | `string` | Tipo de dependencia (Municipal, Particular, etc.). |
| `rbd` | `string` | Rol Base de Datos (identificador único). |
| `address` | `string` | Dirección del establecimiento. |
| `region` | `string` | Región ubicación. |
| `commune` | `string` | Comuna ubicación. |

#### 2. Resumen del Proceso (`summary`)

Contiene el detalle de la evaluación integral.

**Diagnóstico (`diagnosis`)**

| Propiedad | Tipo | Descripción |
| :--- | :--- | :--- |
| `neeType` | `'NEE' \| 'NEEP' \| 'NEET' \| ''` | Tipo de Necesidad Educativa Especial. |
| `diagnosis` | `string` | Nombre del diagnóstico principal. |
| `degreeOrType` | `string` | Grado o tipo específico del diagnóstico (opcional). |
| `diagnosisIssueDate` | `string` | Fecha de emisión del diagnóstico. |
| `familyConsentDate` | `string` | Fecha de consentimiento familiar. |
| `nextReevaluationDate` | `string` | Fecha de próxima reevaluación. |
| `associatedSyndrome` | `string` | Síndrome asociado (opcional). |
| `justification` | `string` | Justificación del diagnóstico (texto largo). |

**Equipo Multidisciplinario (`multidisciplinaryTeam`)**

Contiene listas de profesionales (`mandatoryProfessionals`, `otherProfessionals`). Cada profesional tiene:

| Propiedad | Tipo | Descripción |
| :--- | :--- | :--- |
| `professional` | `ProfessionalInfo` | Datos personales (Nombre, RUT, especialidad, cargo, registro, contacto). |
| `processes` | `EvaluationProcesses` | Booleans indicando qué realizó (anamnesis, entrevista, observación, tests, informes, etc.). |

**Otros Datos del Resumen**

| Propiedad | Tipo | Descripción |
| :--- | :--- | :--- |
| `anamnesis` | `AnamnesisInfo` | Antecedentes relevantes y nivel de español. |
| `healthAssessment` | `string` | Estado de salud general (texto). |
| `psychoeducationalAssessment` | `string` | Evaluación psicoeducativa (texto). |
| `familyAndSchoolContext` | `FamilyAndSchoolContext` | Fortalezas y dificultades en contexto `family` y `school`. |
| `observations` | `string` | Observaciones generales adicionales. |

#### 3. Identificación de NEE (`neeIdentification`)

Detalle de necesidades por dominio. La mayoría de los dominios contienen propiedades booleanas indicando la presencia de una necesidad o característica.

**Dominios Específicos**

| Propiedad (Objeto) | Tipo Contenido | Descripción |
| :--- | :--- | :--- |
| `cognitive` | `CognitiveDomain` | Atención, memoria, funciones ejecutivas. |
| `language` | `LanguageDomain` | Niveles fonológico, morfosintáctico, semántico, pragmático (oral/escrito). |
| `communication` | `CommunicationDomain` | Expresiva y receptiva. |
| `sensoryPerceptual` | `SensoryPerceptualDomain` | Visual, auditiva, táctil, etc. |
| `psychomotor` | `PsychomotorDomain` | Motricidad fina/gruesa, desarrollo psicomotor. |
| `affectiveSocial` | `AffectiveSocialDomain` | Autoestima, autonomía, habilidades sociales. |
| `emotional` | `EmotionalDomain` | Identificación, control y expresión de emociones. |

**Otros campos de NEE**

| Propiedad | Tipo | Descripción |
| :--- | :--- | :--- |
| `curricular` | `string` | Adaptaciones curriculares (texto). |
| `family` | `string` | Aspectos familiares (texto). |
| `studentStrengths` | `string` | Fortalezas del estudiante (texto). |
| `learningObjectivesAdjustments`| `boolean` | Indica si hay ajustes en objetivos de aprendizaje. |
| `requiredProfessionals` | `RequiredProfessionals` | Objeto detallando profesionales requeridos (docentes, psicólogo, fonoaudiólogo, etc.) y si se necesitan (`required: boolean`). |

#### 4. Firmas (`signatures`)

Información de los responsables que firman el documento.

| Propiedad | Tipo | Descripción |
| :--- | :--- | :--- |
| `processResponsible` | `ProcessResponsible` | Responsable del proceso. Incluye `fullName`, `phone`, `email`, `profession`, `position`. |
| `schoolDirector` | `SchoolDirector` | Director del establecimiento. Incluye `fullName`, `phone`, `email`. |

## Manejo de Errores Posibles

El scraper puede lanzar excepciones en estos escenarios:

| Error / Causa | Descripción |
| :--- | :--- |
| **Archivo no encontrado** | La ruta al PDF local es incorrecta o no existe. |
| **URL inaccesible** | No se pudo descargar el PDF desde la URL proporcionada (ej. 404 Not Found). |
| **Formato inválido** | El archivo está corrupto o no es un PDF legible. |
| **Configuración incompleta** | Se usó `{ saveJson: true }` sin especificar `{ outputPath: '...' }`. |
| **Secciones undefined** | Si el PDF difiere mucho del formato FUDEI estándar, algunas secciones pueden no detectarse y ser `undefined`. |

---

Desarrollado con ❤️ para facilitar la gestión educativa.
