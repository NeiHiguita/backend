const productomodel = require('../models/producto.model');

class ProductoService {
    constructor() {}

    async guardarProducto(Producto = new productomodel()) {
        try {
            const productoGuardado = await productomodel.create(Producto);
            return productoGuardado;
        } catch (error) {
            throw error;
        }
    }

    async consultarProductos() {
        try {
            return await productomodel.find();
        } catch (error) {
            throw error;
        }
    }

    async eliminarProducto(idc) {
        try {
            const productoEliminado = await productomodel.findOneAndRemove({
                _id: idc
            });
            return productoEliminado;
        } catch (error) {
            throw error;
        }
    }

    async modificarProducto(Productomod) {
        try {
            const productoModificado = await productomodel.findOneAndUpdate(
                { _id: Productomod._id },
                Productomod,
                { new: true }
            );
            return productoModificado;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new ProductoService();
