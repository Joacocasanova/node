const { response } = require('express')

const usersGet = (req, res = response) => {
    const { q, nombre = 'No name', apikey, page = 1, limit } = req.query

    res.json({
        msg: 'get API - Controller',
        q,
        nombre,
        apikey,
        page,
        limit
    })
}

const usersPut = (req, res = response) => {
    
    const { id } = req.params

    res.json({
        msg: 'put API - Controller',
        id
    })
}

const usersPost = (req, res = response) => {
    
    const { nombre, edad } = req.body
    
    res.json({
        msg: 'post API - Controller',
        nombre,
        edad
    })
}

const usersDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - Controller'
    })
}

const usersPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - Controller'
    })
}

module.exports = {
    usersGet,
    usersPut,
    usersPatch,
    usersDelete,
    usersPost,
}