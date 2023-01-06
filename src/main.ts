// @ts-nocheck
export function validate (rawCpf) {
  if (!rawCpf) { return false; }
  if (!cpfLengthIsValid(rawCpf)) { return false; }
  const cleanCpf = normalizeCpf(rawCpf)
  if (allDigitsAreSame(cleanCpf)) { return false; }
  let calculatedFirstDigit = 0;
  let calculatedLastDigit = 0;
  let lastCheckDigit = 0;
  for (let currentCharacterIndex = 1; currentCharacterIndex < cleanCpf.length -1; currentCharacterIndex++) {
    let digit = parseInt(cleanCpf.substring(currentCharacterIndex - 1, currentCharacterIndex));
    calculatedFirstDigit = calculatedFirstDigit + ( 11 - currentCharacterIndex ) * digit;
    calculatedLastDigit = calculatedLastDigit + ( 12 - currentCharacterIndex ) * digit;
  };
  let rest = (calculatedFirstDigit % 11);
  let firstCheckDigit = (rest < 2) ? 0 : 11 - rest;
  calculatedLastDigit += 2 * firstCheckDigit;
  rest = (calculatedLastDigit % 11);
  lastCheckDigit = (rest < 2) ? 0 : 11 - rest;
  let originalCheckDigits = cleanCpf.substring(cleanCpf.length - 2, cleanCpf.length);
  return originalCheckDigits === `${firstCheckDigit}${lastCheckDigit}`;
}

function cpfLengthIsValid(cpf) {
  return cpf.length >= 11 && cpf.length <= 14;
}

function normalizeCpf(cpf) {
  return cpf.replace('.','').replace('.','').replace('-','').replace(" ","");
}

function allDigitsAreSame(cpf) {
  const firstDigit = cpf[0];
  return cpf.split("").every(digit => digit === firstDigit)
}