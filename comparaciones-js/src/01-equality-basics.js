// src/01-equality-basics.js
// Día 1 — Igualdad: diferencia entre == y ===

console.log("== Básicos vs === Básicos\n");

const casos = [
  { expr: "1 == '1'", v: 1 == '1' },
  { expr: "1 === '1'", v: 1 === '1' },
  { expr: "0 == false", v: 0 == false },
  { expr: "0 === false", v: 0 === false },
  { expr: "null == undefined", v: null == undefined },
  { expr: "null === undefined", v: null === undefined },
];

for (const c of casos) {
  console.log(`${c.expr} -> ${c.v}`);
}
