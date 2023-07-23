//arreglo de MENU - se precargaron algunos objetos al arreglo.


    let menu = [
        {nombre: 'pan',
            precio: '300',
            categoria: 'PANADERIA',
            descripcion: 'pan de horno',
            id: '1001'
        },
        {   nombre: 'leche chocolatada', 
            precio: '350', 
            categoria: 'CAFETERIA',
            descripcion: 'leche con cacao',
            id: '1002'
        },
        {   nombre: 'cafe',
            precio: '500', 
            categoria: 'CAFETERIA', 
            descripcion: 'cafe en grano', 
            id: '1003'
        },
        {   nombre: 'medialunas', 
            precio: '500', 
            categoria: 'PANADERIA', 
            descripcion: 'medialunas dulces', 
            id: '1004'
        },
        {   nombre: 'te', 
            precio: '200', 
            categoria: 'CAFETERIA', 
            descripcion: 'te de saquito', 
            id: '1005'
        },
        {   nombre: 'gaseosa', 
            precio: '350', 
            categoria: 'BEBIDA', 
            descripcion: 'naranja o lima limon', 
            id: '1006'
        },
        {   nombre: 'empanada', 
            precio: '200', 
            categoria: 'COMIDA', 
            descripcion: 'empanada de carne al horno', 
            id: '1007'
        },
    ];

    

//  formulario crear item

const user = document.getElementById('nombre');
const precio = document.getElementById('precio');
const categoria = document.getElementById('categoria');
const descripcion = document.getElementById('descripcion');

const btnCargar = document.getElementById('cargar');

const form = document.getElementById('loginForm')

const finalizar = document.getElementById('finalizar');
const carritoHtml = document.getElementById('carrito');
let id = 1008; 
btnCargar.addEventListener('click', (e) => {
    e.preventDefault();
    const input = {
        nombre: nombre.value,
        precio: parseFloat(precio.value),
        categoria: categoria.value,
        descripcion: descripcion.value,
        id: id,
    }
    
    menu.push(input);
    id++;

    
        swal({
            title: 'Carga exitosa',
            text: `${input.nombre}, $ ${input.precio}`,
            })
        console.log(input);
    


})


function limpiarFormulario() {
    document.getElementById("formulario").reset();
}

function agregarLocalStorage (producto){
    if ( localStorage.getItem('carrito')) {
        prodEnCarrito = JSON.parse(localStorage.getItem('carrito'));
        prodEnCarrito.push(producto)
    } else {
        prodEnCarrito.push(producto)

    }
    localStorage.setItem( 'carrito' , JSON.stringify(prodEnCarrito));
}



function agregarCarrito (index) {
    console.log(menu[index])
    const producto = menu[index];
    let prodEnCarrito = [];
    agregarLocalStorage (producto)

    swal({
        title: 'Producto agragado',
        text: `${producto.nombre}`,
        })
    
}



// ver la lista de productos.

const btnMenu = document.getElementById('btn_menu');
const verLista = document.querySelector('#listaMenu');

btnMenu.addEventListener('click', (e) => { 

    verLista.innerHTML = "";

    

    for (let i = 0; i < menu.length; i++) {
        const item = menu[i];
        let card = document.createElement('div')
        card.innerHTML = `
            <h2>Producto: ${item.nombre}</h2>
            <h3>Precio: $: ${item.precio}</h3>
            <p> Descripcion: ${item.descripcion}</p>
            <p> Cod. : ${item.id}</p>
            <button id=${item.id} onclick="agregarCarrito(${i})" class="btnComprar"> COMPRAR </button>
            `
        card.style.border = '1px solid black'
        card.style.padding = '15px'
        card.style.margin = '15px'
        verLista.appendChild(card)


    }
    return menu;

})



finalizar.addEventListener('click', (e) => {
    let carrito = [];
    
    if ( localStorage.getItem('carrito')) {
        carrito = JSON.parse(localStorage.getItem('carrito'));
    }
    for (const item of carrito){
        let card = document.createElement('div')
        card.innerHTML = 
        `
        <h2>Producto: ${item.nombre}</h2>
        <h3>Precio: $: ${item.precio}</h3>
        <p> Cod. : ${item.id}</p>
        `
        carritoHtml.appendChild(card)

    }
    



});
