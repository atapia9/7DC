// 7vendayChallenge-D3 — versión CLI (Node.js)
import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

async function pedirTexto(pregunta) {
  let v = await rl.question(pregunta);
  while (!v || v.trim() === '') {
    v = await rl.question('Por favor, escribe algo válido.\n\n' + pregunta);
  }
  return v.trim();
}

console.log('¡Bienvenida/o al juego de rutas de desarrollo! 🧭');

// 1) Área
let area = (await pedirTexto(
  "Elige tu área:\n- Escribe 'front' para Front-End\n- Escribe 'back' para Back-End\n> "
)).toLowerCase();

if (area.startsWith('front')) area = 'front';
if (area.startsWith('back')) area = 'back';

// 2) Tec según área
let tecnologiaBase = '';
if (area === 'front') {
  const frontChoice = (await pedirTexto(
    "Elegiste Front-End.\n¿Prefieres aprender 'react' o 'vue'?\n> "
  )).toLowerCase();
  if (frontChoice.includes('react')) tecnologiaBase = 'React';
  else if (frontChoice.includes('vue')) tecnologiaBase = 'Vue';
  else tecnologiaBase = 'HTML/CSS/JS (buen inicio mientras decides React/Vue)';
} else if (area === 'back') {
  const backChoice = (await pedirTexto(
    "Elegiste Back-End.\n¿Prefieres aprender 'c#' o 'java'?\n> "
  )).toLowerCase();
  if (backChoice.includes('c#') || backChoice.includes('csharp') || backChoice.includes('c-sharp')) tecnologiaBase = 'C#';
  else if (backChoice.includes('java')) tecnologiaBase = 'Java';
  else tecnologiaBase = 'Node.js (buen inicio mientras decides C#/Java)';
} else {
  console.log("No reconocí el área. Te pondré en 'Front-End' por ahora.");
  area = 'front';
  tecnologiaBase = 'React';
}

// 3) Especialización vs Fullstack
const ruta = (await pedirTexto(
  "Ahora elige tu camino:\n- Escribe 'especialista' para profundizar en tu área\n- Escribe 'fullstack' para expandirte a ambos mundos\n> "
)).toLowerCase();

if (ruta.startsWith('especial')) {
  const msgEsp = area === 'front'
    ? `¡Genial! Te enfocarás en Front-End con ${tecnologiaBase}. Construirás interfaces impecables y accesibles.`
    : `¡Excelente! Te enfocarás en Back-End con ${tecnologiaBase}. Dominarás APIs robustas y escalables.`;
  console.log(msgEsp);
} else if (ruta.startsWith('full')) {
  const msgFs = area === 'front'
    ? `¡A por Fullstack! Desde ${tecnologiaBase} en el front, sumarás una base sólida de servidor para cerrar el ciclo end-to-end.`
    : `¡A por Fullstack! Partiendo de ${tecnologiaBase} en el back, aprenderás UI/UX y frameworks de front para cubrir todo el flujo.`;
  console.log(msgFs);
} else {
  console.log('Tomaré tu respuesta como exploración mixta. ¡Seguimos!');
}

// 4) Lista de tecnologías (while)
console.log('Ahora, arma tu lista de tecnologías por aprender. Añade tantas como quieras.');

const tecnologias = [];
let continuar = 'ok';

while (continuar && continuar.toLowerCase() === 'ok') {
  const tec = await pedirTexto('Escribe una tecnología que te gustaría aprender:\n> ');
  tecnologias.push(tec);

  let comentario = '';
  const t = tec.toLowerCase();
  if (t.includes('react')) comentario = 'React: gran ecosistema y empleabilidad en Front-End.';
  else if (t.includes('vue')) comentario = 'Vue: curva amigable y excelente DX.';
  else if (t.includes('angular')) comentario = 'Angular: robusto para grandes equipos y arquitecturas.';
  else if (t.includes('typescript')) comentario = 'TypeScript: tipado que eleva la calidad del código.';
  else if (t.includes('node')) comentario = 'Node.js: backend JS para APIs rápidas y escalables.';
  else if (t.includes('java')) comentario = 'Java: madura, multiplataforma y muy demandada en enterprise.';
  else if (t.includes('c#')) comentario = 'C#: potente con .NET para web, escritorio y cloud.';
  else if (t.includes('python')) comentario = 'Python: versátil para data, web y automatización.';
  else if (t.includes('devops') || t.includes('docker') || t.includes('kubernetes'))
    comentario = 'DevOps: acelera entregas y confiabilidad en producción.';
  else if (t.includes('sql') || t.includes('postgres') || t.includes('mysql'))
    comentario = 'Bases de datos: imprescindibles para modelar y consultar información.';
  else comentario = `${tec}: ¡excelente elección para ampliar tu stack!`;

  console.log(comentario);

  continuar = await rl.question("¿Hay alguna otra tecnología que te gustaría aprender?\nEscribe 'ok' para agregar otra, o cualquier otra cosa para finalizar.\n> ");
}

let resumen = "🎯 Tu ruta:\n";
resumen += `- Área: ${area === 'front' ? 'Front-End' : 'Back-End'}\n`;
resumen += `- Tecnología base: ${tecnologiaBase}\n`;
resumen += `- Orientación: ${ruta}\n\n`;
resumen += '🧱 Tecnologías elegidas:\n';
for (let i = 0; i < tecnologias.length; i++) {
  resumen += `  ${i + 1}. ${tecnologias[i]}\n`;
}

console.log(resumen || 'No agregaste tecnologías, pero siempre puedes volver a intentarlo. 💪');

await rl.close();
