'user_strict'
const Express = require('express')
const models = require ('./models')

const port = 3000;

const app = Express()

const viewRouter = require('./routes/views/index')
const folderRouter = require('./routes/folders/index')
const HomeRouter = require('./routes/home')

app.use(Express.json());
app.use(Express.urlencoded({ extended: false }));

app.get('/',(req,res)=>{
    res.status(200).send({message:'Server is up and running on '+port})
})
app.use('/',folderRouter)
app.use('/',viewRouter)
app.use('/',HomeRouter)


app.listen(port, (e)=>{
    if(e)
    {
        console.log(`Unable to start server. \nError : \n${e}`);
    }
    console.log(`Listening on port ${port}`);
})
