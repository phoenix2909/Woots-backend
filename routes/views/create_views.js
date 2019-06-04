const models = require('./../../models')

module.exports = create_views = (req,res) => {
    const {name, data} = req.body
    
    
    models.views.findOrCreate({where : {name:name},defaults:{name:name,data:data}})
        .spread((view, created)=>{
            if(!created)
                res.status(200).send({ message: 'View already exists!', status: false, data: view.dataValues });
            else
            {
                res.status(200).send({ message: 'View created successfully!', status: true, data: view.dataValues  })
            }
        }).catch((e)=>{
            res.status(500).send({message:'Internal server error',e})
        })
}