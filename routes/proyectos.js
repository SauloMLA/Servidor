const express = require('express');
const router = express.Router();
const proyectoController = require('../controllers/proyectoController');
const auth = require('../middleware/auth')
const { check } = require('express-validator');

//Crear proyecto
router.post('/', 
    auth,
    [
        check('nombre', 'El nombre del proyecto es obligatotio').not().isEmpty()
    ]
    ,proyectoController.crearProyecto
)

//Obtener
router.get('/', 
    auth,
    proyectoController.obtenerProyectos
)

//Actualizar
router.put('/:id', 
    auth,
    [
        check('nombre', 'El nombre del proyecto es obligatotio').not().isEmpty()
    ],
    proyectoController.actualizarProyecto
)

//Eliminar
router.delete('/:id', 
    auth,
    proyectoController.eliminarProyecto
)


module.exports = router;