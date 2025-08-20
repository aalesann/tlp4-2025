# Introducción a TypeScript

TypeScript es un superconjunto de JavaScript que agrega tipos estáticos opcionales al lenguaje.
Desarrollado por Microsoft en 2012. Es compatible con JavaScript, se compila a JavaScript puro.

Configuración global con npm:
Permite ejecutar TypeScript desde cualquier parte del sistema operativo llamando al comando ```
tsc

```npm
npm install -g typescript
```

Verifica instalación
```ts
tsc --version
```

```tsc``` es el compilador de TypeScript, transpila todo el código escrito a un archivo con código de JavaScript puro.

Ejemplo:
```ts
const message: string = 'Hola Mundo'
```

Convertimos mediante:
```ts
tsc app.js
```

El código resultante es el siguiente:
![[recursos/ts01.png]]

Documentación recomendada ➡️ [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

----------
## Archivo de configuración de TypeScript

Ejecutamos:
```
tsc --init
```

El archivo ```tsconfig.json``` es un archivo de configuración de TypeScript que se encuentra en formato JSON y que debe seguir ese formato para evitar errores.

![[recursos/img-tsconfig.png]]

- ```module``` especifica la forma en que manejarán los módulos en TypeScript.
- ```target``` se utiliza para determinar a qué versión de ECMAScript se transpilará el código TS. Esto es útil para, entre otras cosas, garantizar una mayor compatibilidad.

-------------
## Tipos de Datos en TypeScript

1. ¿Qué son los tipos de datos?
2. Una introducción a los diferentes tipos de datos que existen en TypeScript.
3. Booleanos.
4. Números.
5. Strings.
6. Tipo Any.
7. Arreglos.
8. Tuplas.
9. Enumeraciones
10. Retorno void
11. Null
12. Undefined
# Tipos de Datos en TypeScript

## 1. ¿Qué son los tipos de datos?
En TypeScript, los **tipos de datos** definen el tipo de valores que una variable puede almacenar.  
El tipado ayuda a detectar errores en tiempo de compilación y hace que el código sea más robusto y fácil de mantener.

---

## 2. Introducción a los tipos de datos en TypeScript
TypeScript amplía JavaScript añadiendo tipado estático opcional.  
Entre los principales tipos se incluyen:

- **boolean**  
- **number**  
- **string**  
- **any**  
- **array**  
- **tuple**  
- **enum**  
- **void**  
- **null**  
- **undefined**

---

## 3. Booleanos
Representan valores lógicos: `true` o `false`.

```ts
let esValido: boolean = true;
let estaActivo: boolean = false;
```

## 4. Números

En TypeScript todos los números (enteros y decimales) son del tipo `number`.  
Soporta decimal, hexadecimal, binario y octal.

```ts
let decimal: number = 42;
let hex: number = 0xf00d;
let binario: number = 0b1010;
let octal: number = 0o744;
```

## 5. Strings

Se representan con comillas simples, dobles o _template literals_.
```ts
let nombre: string = "Zeus";
let saludo: string = `Hola, ${nombre}`;
```

## 6. Tipo Any

El tipo `any` desactiva la verificación de tipos, permitiendo asignar cualquier valor.  
Debe usarse con precaución, ya que pierde las ventajas del tipado estático.

```ts
let variable: any = 5;
variable = "ahora soy un string";
variable = true;
```

## 7. Arreglos

Colecciones de valores del mismo tipo.  
Se definen de dos formas:

```ts
let numeros: number[] = [1, 2, 3];
let nombres: Array<string> = ["Ana", "Luis", "Pedro"];
```

## 8. Tuplas

Son arreglos con un **número fijo de elementos** y tipos específicos en cada posición.

```ts
let persona: [string, number];
persona = ["Carlos", 36]; // válido
// persona = [36, "Carlos"]; // error
```

## 9. Enumeraciones

Permiten definir un conjunto de valores con nombre, mejorando la legibilidad.

```ts
enum Color { Rojo, Verde, Azul }
let c: Color = Color.Verde; // valor 1

