const express = require("express");
const pug = require("pug");
const app = express();
const traductor = require("node-google-translate-skidz");
const fs = require("fs").promises;

app.use(express.static("public")); //para cargar los archivos estaticos 

app.set("view engine", "pug");
app.set("views", "./vistas");

async function traducir(texto) {
    const traduccion = await traductor({

        text: texto,
        source: "en",
        target: "es",
    });
    return traduccion.translation;

}

app.get("/", async (req, res) => {

    const response = await fetch('https://fakestoreapi.com/products');
    const productos = await response.json();

    // traducir titulo y descripcion
    for (producto of productos) {
        producto.title = await traducir(producto.title);
        producto.description = await traducir(producto.description);
        producto.category = await traducir(producto.category);
    } // aplicar descuento
    let descuentos = await fs.readFile("descuentos.json");
    descuentos = JSON.parse(descuentos);

let desc;
for (producto of productos) {
desc = descuentos.fi((descuento) => {
    return descuentos.id === producto.id;
});
if (desc.length > 0) {
    console.log (desc);
    producto.descuento = desc[0].descuento;
    }
}

    console.log();
    //aplicar descuentos
    res.render("index", { productos: productos });
});




app.listen(3000, () => {
    console.log('servidor corriendo en el puerto 3000');
});

