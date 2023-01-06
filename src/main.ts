// @ts-nocheck
export function validate (rawCpf) {
  if (!rawCpf) { return false }
  if (rawCpf.length >= 11 && rawCpf.length <= 14){
      const cleanCpf = rawCpf
          .replace('.','')
          .replace('.','')
          .replace('-','')
          .replace(" ","");
      if (!cleanCpf.split("").every(c => c === cleanCpf[0])) {
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
        if (rest < 2)
            lastCheckDigit = 0;
        else
            lastCheckDigit = 11 - rest;
        let originalCheckDigits = cleanCpf.substring(cleanCpf.length - 2, cleanCpf.length);
        return originalCheckDigits === `${firstCheckDigit}${lastCheckDigit}`;
      } else return false
  }else return false;
}