const { Router } = require('express');
const { consultarproductos, agregarproductos, modificarproducto, eliminarproducto } = require('../controllers/producto.controller')
const router = Router();

router.get('/api/Productos', consultarproductos);
router.post('/api/Productos/registro', agregarproductos);
router.put('/api/Productos/modificar', modificarproducto);
router.delete('/api/Productos/eliminar/:id', eliminarproducto);

module.exports = router;
