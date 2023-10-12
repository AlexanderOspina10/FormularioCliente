proceso1 = async() => {
    let suma1 = 0;
    return new Promise ( (resolve, reject) => setTimeout(() => {
        for(let i=0; i<=5000; i++)
        {
            suma1+=i;
        }
        resolve(`Proceso 1: La suma es ${suma1}`)

    },5000)//RETRASO EN SEGUNDOS
    )
}




proceso2 = async() => {
    let suma2 = 0;
    return new Promise ( (resolve, reject) => setTimeout(() => {
        for(let i=0; i<=20000; i++)
        {
            suma2+=i;
        }
        resolve(`Proceso 2: La suma es ${suma2}`)

    },8000)//RETRASO EN SEGUNDOS
    )
}


proceso3 = async() => {
    let suma3 = 0;
    return new Promise ( (resolve, reject) => setTimeout(() => {
        for(let i=0; i<=1000; i++)
        {
            suma3+=i;
        }
        resolve(`Procesos 3: La suma es ${suma3}`)

    },3000)//RETRASO EN SEGUNDOS
    )
}

document.querySelector('#btnBuscar')
.addEventListener('click', () => {

proceso1().then(mensaje => alert(mensaje))
proceso2().then(mensaje => alert(mensaje))
proceso3().then(mensaje => alert(mensaje))

})

// email:
// dilopezz@setInterval.edu.co

// Convertir el codigo anterior a funciones sincronicas sin promesas y sin el async

// Dadas 4 listas de documentos implementar una funcion async por cada lista para buscar un documento. 
// si el documento está devolver "Encontrado".
// Imprimir el mensaje

// compratir un repositorio de git con los talleres de repaso al email