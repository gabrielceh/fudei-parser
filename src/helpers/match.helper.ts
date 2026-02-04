export const match = (regex: RegExp, text: string) => regex.exec(text)?.[1];
