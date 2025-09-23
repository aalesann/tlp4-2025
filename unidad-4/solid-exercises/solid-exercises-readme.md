# Actividad Práctica: Principios SOLID con TypeScript

## Objetivo

Leyendo el material de **principios SOLID** colocado en el _Classroom_, resolver cada uno de los siguientes ejercicios que describen un problema que **viola un principio SOLID**.  
La tarea es **refactorizarlo para que respete el principio indicado**.

## Ejercicios

### 1. Single Responsibility Principle (SRP)

**Problema:** La clase maneja múltiples responsabilidades a la vez.  
**Refactorizar** para que cada clase tenga _una sola responsabilidad_ (por ejemplo: contenido, impresión y guardado).

```ts
class Report {
  constructor(public title: string, public content: string) {}

  printReport() {
    console.log(`Imprimiendo reporte: ${this.title}`);
  }

  saveToFile() {
    console.log(`Guardando reporte en archivo...`);
  }
}
```

### 2. Open/Closed Principle (OCP)

**Problema:** Cada vez que se agrega un nuevo tipo de descuento hay que modificar la clase.  
**Refactorizar** para que el sistema permita agregar nuevos descuentos sin modificar la clase original.

```ts
class Discount {
  getDiscount(type: string): number {
    if (type === "regular") return 10;
    if (type === "vip") return 20;
    if (type === "student") return 15;
    return 0;
  }
}
```

### 3. Liskov Substitution Principle (LSP)

**Problema:** La subclase no puede sustituir a la clase base sin romper el programa.  
**Refactorizar** para que _Penguin_ pueda usarse en lugar de _Bird_ sin errores.

```ts
class Bird {
  fly() {
    console.log("Volando...");
  }
}

class Penguin extends Bird {
  fly() {
    throw new Error("Los pingüinos no vuelan");
  }
}
```

### 4. Interface Segregation Principle (ISP)

**Problema:** La interfaz obliga a implementar métodos innecesarios.  
**Refactorizar** dividiendo la interfaz en _interfaces más específicas_, de manera que cada clase solo implemente lo que necesita.

```ts
interface Machine {
  print(): void;
  scan(): void;
  fax(): void;
}

class SimplePrinter implements Machine {
  print() {
    console.log("Imprimiendo...");
  }
  scan() {
    throw new Error("No soportado");
  }
  fax() {
    throw new Error("No soportado");
  }
}
```

### 5. Dependency Inversion Principle (DIP)

**Problema:** La clase depende directamente de una implementación concreta.
**Refactorizar** para que la clase _App_ dependa de _una abstracción (interfaz)_ y no de una implementación específica.

```ts
class MySQLDatabase {
  connect() {
    console.log("Conectado a MySQL");
  }
}

class App {
  private db: MySQLDatabase;

  constructor() {
    this.db = new MySQLDatabase();
  }

  start() {
    this.db.connect();
  }
}
```

---

---

## Estructura de carpetas

```
src/
  app.ts
  01-single-responsibility-principle/
    index.ts
    clases/
      Report.ts
      ReportPrinter.ts
      ReportSaver.ts
    interfaces/
      IReport.ts
  02-open-closed-principle/
    index.ts
    clases/
      RegularDiscount.ts
      VipDiscount.ts
      StudentDiscount.ts
      DiscountContext.ts
    interfaces/
      IDiscount.ts
  03-liskov-substitution-principle/
    index.ts
    clases/
      Sparrow.ts
      Penguin.ts
    interfaces/
      IBird.ts
      IFlyingBird.ts
  04-interface-segregation-principle/
    index.ts
    clases/
      SimplePrinter.ts
      MultiFunctionPrinter.ts
    interfaces/
      IPrinter.ts
      IScanner.ts
      IFax.ts
  05-dependency-inversion-principle/
    index.ts
    clases/
      App.ts
      MySQLDatabase.ts
      PostgreSQLDatabase.ts
    interfaces/
      IDatabase.ts
```

---

## Guía por principio

### SRP – separar responsabilidades en `Report`, `ReportPrinter`, `ReportSaver`

### OCP – estrategias de descuentos con `IDiscount`

### LSP – separar `IBird` e `IFlyingBird`

### ISP – interfaces pequeñas (`IPrinter`, `IScanner`, `IFax`)

### DIP – `App` depende de `IDatabase`, no de MySQL directamente

---

## 🚀 Ejecución

```
npm install
npm run dev

npm run demo:srp
npm run demo:ocp
npm run demo:lsp
npm run demo:isp
npm run demo:dip
```

---

## 📋 Criterios de evaluación

- SRP: responsabilidades separadas
- OCP: extensión sin modificación
- LSP: subclases no rompen contrato
- ISP: interfaces específicas
- DIP: depender de abstracciones
- Código modular: carpeta por principio; dentro `index.ts`, `clases/` e `interfaces/`.
- Tipado estricto, sin `any` y correcto en interfaces y clases.
- Indentación clara y nombres descriptivos.
- Un solo punto de entrada `src/app.ts` para ejecutar todos o cada caso por separado.
