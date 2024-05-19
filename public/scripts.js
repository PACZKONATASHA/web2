const btnsAgrgar = document.querySelectorAll(".btn-agregar");
btnsAgregar.forEach((btn) => {
    btn.addEventListener("click", (e) => {
 const carrito = localStorage.getItem("carrito");
 carrito.push({id: e.target.id, cantidad: 1});
 localStorage.setItem("carrito", carrito);
});
});
