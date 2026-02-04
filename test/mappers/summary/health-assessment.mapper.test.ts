import { HealthAssessmentMapper } from '../../../src/sections/summary/mappers/health-assessment.mapper';

describe('HealthAssessmentMapper', () => {
  it('should extract and normalize health assessment text', () => {
    const text = `
      Valoración de Salud
      El estudiante presenta
      buen estado general   de salud,
      sin     patologías relevantes.

      Evaluación Psicoeducativa
      Texto siguiente
    `;

    const result = HealthAssessmentMapper.map(text);

    expect(result).toBe(
      'El estudiante presenta buen estado general de salud, sin patologías relevantes.',
    );
  });

  it('should return empty string when health assessment section is not found', () => {
    const text = `
      Texto sin la sección esperada
    `;

    const result = HealthAssessmentMapper.map(text);

    expect(result).toBe('');
  });

  it('should return empty string when section exists but has no content', () => {
    const text = `
      Valoración de Salud
      Evaluación Psicoeducativa
    `;

    const result = HealthAssessmentMapper.map(text);

    expect(result).toBe('');
  });
});
