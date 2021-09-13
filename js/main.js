//
let DOMitems = document.querySelector("#items");
let DOMcarrito = document.querySelector("#carrito");
let DOMtotal = document.querySelector("#total");
let DOMbotonVaciar = document.querySelector("#boton-vaciar");
let miLocalStorage = window.localStorage;
let carrito = [];
let total = 0;

// Botones filtros. 
// Ordenando mi array productos segun x
$("#ordenar").change(function (e) {
    var index = e.currentTarget.options.selectedIndex;
    switch (index) {
        case 1:
            productos.sort((a, b) => b.precio - a.precio);
            console.log(productos);
            break;
        case 2:
            productos.sort((a, b) => a.precio - b.precio);
            console.log(productos);
            break;
        case 3:
            productos.sort(function (a, b) {
                if (a.marca < b.marca) {
                    return -1;
                }
            })
            console.log(productos);;
            break;
        default:
            console.log("error");
            break;
    }
    DOMitems.innerHTML = '';
    renderizarProductos();
    add_remove_items_class();
    sustainSelection();
});

function add_remove_items_class() {
    var items = $("#items");
    items.addClass("animate__fadeInUp");
    setTimeout(() => {
        items.removeClass("animate__fadeInUp");
    }, 1000);
}

$("#btnCorreo").click(function () {
    swal({
        title: "En breve recibirás noticias a su correo",
        icon: "success",
        button: "Ok",
    });
});

$("#finalizarCompra").click(function (e) {
    e.preventDefault();
    swal({
        title: "Felicidades por tu compra en Play Store. A gastado $" + total,
        icon: "success",
        button: "Ok",
    });
    vaciarCarrito();
});

//Dibuja todos los productos.
function renderizarProductos() {
    productos.forEach((producto) => {
        // Estructura
        let miNodo = document.createElement("div");
        miNodo.classList.add("card", "col-4", "m-3", "stylewidth", "border", "border-5");
        miNodo.setAttribute("id", producto.id + "_card_producto");
        // Body
        let miNodoCardBody = document.createElement("div");
        miNodoCardBody.classList.add("card-body", "text-center", "cardIn");
        // Titulo
        let miNodoTitle = document.createElement("h5");
        miNodoTitle.classList.add("card-title", "text-dark");
        miNodoTitle.textContent = producto.tipo + " " + producto.marca + " " + producto.fabricante + " " + producto.nombre;
        // Imagen
        let miNodoImagen = document.createElement("img");
        miNodoImagen.classList.add("card-img-top");
        miNodoImagen.setAttribute("src", producto.img);
        //cuotas
        let miNodoCuotas = document.createElement("p");
        miNodoCuotas.classList.add("card-text", "text-dark");
        miNodoCuotas.textContent = "Cuotas de hasta: $" + producto.cuotas12;
        // Precio
        let miNodoPrecio = document.createElement("p");
        miNodoPrecio.classList.add("card-text", "text-dark");
        miNodoPrecio.textContent = "$ " + producto.precio;
        // Boton 
        let miNodoBoton = document.createElement("button");
        miNodoBoton.classList.add("btn", "btn-dark");
        miNodoBoton.textContent = "añadir al carrito";
        miNodoBoton.setAttribute("marcador", producto.id);
        miNodoBoton.addEventListener("click", anyadirProductoAlCarrito);
        // se inserta
        miNodoCardBody.append(miNodoImagen);
        miNodoCardBody.append(miNodoTitle);
        miNodoCardBody.append(miNodoPrecio);
        miNodoCardBody.append(miNodoCuotas);
        miNodoCardBody.append(miNodoBoton);
        miNodo.append(miNodoCardBody);
        DOMitems.append(miNodo);
    });
}

// Añadir producto al carrito
function anyadirProductoAlCarrito(evento) {
    var target = evento.target;
    target.parentElement.parentElement.classList.add("border-warning");
    let marcador = target.getAttribute("marcador");

    productos.forEach(element => {
        if (element.id == marcador) {
            carrito.push(element);
        }
    });
    swal({
        title: "Producto ingresado al carrito",
        icon: "success",
        button: "ok",
    });
    calcularTotal();
    renderizarCarrito();
    guardarCarritoEnLocalStorage();
}

function contar_producto(item) {
    let numeroUnidadesItem = carrito.filter(function (index) {
        return index.id == item.id
    }).length;
    return numeroUnidadesItem;
}

// Productos en el carrito
function renderizarCarrito() {
    DOMcarrito.textContent = "";
    carrito.forEach((item) => {
        //item del carrito
        $('#' + item.id).remove();
        let miNodo = document.createElement("li");
        miNodo.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
        miNodo.id = item.id
        miNodo.innerHTML = '<div class="mx-2"><img class="rounded" src="' + item.img + '"width="70"></div>' + contar_producto(item) + ' x ' + item.nombre + ' X $' + item.precio;
        // Boton de borrar
        let miBoton = document.createElement("button");
        miBoton.classList.add("btn", "btn-outline-danger", "mx-5");
        miBoton.textContent = "X";
        miBoton.style.marginLeft = "1em";
        miBoton.addEventListener("click", borrarItemCarrito);
        miNodo.append(miBoton);
        DOMcarrito.append(miNodo);
    });
}

// Borrar elemento del carrito
function borrarItemCarrito(evento) {
    let id_elemento = evento.target.parentElement.id;
    $.each(carrito, function (indexInArray, valueOfElement) {
        if (valueOfElement != null) {
            if (valueOfElement.id == id_elemento) {
                carrito = carrito.filter(function (value, index, arr) {
                    return value.id != id_elemento;
                });
                $("#" + id_elemento).remove();
            }
        }
    });
    renderizarCarrito();
    guardarCarritoEnLocalStorage();
    calcularTotal();
    removeBorderSelection('#' + id_elemento + '_card_producto');
}

//Calcular precio total 
function calcularTotal() {
    total = 0;
    console.log(carrito);
    carrito.forEach((item) => {
        total = total + item.precio;
    });
    DOMtotal.textContent = total;
}

//resetea el carrito y vuelve a dibujarlo
function vaciarCarrito() {
    $.each(carrito, function (indexInArray, valueOfElement) {
        carrito.splice(valueOfElement, 1);
    });
    renderizarCarrito();
    calcularTotal();
    localStorage.clear();
    removeBorderSelection('.card');
}
// remuevo la seleccion del producto
function removeBorderSelection(selector) {
    $(selector).removeClass("border-warning");
}

function guardarCarritoEnLocalStorage() {
    miLocalStorage.setItem("carrito", JSON.stringify(carrito));
}

function buscar_data_localstorage() {
    var local_datos = JSON.parse(miLocalStorage.getItem("carrito"));
    return local_datos;
}

function cargarCarritoDeLocalStorage() {
    if (miLocalStorage.getItem("carrito") !== null) {
        buscar_data_localstorage().forEach(element => {
            carrito.push(element);
        });
    }
}
// mantener productos seleccionados 
function sustainSelection() {
    $.each(buscar_data_localstorage(), function (indexInArray, valueOfElement) {
        $("#" + valueOfElement.id + "_card_producto").addClass("border-warning");
    });
}
// evento carrito
DOMbotonVaciar.addEventListener("click", vaciarCarrito);

// Inicio
$(document).ready(function () {
    cargarCarritoDeLocalStorage();
    renderizarProductos();
    calcularTotal();
    renderizarCarrito();
    sustainSelection();
    setTimeout(() => {
        $('#ordenar :nth-child(1)').prop('selected', true).trigger('change');
    }, 200);
});