# Chuleta: `==` vs `===` en JavaScript

| Expresión             | `==`   | `===`  | Nota |
|----------------------|--------|--------|------|
| `1 == '1'`           | true   | false  | Coerción de `'1'` a número. |
| `0 == false`         | true   | false  | `false` → `0`. |
| `null == undefined`  | true   | false  | Casados en `==`. |
| `" \t\n" == 0`     | true   | false  | Espacios → `0`. |
| `'30' == 30`         | true   | false  | String a número. |
| `true == 1`          | true   | false  | `true` → `1`. |
| `false == '0'`       | true   | false  | `'0'` → `0`. |
| `[] == ''`           | true   | false  | `[]` → `''` → `0`. |
| `[] == 0`            | true   | false  | `[]` → `0`. |
| `{} == '[object Object]'` | false | false | No iguala. |

## Regla de oro
- Prefiere **`===`** y **`!==`**.
- Usa `==` solo cuando entiendas y necesites la coerción.
