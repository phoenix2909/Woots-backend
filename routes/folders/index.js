const Express = require('express')
const folderRouter = Express.Router()

const create_folders = require('./create_folders')
const update_folders = require('./update_folders')

folderRouter.post('/folders/create_folders', create_folders)
folderRouter.put('/folders/update_folder', update_folders)


module.exports = folderRouter