require('dotenv').config()
const express = require('express')
const port = process.env.PORT || 5000

console.log(process.env.PORT)

const app = express()


// middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

if(process.env.NODE_ENV == 'development'){
    app.use(errorHandler) //overwrite the default express error handler
}

app.use('/auth', require('./routes/userRoutes'))

// Common error handler
app.use((err, req, res, next) =>{
      switch(err.message){
          case '401':
              res.status(401).send({msg: 'Invalid Authentication'})
              break;
            default:
                res.send({})
      }
})

app.listen(port, ()=>{
    console.log(`Server started on port ${port} `)
})
