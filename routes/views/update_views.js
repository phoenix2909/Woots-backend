const models = require('./../../models')

module.exports = update_views = (req, res) => {
    const {id,folder_id, name, data } = req.body
    models.views.findOne({where : {id:id},attributes:['id','name','data']})
    .then((view)=>{
        if(folder_id)
        {
            models.views.update({
                folder_id
            },
            {where:{id}})
            .then((view)=>{
                res.status(200).send({message:'FolderId successfully changed!'})
            })
        }
        else if (folder_id && name)
        {
            models.views.update({
                folder_id,
                name
            },
                { where: { id } })
                .then((view) => {
                    res.status(200).send({ message: 'FolderId and Name successfully changed!' })
                })
        }
        else if (name && data)
        {
            models.views.update({
                name,
                data
            },
                { where: { id } })
                .then((view) => {
                    res.status(200).send({ message: 'Name and Data successfully changed!' })
                })
        }
        else if (data)
        {
            models.views.update({
                data
            },
                { where: { id } })
                .then((view) => {
                    res.status(200).send({ message: 'Data successfully changed!' })
                })
        }
        else if (name)
        {
            models.views.update({
                name
            },
                { where: { id } })
                .then((user) => {
                    res.status(200).send({ message: 'Name successfully changed!' })
                })
        }
        else if (folder_id, name, data)
        {
            models.views.update({
                folder_id,
                name,
                data
            },
                { where: { id } })
                .then((user) => {
                    res.status(200).send({ message: 'FolderId, Name and Data successfully changed!' })
                })
        }
        else {
            res.status(200).send({ message: 'Invalid view id' })
        }
    })
    .catch((err)=>{
        res.status(401).send({
            message:'Unauthorized operation',err
        })
    })
    
}