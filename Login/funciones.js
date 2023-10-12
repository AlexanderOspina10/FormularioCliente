const validarUsuario = () => {
    let usuario = document.getElementById('usuario').value;
    let contraseña = document.getElementById('contraseña').value;

    if (usuario === 'Alexander' && contraseña === '1234') {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'INICIO SESIÓN',
            showConfirmButton: false,
            timer: 1500
          })
    } else {
        if (usuario === '') {
            alert('El campo usuario está vacío. Verifique.');
        } else if (usuario !== 'Alexander') {
            alert('El usuario no está registrado');
        }

        if (contraseña === '') {
            alert('El campo contraseña no debe estar vacío');
        } else if (contraseña !== '1234') {
            alert('Ingresaste una contraseña incorrecta');
        }
    }
};

const boton = document.querySelector('#btnEnviar');
boton.addEventListener('click', validarUsuario);