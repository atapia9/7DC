// Challenge7Days:D2
// Día 2: Variables y personalización

// Preguntar datos al usuario
const nombre = prompt("¿Cuál es tu nombre?");
const edad = prompt("¿Cuántos años tienes?");
const lenguaje = prompt("¿Qué lenguaje de programación estás estudiando?");

// Mensaje inicial
alert(`Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}!`);

// Pregunta extra (opcional)
const respuesta = prompt(`¿Te gusta estudiar ${lenguaje}? Responde con el número 1 para SÍ o 2 para NO.`);

if (respuesta == 1) {
  alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito.");
} 

if (respuesta == 2) {
  alert("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?");
}
