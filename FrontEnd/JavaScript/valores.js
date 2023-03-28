
"VALORES NO PRIMITIVOS - TIPOS OBJETOS"

"ARRAY:"
[1,2,4]

"VALOR TIPO OBJETO:"

{nomnbre: "Diego"}

function saludar(estudiante){
    console.log("hola ",estudiante);
}

saludar("Michelle");

function funcion(nombre,lastname,nickname){
    let completeName = nombre + lastname;
    return console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
}

const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}

function if_f(tipoDeSuscripcion){
    if (tipoDeSuscripcion=="Free"){
        console.log("Solo puedes tomar los cursos gratis");
    } else if(tipoDeSuscripcion=="Basic"){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    }else if(tipoDeSuscripcion=="Expert"){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    }else if(tipoDeSuscripcion=="ExpertPlus"){
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
    }
}

function suma(){
    let respuesta;
    do {
        respuesta = prompt('Cuanto es 2+2: ');}
    while (respuesta != 4);
    
}

function first(array){
    for (var elemento of array){
        console.log(elemento);
    }
}

var suscripciones = {
    "Free" : "Solo puedes tomar los cursos gratis",
    "Basic" : "Puedes tomar casi todos los cursos de Platzi durante un mes",
    "Expert" : "Puedes tomar casi todos los cursos de Platzi durante un año",
} 

function if_2(tipoDeSuscripcion){
    let tipo =  Object.keys(suscripciones);
    for (let i of tipo){
        if (tipoDeSuscripcion == i){
            console.log(suscripciones[i]);
        }
        console.warn("No existe");
    }
}