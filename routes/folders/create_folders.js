const models = require('./../../models')

module.exports = create_folders = (req, res) => {
    const { name } = req.body


    models.folders.findOrCreate({ where: { name: name }, defaults: { name: name } })
        .spread((folder, created) => {            
            if (!created)
                res.status(200).send({ message: 'Folder already exists!', status: false,
                    data: folder.dataValues });
            else
                res.status(200).send({ message: 'Folder created successfully!', status: true, data: folder.dataValues  })
        }).catch((e) => {
            res.status(500).send({ message: 'Internal server error', e })
        })
}