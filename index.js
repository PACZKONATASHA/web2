const express = require ('express');
const app = express ();

app.use(express.static('public')); //para cargar los archivos estaticos 

app.set('view engine','pug'); 
app.set('views', './views');

app.listen(3000,() => {
console.log('servidor corriendo en el puerto 3000');
});