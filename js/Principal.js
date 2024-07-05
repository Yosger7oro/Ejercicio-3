/*3. Conociendo la edad de varias personas, indicar la edad promedio. 
Ej.
Edades de las personas es: 15, 14, 19, 20, 16 y 18
Salida:
La edad promedio es 17 */

import CL_Persona from "./CL_Persona.js";
import CL_Personas from "./CL_Personas.js";

let person1= new CL_Persona(15);
let person2= new CL_Persona(14);
let person3= new CL_Persona(19);
let person4= new CL_Persona(20);
let person5= new CL_Persona(16);
let person6= new CL_Persona(18);

let personas= new CL_Personas();

personas.prosesarpersona(person1);
personas.prosesarpersona(person2);
personas.prosesarpersona(person3);
personas.prosesarpersona(person4);
personas.prosesarpersona(person5);
personas.prosesarpersona(person6);

let salida=document.getElementById("salida");
salida.innerHTML="resultado"
salida.innerHTML+="<br> El promedio de edades es: "+personas.promedad();

