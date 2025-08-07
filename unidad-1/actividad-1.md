# 💻 Práctica: Programación Orientada a Objetos en JavaScript

## ✅ 1. Función constructora: `CuentaBancaria`

Creá una función constructora llamada `CuentaBancaria` que reciba:

- `titular` (string)
- `saldoInicial` (number)

Agregá al **prototype** los siguientes métodos:

- `depositar(monto)` → Suma el monto al saldo.
- `extraer(monto)` → Resta el monto si hay suficiente saldo. Si no, mostrar `"Fondos insuficientes"`.
- `consultarSaldo()` → Muestra el saldo actual con un mensaje como `"Saldo actual: $1000"`.

---

## ✅ 2. Clase: `CuentaBancaria` con `get` y `set`

Reimplementá la clase `CuentaBancaria` anterior, pero usando la sintaxis `class`.

**Requisitos:**

- El saldo debe ser una **propiedad privada simulada**.
- Usá un **getter y setter** para acceder y modificar el saldo.
- No se permite acceder directamente a `saldo` desde afuera
- Aplicar validaciones que el `saldo` no pueda ser negativo.

---

## ✅ 3. Agregar método a `String.prototype`

Modificá el prototype de `String` para agregar un nuevo método:

### `concatenarPalabra(palabra)`

Este método debe:

- Agregar la palabra recibida al final del string actual,
- Separarla con un espacio,
- Retornar el nuevo string (sin modificar el original).

⚠️ No usar `.concat()`. Usar template strings.

---

## ✅ 4. Sobreescribir `toUpperCase`

Modificá temporalmente el método `toUpperCase` de `String.prototype` para que al utilizarlo:

- Retorne siempre el string: `"ESTO ESTÁ PROHIBIDO"`.

---

## ✅ 5. Análisis final (teórico)

**Responder lo siguiente:**

- ¿Qué diferencias, ventajas y desventajas encontrás entre usar funciones constructoras con `prototype` y usar `class`?
- ¿Cuáles son las ventajas de usar `getters` y `setters`?
- ¿Qué problemas pueden surgir al modificar prototipos nativos como `String`?
- Teniendo en cuenta un objeto `personPrototype` que contiene un método `greet`, ¿qué diferencias encontrás entre asignar ese método directamente al `prototype` de una función constructora o usar `Object.assign`?

---
