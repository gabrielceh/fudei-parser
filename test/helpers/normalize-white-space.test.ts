import { normalizeWhitespace } from '../../src/helpers/normalize-white-space.helper';

describe('normalizeWhitespace', () => {
  it('should replace multiple whitespace characters with a single space', () => {
    const text = 'Texto   con \n muchos\t\t espacios';
    const result = normalizeWhitespace(text);

    expect(result).toBe('Texto con muchos espacios');
  });

  it('should trim leading and trailing spaces', () => {
    const text = '   Texto con espacios   ';
    const result = normalizeWhitespace(text);

    expect(result).toBe('Texto con espacios');
  });

  it('should return empty string when input is empty', () => {
    expect(normalizeWhitespace('')).toBe('');
  });

  it('should return empty string when input is undefined or null-like', () => {
    expect(normalizeWhitespace(undefined!)).toBe('');
  });
});
