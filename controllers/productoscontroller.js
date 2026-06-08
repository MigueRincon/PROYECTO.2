const productos = [
    { id: 1, nombre: 'Laptop', precio: 2500000 },
    { id: 2, nombre: 'Mouse', precio: 45000 },
]

// Controlador: obtener todos los productos
const obtenerTodos = (req, res) => {
    res.status(200).json(productos)
}
// Contolador: crea un producto
const crearProducto = (req, res) => {
    const { nombre, precio } = req.body  // Datos del body
    const nuevo = {
        id: productos.length + 1, // Generar ID
        nombre,
        precio
    }
    productos.push(nuevo)
    res.status(201).json(nuevo) // Responder con el nuevo producto
}

module.exports = { obtenerTodos, crearProducto }