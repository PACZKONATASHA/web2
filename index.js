const express = require ('express');
const pug = require("pug");
const app = express ();

app.use(express.static('public')); //para cargar los archivos estaticos 

app.set('view engine','pug'); 
app.set('views', './vistas');

app.get ('/', async (req , res) => {
const response = await ( 'https://fakestoreapi.com/products');
const productos = await response.json();
// aplicar descuento
//traducir titulo y descripcion
res.render("index", {productos : productos});

});




app.listen(3000,() => {
console.log('servidor corriendo en el puerto 3000');
});

