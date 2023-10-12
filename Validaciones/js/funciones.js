const ValidarCliente = ()=>{

    let documento = document.querySelector('#documento');
    let nombres = document.querySelector('#nombres');
    let direccion = document.querySelector('#direccion')
    let telefono = document.querySelector('#telefono')

    if(documento.value.length== 0){
        // alert("El documento esta vacio. VERIFIQUE")
        Swal.fire(
            'El documento esta vacio. VERIFIQUE',
            '',
            'error'
          )
    }
    else if(nombres.value.length== 0){
         // alert("El documento esta vacio. VERIFIQUE")
        Swal.fire(
            'El nombre esta vacio. VERIFIQUE',
            '',
            'error'
          )
    }
    else if(direccion.value.length== 0){
         // alert("El documento esta vacio. VERIFIQUE")
        Swal.fire(
            'la direccion esta vacia. VERIFIQUE',
            '',
            'error'
          )
    }
    else if(telefono.value.length== 0){
         // alert("El documento esta vacio. VERIFIQUE")
        Swal.fire(
            'El telefono esta vacio. VERIFIQUE',
            '',
            'error'
          )
    }
    else{
        // alert("DATOS ENVIADOS CORRECTAMENTE")
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Datos enviados correctamente',
            showConfirmButton: false,
            timer: 2500
          })
    }
}

const boton = document.querySelector('#btnEnviar')
boton.addEventListener('click', ValidarCliente)

