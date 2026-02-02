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
  it('should extract fields in the order they appear', () => {
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

    it('should extract multiple fields', () => {
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

    it('should handles fields without line breaks between labels', () => {
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

    it('should capture until end when no more labels are present', () => {
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

    it('should normalizes labels matches by line breaks', () => {
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
