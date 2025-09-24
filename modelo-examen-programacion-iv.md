# 📑 Modelo de Examen – TLP4 IV
**Unidades evaluadas:**  
- Unidad 1: Programación Orientada a Objetos (POO)  
- Unidad 2: TypeScript + POO  
- Unidad 3: Patrones de Diseño (Singleton, Factory Method, Observer, Adapter)  

---

## Sección 1 – Preguntas Teóricas

### 1.1 Programación Orientada a Objetos (POO)
**Pregunta 1 (Opción múltiple):**  
¿Cuál de las siguientes afirmaciones corresponde al **principio de encapsulamiento**?  
- A) Permite que una clase tenga múltiples formas.  
- B) Oculta los detalles internos de una clase y expone solo lo necesario.  
- C) Define una jerarquía de herencia entre clases.  
- D) Permite reutilizar código entre clases no relacionadas.  

---

**Pregunta 2 (Verdadero/Falso):**  
En POO, el polimorfismo permite que una misma operación se comporte de manera diferente según el objeto que la invoque.  
- V  
- F  

---

### 1.2 TypeScript + POO
**Pregunta 3 (Opción múltiple):**  
¿Cuál es una de las ventajas principales de usar TypeScript sobre JavaScript en proyectos orientados a objetos?  
- A) Permite ejecutar el código más rápido que en JavaScript.  
- B) Añade tipado estático y soporte de interfaces/clases.  
- C) Evita completamente los errores en tiempo de ejecución.  
- D) Elimina la necesidad de compilar el código.  

---

**Pregunta 4 (Respuesta breve):**  
Explica en una o dos oraciones qué es una **interfaz en TypeScript** y para qué se utiliza.  

---

### 1.3 Patrones de Diseño
**Pregunta 5 (Opción múltiple):**  
El patrón **Singleton** se utiliza principalmente para:  
- A) Crear familias de objetos relacionados sin especificar sus clases concretas.  
- B) Asegurar que una clase tenga una única instancia accesible globalmente.  
- C) Adaptar una clase existente para que sea compatible con otra interfaz.  
- D) Notificar a múltiples objetos cuando el estado de un objeto cambia.  

---

**Pregunta 6 (Respuesta breve):**  
Menciona una **ventaja y una desventaja** del patrón **Observer**.  

---

**Pregunta 7 (Opción múltiple):**  
El patrón **Adapter** pertenece a la categoría de:  
- A) Creacionales  
- B) Estructurales  
- C) Comportamentales  
- D) Ninguna de las anteriores  

---

## Sección 2 – Ejercicios Prácticos de Código

Cada ejercicio debe resolverse en la computadora del estudiante.  
Una vez resuelto, deberá seleccionar en el formulario la opción correcta, derivada de su solución.  

---

### Ejercicio 1 – Singleton  
Implementa una clase `Inventario` siguiendo el patrón **Singleton**.  
La clase debe:  
- Tener un método `agregarEquipo(nombre: string, tipo: string, estado: string)`  
- Tener un método `listarEquipos(): { nombre: string; tipo: string; estado: string }[]`  

**Pregunta en formulario (opción múltiple):**  
Si ejecutamos el siguiente código:  
```ts
const inv1 = Inventario.obtenerInstancia();
const inv2 = Inventario.obtenerInstancia();
console.log(inv1 === inv2);
```  
¿Qué valor se imprime en consola?  
- A) `true`  
- B) `false`  
- C) `undefined`  
- D) Error en tiempo de ejecución  

---

### Ejercicio 2 – Factory Method  
Crea una clase `EquipoFactory` con un método `crearEquipo` que devuelva diferentes tipos de objetos (`Notebook`, `Desktop`, `Servidor`) según un parámetro de entrada.  

**Pregunta en formulario (opción múltiple):**  
Dada la implementación correcta, si ejecutamos:  
```ts
const factory = new EquipoFactory();
const equipo = factory.crearEquipo("Notebook", "Dell XPS", "16GB", "i7");
console.log(equipo.detalles());
```  
¿Cuál sería la salida esperada?  
- A) "Tipo: Notebook, Nombre: Dell XPS, RAM: 16GB, Procesador: i7"  
- B) "Notebook Dell XPS con 16GB RAM"  
- C) "Equipo genérico creado"  
- D) Error de compilación  

---

### Ejercicio 3 – Observer  
Implementa una clase `Equipo` que permita agregar observadores (`Soporte`) y los notifique cuando su estado cambie.  

**Pregunta en formulario (opción múltiple):**  
Si ejecutamos:  
```ts
const soporte = new Soporte();
const equipo = new Equipo("Notebook HP", "Portátil", "disponible");
equipo.agregarObservador(soporte);
equipo.cambiarEstado("en reparación");
```  
¿Cuál sería el resultado en consola?  
- A) "Soporte notificado: Notebook HP ha cambiado su estado a en reparación"  
- B) "Notebook HP en reparación"  
- C) "Estado cambiado"  
- D) No imprime nada  

---

### Ejercicio 4 – Adapter  
Dispones de una clase `InventarioViejo` con el método `agregarItem(nombre: string)`.  
Debes implementar un **AdaptadorInventario** que permita utilizarla en el nuevo sistema con `agregarEquipo(nombre, tipo, estado)`.  

**Pregunta en formulario (opción múltiple):**  
Dada la implementación correcta, si ejecutamos:  
```ts
const inventarioViejo = new InventarioViejo();
const adaptador = new AdaptadorInventario(inventarioViejo);
adaptador.agregarEquipo("Servidor Dell", "Servidor", "disponible");
console.log(adaptador.listarEquipos());
```  
¿Qué salida se espera?  
- A) [ { nombre: "Servidor Dell", tipo: "Servidor", estado: "disponible" } ]  
- B) [ { nombre: "Servidor Dell" } ]  
- C) []  
- D) Error en tiempo de compilación  
