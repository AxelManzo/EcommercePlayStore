//array de mis productos
const productos = [];

// función que por parametro agrega los objeto a el array `productos`.
const nuevoProducto = (id, tipo, marca, fabricante, nombre, precio, img) => {
    productos.push(new Producto(id, tipo, marca, fabricante, nombre, precio, img));
}

// recupero data.json
$.getJSON("data.json", function (json, estado) {

    if (estado === 'success') {
        json.forEach(element => {
            nuevoProducto(element.id, element.tipo, element.marca, element.fabricante, element.nombre, element.precio, element.img);
        });
    }
});

/* escribi los productos en data.json

nuevoProducto("1", "Placa de Video", "GeForce", "ASUS", "GT 1030 2GB GDDR5", 15000, "img/placasDeVideo/ASUS_GeForce_GT_1030_2GB_GDDR5.jpg");
nuevoProducto("2", "Placa de Video", "GeForce", "MSI", "GTX 1050 Ti", 66000, "img/placasDeVideo/GeForce_MSI_GTX_1050_Ti_4GB_GDDR5.jpg");
nuevoProducto("3", "Placa de Video", "GeForce", "MSI", "GTX 1650 4GB GDDR6", 76900, "img/placasDeVideo/MSI_GeForce_GTX_1650_4GB_GDDR6.jpg");
nuevoProducto("4", "Placa de Video", "GeForce", "ASUS", "GTX 1660 6GB GDDR6", 105000, "img/placasDeVideo/ASUS_GeForce_GTX1660_6GB_GDDR6.jpg");
nuevoProducto("5", "Placa de Video", "GeForce", "Zotac", "RTX 2060 6GB GDDR6", 141500, "img/placasDeVideo/Zotac_GeForce_RTX_2060_6GB_GDDR6.jpg");
nuevoProducto("6", "Placa de Video", "GeForce", "Zotac", "RTX 3060 12GB GDDR6", 185000, "img/placasDeVideo/Zotac_RTX 3060_12GB_GDDR6.jpg");
nuevoProducto("7", "Placa de Video", "GeForce", "PNY", "RTX 3070 8GB GDDR6", 370000, "img/placasDeVideo/PNY_GeForce_RTX_3070_8GB_GDDR6.jpg");
nuevoProducto("8", "Placa de Video", "GeForce", "MSI", "RTX 3080 10GB GDDR6", 505000, "img/placasDeVideo/MSI_GeForce_RTX 3080_10GB_GDDR6.jpg");
nuevoProducto("9", "Placa de Video", "Radeon AMD", "XFX", "RX 550 4GB DDR5", 46500, "img/placasDeVideo/XFX_Radeon_RX_550_4GB_DDR5.jpg");
nuevoProducto("10", "Placa de Video", "Radeon AMD", "MSI", "RX 5500 XT 4GB GDDR6", 66500, "img/placasDeVideo/MSI_Radeon_RX_5500_XT_4GB_GDDR6.jpg");
nuevoProducto("11", "Placa de Video", "Radeon AMD", "ASUS", "RX 570 8GB GDDR5", 90500, "img/placasDeVideo/ASUS_Radeon_RX_570_8GB_GDDR5.jpg");
nuevoProducto("12", "Placa de Video", "Radeon AMD", "Asrock", "RX 580 8GB OC", 115500, "img/placasDeVideo/Asrock_Radeon_RX_580_8GB_OC.jpg");
nuevoProducto("13", "Placa de Video", "Radeon AMD", "Asrock", "RX 5600 XT 6GB GDDR6", 155000, "img/placasDeVideo/Asrock_Radeon_RX_5600_XT_6GB_GDDR6.jpg");
nuevoProducto("14", "Placa de Video", "Radeon AMD", "XFX", "RX 6700 XT 12GB GDDR6", 193000, "img/placasDeVideo/XFX_Radeon_RX_6700_XT_BLACK_12GB_GDDR6.jpg");
nuevoProducto("15", "Placa de Video", "Radeon AMD", "ASUS", "RX 6800 16GB GDDR6 OC", 345000, "img/placasDeVideo/ASUS_Radeon_RX_6800_XT_16GB_GDDR6.jpg");
nuevoProducto("16", "Placa de Video", "Radeon AMD", "MSI", "RX 6900 XT 16GB GDDR6", 340000, "img/placasDeVideo/MSI_Radeon_RX_6900_XT_16GB_GDDR6.jpg");
*/