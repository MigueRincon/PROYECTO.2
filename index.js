/*--Ejemplo de API REST con Express mas sencilla--

const express = require('express') //1. Importa Express
const app = express() //2. Crea la aplicacion

app.get('/', (req,res) => {  //3. Definir endpoint Get /
    res.json({mensaje: '¡Hola!'}) //4. Responder con JSON
})

app.listen(3000, () => {  //5. Encender en puerto 3000
    console.log('API en puerto 3000')
})
*/

//Endpoints en Express
const express = require('express')
const productosRoutes = require('./routes/productosroutes') //Importar rutas de productos
const usuariosRoutes = require('./routes/usuariosRoutes')

const app = express()
app.use(express.json()) //Middleware para parsear JSON

// Montar las rutas bajo el prefijo /productos
app.use('/productos', productosRoutes)
app.use('/usuarios', usuariosRoutes)

/*--Ejemplo de endpoints adicionales--
// Endpoint 1: raiz
app.get('/', (req, res) => {
    res.json({ status: 'ok' })
})

// Endpoint 2: lista de usuarios
app.get('/usuarios', (req, res) => {
    res.json([
        { id: 1, nombre: 'Ana' },
        { id: 2, nombre: 'Luis' }
    ])
})
    */
//  Endpoint 3: usuario por ID (parametro dinamico)
app.get('/usuarios/:id', (req, res) => {
    const { id } = req.params  //Extraer :id de la URL
    res.json({ id: parseInt(id), nombre: 'Ana' })
})

app.listen(3000, () => console.log('🚀 Servidor en :3000'))