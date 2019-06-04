const models = require('./../../models')

module.exports = fetch_views_by_folder = (req, res) => {
    const { folder_id } = req.body

    models.views.findOne({ where: { folder_id: folder_id }, attributes: ['id', 'name', 'data', 'folder_id'] })
        .then((view) => {
            if (view)
                res.status(200).send({ view })
            else
                res.status(404).send({ message: 'View not found', status: false })
        })
        .catch((error) => {
            res.status(500).send({ message: 'Internal Server error', error, status: false })
        })
}