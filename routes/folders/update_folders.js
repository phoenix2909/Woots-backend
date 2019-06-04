const models = require('./../../models')

module.exports = folders = (req, res) => {
    const { id, name } = req.body
    models.folders.findOne({ where: { id: id }, attributes: ['id', 'name'] })
        .then((folder) => {            
            if (id) {
                models.folders.update({
                    name
                },
                    { where: { id } })
                    .then((folder) => {
                        res.status(200).send({ message: 'FolderName successfully changed!', data: folder.dataValues})
                    })
            }
            else {
                res.status(200).send({ message: 'Invalid folder id',data:folder.dataValues })
            }
        })
        .catch((err) => {
            res.status(401).send({
                message: 'Unauthorized operation', err
            })
        })

}