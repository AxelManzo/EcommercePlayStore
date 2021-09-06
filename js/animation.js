// //Img de los productos
// $(".card-img-top").hover("opacity","1.0")
// ("transition"," 0.5s")
// ("transform: scale","1.1");

//h1
$("h1").css("color", "#FDC203");

//animacion en el navbar al principio y cada refresh
$(".slideNav").css("color", "#FDC203")
        .slideUp(1500)
        .slideDown(1500);

//animacion cada vez que se hace click en boton del carrito
let carrito_slide = $("#carritoSlide");
carrito_slide.click(function(evento){
        carrito_slide.animate({
                paddingRight: "+=1em",
                paddingLeft: "+=1em"
        
        })
        .delay(1000)
        .animate({
                paddingRight: "-=1em",
                paddingLeft: "-=1em"
        
        })
});

