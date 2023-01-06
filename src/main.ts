// @ts-nocheck
export function validate (str) {
  if (!str) { return false }
  if (str.length >= 11 && str.length <= 14){
      str=str
          .replace('.','')
          .replace('.','')
          .replace('-','')
          .replace(" ","");
      if (!str.split("").every(c => c === str[0])) {
        let d1 = 0;
        let d2 = 0;
        let dg2 = 0;
        let digito = 0;
        let nDigResult = 0;
        for (let nCount = 1; nCount < str.length -1; nCount++) {
          digito = parseInt(str.substring(nCount -1, nCount));
          d1 = d1 + ( 11 - nCount ) * digito;
          d2 = d2 + ( 12 - nCount ) * digito;
        };
        let rest = (d1 % 11);
        let dg1 = (rest < 2) ? 0 : 11 - rest;
        d2 += 2 * dg1;
        rest = (d2 % 11);
        if (rest < 2)
            dg2 = 0;
        else
            dg2 = 11 - rest;
        let nDigVerific = str.substring(str.length-2, str.length);
        nDigResult = "" + dg1 + "" + dg2;
        return nDigVerific == nDigResult;
      } else return false
  }else return false;
}