import { extractTableFields } from "../../src/helpers/extract-table-fields.helper";
import { LabelPattern } from "../../src/types/label-pattern.interface";

type TestModel = {
  nombre: string;
  edad: string;
  direccion: string;
};

const labels: readonly LabelPattern<TestModel>[] = [
  { key: 'nombre', pattern: 'Nombre' },
  { key: 'edad', pattern: 'Edad' },
  { key: 'direccion', pattern: 'Dirección' },
];

describe('extractTableFields', () => {
  it('extrae campos simples en orden', () => {
    const text = `
Nombre: Juan Pérez
Edad: 32
Dirección: Calle Falsa 123
`;

    const result = extractTableFields<TestModel>(text, labels);

    expect(result).toEqual({
      nombre: 'Juan Pérez',
      edad: '32',
      direccion: 'Calle Falsa 123',
    });
  });

    it('extrae valores multilínea correctamente', () => {
    const text = `
Nombre: Juan
Pérez Gómez
Edad: 32
Dirección: Calle
Falsa
123
`;

    const result = extractTableFields<TestModel>(text, labels);

    expect(result).toEqual({
      nombre: 'Juan Pérez Gómez',
      edad: '32',
      direccion: 'Calle Falsa 123',
    });
  });

    it('maneja campos sin saltos de línea entre labels', () => {
    const text = `
Nombre: Juan Pérez Edad: 32 Dirección: Calle Falsa 123
`;

    const result = extractTableFields<TestModel>(text, labels);

    expect(result).toEqual({
      nombre: 'Juan Pérez',
      edad: '32',
      direccion: 'Calle Falsa 123',
    });
  });

    it('captura hasta el final cuando no hay más labels presentes', () => {
    const text = `
Nombre: Juan Pérez
Edad: 32
`;

    const result = extractTableFields<TestModel>(text, labels);

    expect(result).toEqual({
      nombre: 'Juan Pérez',
      edad: '32',
      direccion: undefined,
    });
  });

    it('normaliza labels partidos por saltos de línea', () => {
    const text = `
Nom
bre: Juan Pérez
Edad: 32
Dirección: Calle Falsa 123
`;
    const customLabels: readonly LabelPattern<TestModel>[] = [
      { key: 'nombre', pattern: 'Nom\\s*bre' },
      { key: 'edad', pattern: 'Edad' },
      { key: 'direccion', pattern: 'Dirección' },
    ];

    const result = extractTableFields<TestModel>(text, customLabels);

    expect(result.nombre).toBe('Juan Pérez');
  });
});
