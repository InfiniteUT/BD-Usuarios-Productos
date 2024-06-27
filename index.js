const express = require("express");
const bodyParser = require("body-parser");
const usuarioRutas = require("./routes/usuariosRutas");
const productoRutas = require("./routes/productosRutas");  // Import product routes

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set("view engine", "ejs");
app.use(express.static("web"));

app.use("/", usuarioRutas);
app.use("/", productoRutas);  // Use product routes

app.get("/", (req, res) => {
    res.redirect("/usuarios");
});

const port=process.env.port || 3000;
app .listen(port,()=>{
    console.log("Servidor en http://127.0.0.1:"+port);
});
