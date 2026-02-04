import { PsychoeducationalAssessmentMapper } from '../../../src/sections/summary/mappers/psycho-educational-assessment.mapper';

describe('PsychoeducationalAssessmentMapper', () => {
  it('should extract and normalize psychoeducational assessment text', () => {
    const text = `
      Valoración de Salud
      Texto previo

      Evaluación Psicoeducativa
      El estudiante presenta
      habilidades cognitivas   adecuadas
      para su edad, con buen nivel
      de atención sostenida.

      Contexto Familiar y Escolar
      Texto siguiente
    `;

    const result = PsychoeducationalAssessmentMapper.map(text);

    expect(result).toBe(
      'El estudiante presenta habilidades cognitivas adecuadas para su edad, con buen nivel de atención sostenida.',
    );
  });

  it('should return empty string when psychoeducational assessment section is not found', () => {
    const text = `
      Texto sin evaluación psicoeducativa
    `;

    const result = PsychoeducationalAssessmentMapper.map(text);

    expect(result).toBe('');
  });

  it('should return empty string when psychoeducational assessment section has no content', () => {
    const text = `
      Evaluación Psicoeducativa
      Contexto Familiar y Escolar
    `;

    const result = PsychoeducationalAssessmentMapper.map(text);

    expect(result).toBe('');
  });
});
