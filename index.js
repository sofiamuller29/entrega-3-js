const listaProductos = [
    {
        id: 1,
        nombre: "Crema",
        precioCompra: "750",
        precioVenta: "1000",
        cantidad: 2,
    },
    {
        id: 2,
        nombre: "Jabon",
        precioCompra: "960",
        precioVenta: "1100",
        cantidad: 3,
    },
    {
        id: 3,
        nombre: "Shampoo",
        precioCompra: "980",
        precioVenta: "1250",
        cantidad: 5,
    },
    {
        id: 4,
        nombre: "Acondicionador",
        precioCompra: "980",
        precioVenta: "1250",
        cantidad: 50,
    }
];

let contenedorProductos = document.getElementById("contenedor-productos")

for(const producto of listaProductos){
    let columna = document.createElement("div")
    columna.className = "col-md-4 mt-3"
    columna.id = `columna-${producto.id}`
    columna.innerHTML = `
        <div class="card">
            <div class="card-body">
                <p class="card-text"> Nombre: 
                    <b>${producto.nombre}</b>
                <p/>
                
                <p class="card-text"> Precio compra: 
                    <b>${producto.precioCompra}</b>
                <p/>

                <p class="card-text"> Precio Venta: 
                    <b>${producto.precioVenta}</b>
                <p/>

                <p class="card-text"> Cantidad: 
                    <b>${producto.cantidad}</b>
                <p/>
            </div>
        </div>
    `

    contenedorProductos.append(columna)
}


let columnaBorrar = document.getElementById ("columna-1")

columnaBorrar.remove



function sumarCuotas(cuotaUno, cuotaDos, cuotaTres, cuotaCuatro) {
    let suma = (cuotaUno + cuotaDos + cuotaTres + cuotaCuatro)*1.3
    alert("La suma de sus compra es "+ suma)
}

let cuotaUno = parseInt(prompt("Ingrese el precio de su primer producto para calcular opcion de pago (recuerde que a cada cuota se le adiciona un 3% de interes) - Crema ($1000), Jabon ($1100), Shampoo ($1250), Acondicionador ($1250)"))
let cuotaDos = parseInt(prompt("Ingrese el precio de su segundo producto para calcular opcion de pago (recuerde que a cada cuota se le adiciona un 3% de interes)"))
let cuotaTres = parseInt(prompt("Ingrese el precio de su tercer producto para calcular opcion de pago (recuerde que a cada cuota se le adiciona un 3% de interes)"))
let cuotaCuatro = parseInt(prompt("Ingrese el precio de su primer producto para calcular opcion de pago (recuerde que a cada cuota se le adiciona un 3% de interes)"))

sumarCuotas(cuotaUno, cuotaDos, cuotaTres, cuotaCuatro)



const productos = [
    {nombre: 'Crema', precio: 1000},
    {nombre: 'Jabon', precio: 1100},
    {nombre: 'Shampoo', precio: 1250},
    {nombre: 'Acondicionador', precio: 1250},
]

const resultado = productos.find((producto) => producto.nombre === "Crema")


const resultadDos = productos.find((producto) => producto.nombre === "Jabon")

const resultadTres = productos.find((producto) => producto.nombre === "Shampoo")

const resultadoCuatro = productos.find((producto) => producto.nombre === "Acondicionador")


console.log(resultado)
console.log(resultadDos)
console.log(resultadTres)
console.log(resultadoCuatro)


