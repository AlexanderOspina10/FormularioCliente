const ValidarCliente = ()=>{

    let documento = document.querySelector('#documento');
    let nombres = document.querySelector('#nombres');
    let direccion = document.querySelector('#direccion')
    let telefono = document.querySelector('#telefono')

    if(documento.value.length== 0){
        alert("El documento esta vacio. VERIFIQUE")
    }
    else if(nombres.value.length== 0){
        alert("El nombre esta vacio. VERIFIQUE")
    }
    else if(direccion.value.length== 0){
        alert("La dirección esta vacia. VERIFIQUE")
    }
    else if(telefono.value.length== 0){
        alert("El telefono esta vacio. VERIFIQUE")
    }
    else{
        alert("DATOS ENVIADOS CORRECTAMENTE")
    }
}

const boton = document.querySelector('#btnEnviar')
boton.addEventListener('click', ValidarCliente)

