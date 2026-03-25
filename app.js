const express = require('express')
const app = express()
const port = 3000
const path = require('path')


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/contacto", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "contacto.html"));
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`)
})