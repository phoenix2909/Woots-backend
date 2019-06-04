const Express = require('express')
const HomeRouter = Express.Router()
const models = require('./../models')

module.exports = home = (req, res) => {
    Promise.all([
        models.views.findAll({ where: { folder_id: null }, attributes: ['id', 'name', 'data', 'folder_id'] }),
        models.folders.findAll({ attributes: ['id', 'name'] })
    ])
        .then(data => {
            console.log(JSON.stringify(data));
            res.json({
                folders:data[1],
                views:data[0]
            })
        })
        .catch(err => {
            res.status(500).send({message:'Internal Server Error'})
        })
}
HomeRouter.get('/home', home)