const knex = require("knex")
const dotenv = require("dotenv")

dotenv.config()

const db = knex({
    client: 'pg',
    version: '7.2',
    connection: {
        host : process.env.DB_HOST,
        port : process.env.DB_PORT,
        user : process.env.DB_USER,
        password : process.env.DB_PASS,
        database : process.env.DB_NAME
  }
})

module.exports = db

// // knex allows you to connect to a postgre sql server with the above code

// db('products').select("id","name","price")
// .then(rows => console.log(rows))

// // the env file keeps all environment variables in one place, 
// // including sensitive data