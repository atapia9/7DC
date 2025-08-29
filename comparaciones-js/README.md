# 7DaysOfCode · Día 1 — Igualdad en JavaScript (`==` vs `===`)

Este paquete es una lección lista para subir a GitHub. Incluye teoría, ejemplos, ejercicios y pruebas automatizadas usando el runner nativo de Node.js.

## Estructura

```
comparaciones-js/
├─ src/
│  ├─ 01-equality-basics.js
│  ├─ 02-weird-coercions.js
│  └─ 03-refactor-challenge.js
├─ tests/
│  └─ equality.test.js
├─ assets/
│  └─ cheat-sheet.md
├─ package.json
├─ .gitignore
├─ LICENSE
└─ README.md
```

## Requisitos

- Node.js 18 o superior (para usar `node --test`).
- Opcional: nvm para gestionar versiones.

## Uso rápido

```bash
# 1) Instalar dependencias (no hay externas, pero es buena práctica)
npm install

# 2) Ejecutar los ejemplos manualmente
node src/01-equality-basics.js
node src/02-weird-coercions.js
node src/03-refactor-challenge.js

# 3) Correr pruebas automatizadas
npm test
```

## ¿Qué aprenderás?

- Diferencia entre `==` (igualdad laxa) y `===` (igualdad estricta).
- Casos famosos de coerción que sorprenden a principiantes.
- Buenas prácticas para evitar bugs de comparación.
- Cómo validar con pruebas que tu código hace lo que esperas.

## Checklist para el repositorio

- [x] README con instrucciones claras
- [x] Ejemplos comentados
- [x] Pruebas automatizadas
- [x] Chuleta (cheat sheet) para consulta rápida
- [x] Licencia MIT
- [x] Estructura lista para GitHub

## Sube a GitHub

1. Crea un nuevo repositorio (público o privado).
2. Copia los archivos de esta carpeta.
3. Haz commit y push:
   ```bash
   git init
   git add .
   git commit -m "feat: lección Día 1 #7DaysOfCode igualdad JS"
   git branch -M main
   git remote add origin <URL-de-tu-repo>
   git push -u origin main
   ```

¡Feliz código y que no te sorprenda la coerción! 🚀
