requestAnimationFrame('dotenv').config()
const http = require('http')

function requestController(){
    console.log('Bienvenido al curso')
}

const server = http.createServer(http.request)
const PORT = process.env.PORT

server.listen(PORT, function(){
    console.log("Aplicacion corriendo en: " + PORT)
})