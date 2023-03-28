const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const boton = document.querySelector(".boton");
const resultado = document.querySelector(".resultado")
const boton2 = document.querySelector(".botonOP")

function onClick(){

    const nombrecompleto = nombre.value + ' ' + apellido.value ;
    console.log("Soy "+ nombrecompleto);
    resultado.innerText = nombrecompleto;
}

function onClick2(event){
    event.preventDefault();
    const nombrecompleto = nombre.value + ' ' + apellido.value ;
    console.log("Soy "+ nombrecompleto);
    resultado.innerText = nombrecompleto;
}

boton2.addEventListener('click',onClick2)