import { StudentGeneralBackgroundMapper } from '../../../src/sections/general-background/mappers/student-general-background.mapper';

describe('StudentGeneralBackgroundMapper', () => {
  it('should map student general background correctly', () => {
    const text = `
      I. ANTECEDENTES GENERALES

      Antecedentes de Identificación del Estudiante
      Nombre: Juan Pérez
      Nacionalidad: Chilena
      Run: 12.345.678-9
      Dirección Estudiante: Calle Falsa 123
      Sexo: Masculino
      Región: Metropolitana
      Fecha Nacimiento: 01-01-2010
      Comuna: Santiago
      Edad: 14
      Curso de Ingreso al Establecimiento: 5° Básico
      Curso Actual: 8° Básico

      Estudiante Prioritario: SI
      Estudiante Preferente: NO
      Beneficiario Junaeb: SI
      Participación Anterior en Escuela Especial: NO
      Participación Anterior en PIE: SI
      Número de Años PIE: 2
      ¿Su lengua habitual es el Español?: SI

      Antecedentes de Identificación del Establecimiento
      Nombre: Colegio Test
    `;

    const result = StudentGeneralBackgroundMapper.map(text);

    expect(result).toEqual({
      fullName: 'Juan Pérez',
      nationality: 'Chilena',
      dni: '12.345.678-9',
      address: 'Calle Falsa 123',
      gender: 'Masculino',
      region: 'Metropolitana',
      birthDate: '01-01-2010',
      commune: 'Santiago',
      age: '14',
      admissionCourse: '5° Básico',
      currentCourse: '8° Básico',

      isPriorityStudent: true,
      isPreferredStudent: false,
      isJunaebBeneficiary: true,
      hasPreviousSpecialSchoolParticipation: false,
      hasPreviousPIEParticipation: true,
      previousPIEYears: 2,
      isSpanishNativeLanguage: true,
    });
  });

  it('should return undefined if student section is not found', () => {
    const text = `
      I. ANTECEDENTES GENERALES
      Texto cualquiera sin la sección esperada
    `;

    const result = StudentGeneralBackgroundMapper.map(text);

    expect(result).toBeUndefined();
  });

  it('should set previousPIEYears as undefined if value is missing', () => {
    const text = `
    Antecedentes de Identificación del Estudiante
    Nombre: Juan Pérez
    Participación Anterior en PIE: NO
    Antecedentes de Identificación del Establecimiento
  `;

    const result = StudentGeneralBackgroundMapper.map(text);

    expect(result?.previousPIEYears).toBeUndefined();
  });
});
