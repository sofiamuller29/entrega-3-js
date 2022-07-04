function sumarCuotas(cuotaUno, cuotaDos, cuotaTres, cuotaCuatro) {
    let suma = (cuotaUno + cuotaDos + cuotaTres + cuotaCuatro)*1.3
    alert("La suma de sus cuotas es "+ suma)
}

let cuotaUno = parseInt(prompt("Ingrese su primera cuota (recuerde que a cada cuota se le adiciona un 3% de interes)"))
let cuotaDos = parseInt(prompt("Ingrese su segunda cuota (recuerde que a cada cuota se le adiciona un 3% de interes)"))
let cuotaTres = parseInt(prompt("Ingrese su tercera cuota (recuerde que a cada cuota se le adiciona un 3% de interes)"))
let cuotaCuatro = parseInt(prompt("Ingrese su cuarta cuota (recuerde que a cada cuota se le adiciona un 3% de interes)"))

sumarCuotas(cuotaUno, cuotaDos, cuotaTres, cuotaCuatro)



const productos = [
    {nombre: 'Television', precio: 2500},
    {nombre: 'Escritorio', precio: 12500},
]

const resultado = productos.find((producto) => producto.nombre === "Television")


const resultadDos = productos.find((producto) => producto.nombre === "Espejo")

const resultadTres = productos.find((producto) => producto.nombre === "Escritorio")

const resultadoCuatro = productos.find((producto) => producto.nombre === "Escritorio", "Television")


console.log(resultado)
console.log(resultadDos)
console.log(resultadTres)
console.log(resultadoCuatro)


