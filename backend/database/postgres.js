const {Pool, Client} = require('pg')

const pool = new Pool({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DATABASE,
    password: process.env.POSTGRES_PASSWORD,
    port: process.env.POSTGRES_PORT,
})

pool.query('select now()', (err, res) => {
    console.log('Database Started Successfully')
})

module.exports = pool