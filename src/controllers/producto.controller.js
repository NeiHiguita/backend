const productoService = require('../services/producto.service');

const agregarproductos = async (req, res) => {
    try {
        console.log(req.body);
        const productoGuardado = await productoService.guardarProducto(req.body);
        res.json({
            producto: productoGuardado
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al guardar el producto' });
    }
}

const consultarproductos = async (req, res) => {
    try {
        const productos = await productoService.consultarProductos();
        res.json({ productos });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al consultar los productos' });
    }
}

const modificarproducto = async (req, res) => {
    try {
        const productoModificado = await productoService.modificarProducto(req.body);
        res.json({ producto: productoModificado });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al modificar el producto' });
    }
}

const eliminarproducto = async (req, res) => {
    try {
        const productoEliminado = await productoService.eliminarProducto(req.params.id);
        res.json({ producto: productoEliminado });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al eliminar el producto' });
    }
}

module.exports = { consultarproductos, agregarproductos, modificarproducto, eliminarproducto };
