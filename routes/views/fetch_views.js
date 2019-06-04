const models = require('./../../models')

module.exports = fetch_views = (req, res) => {
    const { id } = req.body
    console.log(id);
    
    models.views.findOne({ where: { id: id }, attributes: ['id', 'name', 'data','folder_id'] })
    .then((view)=>{
        if(view)
            res.status(200).send({view})
        else
            res.status(404).send({message : 'View not found',status:false})
    })
    .catch((error)=>{
        res.status(500).send({message:'Internal Server error',error,status:false})
    })
}