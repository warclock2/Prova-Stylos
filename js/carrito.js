document.addEventListener("DODMContentLoaded"),function(){

    const menucito=document.querySelector(".menucito")
    const menu=document.querySelector(".menu")
    const enlaces=document.querySelector("a")

    menucito.addEventListener("click",()=>{

    menu.classList.toggle(mostrar_menu)

    })


enlaces.forEach((enlace)=>{
enlace.addEventListener("click",()=>{
    menu.classList.remove(mostrar_menu)

})
    

})

const tarjetaProducto=document.querySelectorAll(".cart__product__item")

tarjetaProducto.forEach(tarjeta=>{
    tarjeta.addEventListener("click", e=>{
        
    })


})


 }
