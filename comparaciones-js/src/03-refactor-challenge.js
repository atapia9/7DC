// src/03-refactor-challenge.js
// Refactor del enunciado: reportar valor y tipo correctamente

let numeroUn = 1;
let stringUn = '1';

let numeroTreinta = 30;
let stringTreinta = '30';

let numeroDiez = 10;
let stringDiez = '10';

function mismoValorDistintoTipo(a, b) {
  return a == b && a !== b;
}

function mismoValorMismoTipo(a, b) {
  return a === b;
}

// Comparación numeroUn y stringUn
if (mismoValorDistintoTipo(numeroUn, stringUn)) {
  console.log('Las variables numeroUn y stringUn tienen el mismo valor, pero tipos diferentes');
} else if (mismoValorMismoTipo(numeroUn, stringUn)) {
  console.log('Las variables numeroUn y stringUn tienen el mismo valor y el mismo tipo');
} else {
  console.log('Las variables numeroUn y stringUn no tienen el mismo valor');
}

// Comparación numeroTreinta y stringTreinta
if (mismoValorMismoTipo(numeroTreinta, stringTreinta)) {
  console.log('Las variables numeroTreinta y stringTreinta tienen el mismo valor y el mismo tipo');
} else if (mismoValorDistintoTipo(numeroTreinta, stringTreinta)) {
  console.log('Las variables numeroTreinta y stringTreinta tienen el mismo valor, pero tipos diferentes');
} else {
  console.log('Las variables numeroTreinta y stringTreinta no tienen el mismo valor');
}

// Comparación numeroDiez y stringDiez
if (mismoValorDistintoTipo(numeroDiez, stringDiez)) {
  console.log('Las variables numeroDiez y stringDiez tienen el mismo valor, pero tipos diferentes');
} else if (mismoValorMismoTipo(numeroDiez, stringDiez)) {
  console.log('Las variables numeroDiez y stringDiez tienen el mismo valor y el mismo tipo');
} else {
  console.log('Las variables numeroDiez y stringDiez no tienen el mismo valor');
}
