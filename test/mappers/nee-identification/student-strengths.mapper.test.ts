import { StudentStrengthsMapper } from '../../../src/sections/nee-identification/mappers/student-strengths.mapper';

describe('StudentStrengthsMapper', () => {
  it('should map student strengths correctly', () => {
    const text = `
      Registre fortalezas personales del estudiante que considere importantes para su progreso en el aprendizaje:
      Tiene buena memoria
      Profesionales Requeridos por el Estudiante
    `;

    const result = StudentStrengthsMapper.map(text);

    expect(result).toBeDefined();
    expect(result).toContain('Tiene buena memoria');
  });

  it('should return undefined if section is not found', () => {
    const text = `
      Other content
    `;

    const result = StudentStrengthsMapper.map(text);

    expect(result).toBeUndefined();
  });
});
