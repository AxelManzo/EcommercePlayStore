// clase producto donde defino las propiedades que van a tener los productos a vender en mi sitio

class Producto {
    constructor(id, tipo, marca, fabricante, nombre, precio, img) {
        this.id = id;
        this.tipo = tipo;
        this.marca = marca;
        this.fabricante = fabricante;
        this.nombre = nombre;
        this.precio = parseInt(precio);
        this.img = img;
        this.cuotas12 = parseInt((this.precio * 1.19) / 12);
    }
}