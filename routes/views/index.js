const Express = require('express')
const viewRouter = Express.Router()

const create_views = require('./create_views')
const update_views =require('./update_views')
const fetch_views = require('./fetch_views')
const fetch_views_by_folder = require('./fetch_view_by_folder')

viewRouter.post('/views/create_view',create_views)
viewRouter.get('/views',fetch_views)
viewRouter.put('/views/update_view',update_views)
viewRouter.get('/views/fetch_view_by_folder',fetch_views_by_folder)



module.exports = viewRouter