enum Direccion { Norte = "N", Sur = "S", Este = "E", Oeste = "O" }
let d: Direccion = Direccion.Norte; // "N"
```

## 10. Retorno void

Se utiliza en funciones que **no devuelven un valor**.

```ts
function saludar(): void {
  console.log("Hola mundo");
}
```

## 11. Null

Representa la ausencia **intencional** de un valor.

```ts
let nulo: null = null;
```


## 12. Undefined

Indica que una variable ha sido declarada pero aún **no tiene valor asignado**.

```ts
let indefinido: undefined = undefined;
```


--------------------

# Otros Tipos de Datos en TypeScript (Extendido)

Además de los tipos primitivos, TypeScript incorpora **tipos avanzados** que permiten modelar datos de forma más precisa y segura.

---

## 🔹 1. Union Types
Permiten que una variable acepte **más de un tipo de dato**.

```ts
let id: number | string;

id = 101;       // válido
id = "A102";    // válido
// id = true;   // error

// Ejemplo práctico
function imprimirId(id: number | string): void {
  if (typeof id === "string") {
    console.log("ID en formato texto:", id.toUpperCase());
  } else {
    console.log("ID en formato numérico:", id.toFixed(2));
  }
}

imprimirId(25);
imprimirId("abc123");
```

## 🔹 2. Intersection Types

Combinan múltiples tipos en uno solo.

```ts
type Persona = { nombre: string; edad: number };
type Empleado = { puesto: string; salario: number };

type EmpleadoPersona = Persona & Empleado;

const empleado: EmpleadoPersona = {
  nombre: "Lucía",
  edad: 30,
  puesto: "Desarrolladora",
  salario: 50000
};
```

## 🔹 3. Type Aliases

Permiten crear **alias** para tipos complejos o repetidos.

```ts
type Punto = { x: number; y: number };

function imprimirPunto(p: Punto): void {
  console.log(`Coordenadas: (${p.x}, ${p.y})`);
}

imprimirPunto({ x: 10, y: 20 });
```

## 🔹 4. Interfaces

Las interfaces definen la **forma de un objeto** y se pueden extender.

```ts
interface Usuario {
  id: number;
  nombre: string;
  activo: boolean;
}

interface Admin extends Usuario {
  permisos: string[];
}

const admin: Admin = {
  id: 1,
  nombre: "Zeus",
  activo: true,
  permisos: ["crear", "editar", "borrar"]
};
```

## 🔹 5. Tipos Literales

Definen variables que solo pueden tomar ciertos valores específicos.

```ts
type Direccion = "Norte" | "Sur" | "Este" | "Oeste";

let rumbo: Direccion;

rumbo = "Norte";   // válido
// rumbo = "Arriba"; // error
```

## 🔹 6. Genéricos

Permiten crear **funciones y clases reutilizables** con tipado dinámico.

```ts
function identidad<T>(valor: T): T {
  return valor;
}

console.log(identidad<string>("Hola"));
console.log(identidad<number>(123));

// Ejemplo con array genérico
function obtenerUltimo<T>(arr: T[]): T {
  return arr[arr.length - 1];
}

console.log(obtenerUltimo([1, 2, 3]));       // 3
console.log(obtenerUltimo(["a", "b", "c"])); // "c"
```

## 🔹 7. Nullable y Optional

TypeScript puede controlar si un valor es opcional o nulo.

```ts
function saludar(nombre?: string): void {
  if (nombre) {
    console.log(`Hola, ${nombre}`);
  } else {
    console.log("Hola, invitado");
  }
}

saludar("Ana");
saludar();
```

```ts
type Producto = {
  id: number;
  nombre: string;
  descripcion?: string; // propiedad opcional
};

const prod1: Producto = { id: 1, nombre: "Teclado" };
const prod2: Producto = { id: 2, nombre: "Mouse", descripcion: "Inalámbrico" };
```

## 🔹 8. Tipos de Funciones

TypeScript también tipa parámetros y valores de retorno.

```ts
// Función con parámetros y retorno tipado
function suma(a: number, b: number): number {
  return a + b;
}

// Función como tipo
type Operacion = (x: number, y: number) => number;

const multiplicar: Operacion = (x, y) => x * y;

```

## 📝 Repaso

Con **union, intersection, alias, interfaces, literales y genéricos**, TypeScript permite:
- Modelar datos  complejos.
- Reutilizar código con seguridad de tipos.
- Evitar errores en tiempo de ejecución gracias a comprobaciones en compilación.
* Escribir código más robusto a costa de tiempo de desarrollo.
