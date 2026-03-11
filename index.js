const express = require('express')
const app = express()
const port = 3000
//eso al lado del slash es la ruta el link el http://localhost:3000/prueba
app.get('/prueba',(req, res) => {
    res.send('!Hola david!')
})

app.listen(port, () => {

console.log('La aplicaion de esta ejectando en el puerto ' + port)

})