const express = require('express')
const dotenv = require('dotenv')
const port = process.env.PORT || 5000

const app = express()


// middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))
if(process.env.NODE_ENV == 'development'){
    app.use(errorHandler) //overwrite the default express error handler
}

app.use('/api/user', require('./routes/userRoutes'))

app.listen(port, ()=>{
    console.log(`Server started on port ${port} `)
})
