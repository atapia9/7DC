# Lección: Igualdad en JavaScript — Día 1 (#7DaysOfCode)

## Objetivo
Comprender cómo funcionan `==` y `===`, reconocer casos de coerción implícita y aplicar buenas prácticas para evitar bugs.

## Conceptos clave
- `==` (igualdad laxa): compara valores tras intentar convertir tipos.
- `===` (igualdad estricta): compara **valor y tipo** sin conversiones.
- `!=` y `!==` siguen la misma lógica para desigualdad.

## Ejercicios
1) **Predicción de resultados**: antes de ejecutar `src/01-equality-basics.js`, escribe qué crees que imprime cada expresión.
2) **Explica la coerción**: ejecuta `src/02-weird-coercions.js` y redacta **por qué** cada caso resulta `true` con `==`.
3) **Refactor**: en `src/03-refactor-challenge.js`, crea funciones utilitarias para reportar:
   - “mismo valor y mismo tipo”
   - “mismo valor, pero tipos diferentes”
   - “no tienen el mismo valor”
4) **Pruebas**: corre `npm test`. Agrega 3 casos extra (por ejemplo `[] == false`, `new Number(1) == 1`, `Object.is(NaN, NaN)`).

## Tips de calidad
- Prefiere `===` / `!==` en lógica de negocio.
- Normaliza entrada de usuario (parsea números con `Number()`).
- Evita comparaciones ambiguas; sé explícito con tipos.

## Extra
- `Object.is(NaN, NaN)` es `true` (a diferencia de `NaN === NaN`, que es `false`).
- `Object.is(+0, -0)` es `false`, mientras `+0 === -0` es `true`.
