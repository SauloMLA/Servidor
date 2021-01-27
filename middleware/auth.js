const jwt = require('jsonwebtoken');

module.exports = function(req, res, next){
    //Leer el token del header
    const token = req.header('x-auth-token');
    //revisar si no hay 
    if(!token){
        return res.status(401).json({msg: 'No hay Token, Permiso no valido'})
    }

    //validar el tokem
    try {
        const cifrado = jwt.verify(token, process.env.SECRETA)
        req.usuario = cifrado.usuario;
        next();
    } catch (error) {
        res.status(401).json({msg: 'Token no valido'})
    }
}