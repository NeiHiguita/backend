const { Schema, model } = require('mongoose');

const productoSchema = new Schema({
    Fecha: String,
    Total: String,
    Estado: String,
    Productos: [{
        Producto: String,
        Cantidad: Number,
        Subtotal: Number
    }]
});

module.exports = model('Producto', productoSchema);
