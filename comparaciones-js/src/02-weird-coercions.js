// src/02-weird-coercions.js
// Casos "raros" por coerción implícita

console.log("\nCoerciones sorpresivas\n");

const casos = [
  { expr: "" \t\r\n" == 0", v: " \t\r\n" == 0 },
  { expr: "' ' == 0", v: ' ' == 0 },
  { expr: "[] == ''", v: [] == '' },
  { expr: "[] == 0", v: [] == 0 },
  { expr: "true == 1", v: true == 1 },
  { expr: "false == '0'", v: false == '0' },
];

for (const c of casos) {
  console.log(`${c.expr} -> ${c.v}`);
}
