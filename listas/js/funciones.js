var documento1 = [1010, 1011, 1020, 1030,1957,5550]
var documento2 = [1011, 1012, 1021, 1031,1958,5551]
var documento3 =  [1012, 1013, 1022, 1032,1959,5552]
var documento4 = [1013, 1014, 1023, 1033,1956,5553]


const buscarDocumento1 = async(dato) => {
    let encontrado = false;
    let documentoEncontrado = '';

    for (let i = 0; i < documento1.length; i++){
        if (dato == documento1[i]) {
            encontrado = true;
            documentoEncontrado = documento1[i];
        }
    }
    return new Promise((resolve, reject) => setTimeout(() =>{
        if (encontrado){
            resolve('Documento encontrado: '+documentoEncontrado+' en la lista 1');
        }
        else{
            reject('Documento no encontrado en la lista 1')
        }
    }, 1000)
    )
}

const buscarDocumento2 = async(dato) => {
    let encontrado = false;
    let documentoEncontrado = '';

    for (let i = 0; i < documento2.length; i++){
        if (dato == documento2[i]) {
            encontrado = true;
            documentoEncontrado = documento2[i];
        }
    }
    return new Promise((resolve, reject) => setTimeout(() =>{
        if (encontrado){
            resolve('Documento encontrado: '+documentoEncontrado+' en la lista 2');
        }
        else{
            reject('Documento no encontrado en la lista 2')
        }
    }, 2000)
    )
}

const buscarDocumento3 = async(dato) => {
    let encontrado = false;
    let documentoEncontrado = '';

    for (let i = 0; i < documento3.length; i++){
        if (dato == documento3[i]) {
            encontrado = true;
            documentoEncontrado = documento3[i];
        }
    }
    return new Promise((resolve, reject) => setTimeout(() =>{
        if (encontrado){
            resolve('Documento encontrado: '+documentoEncontrado+' en la lista 3');
        }
        else{
            reject('Documento no encontrado en la lista 3')
        }
    }, 3000)
    )
}

const buscarDocumento4 = async(dato) => {
    let encontrado = false;
    let documentoEncontrado = '';

    for (let i = 0; i < documento4.length; i++){
        if (dato == documento4[i]) {
            encontrado = true;
            documentoEncontrado = documento4[i];
        }
    }
    return new Promise((resolve, reject) => setTimeout(() =>{
        if (encontrado){
            resolve('Documento encontrado: '+documentoEncontrado+' en la lista 4');
        }
        else{
            reject('Documento no encontrado en la lista 4')
        }
    }, 4000)
    )
}


document.querySelector('#btnBuscar')
.addEventListener('click', () => buscarDocumento1(document.getElementById('dato').value)


.then(mensaje => alert(mensaje))
.catch(error => alert(error))

)

document.querySelector('#btnBuscar')
.addEventListener('click', () => buscarDocumento2(document.getElementById('dato').value)

.then(mensaje => alert(mensaje))
.catch(error => alert(error))

)

document.querySelector('#btnBuscar')
.addEventListener('click', () => buscarDocumento3(document.getElementById('dato').value)

.then(mensaje => alert(mensaje))
.catch(error => alert(error))

)

document.querySelector('#btnBuscar')
.addEventListener('click', () => buscarDocumento4(document.getElementById('dato').value)

.then(mensaje => alert(mensaje))
.catch(error => alert(error))

)