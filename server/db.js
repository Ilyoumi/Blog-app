const mysql = require('mysql')
const db = mysql.createConnection({
        host: 'localhost',
        user: 'apricity',
        password: '280218',
        database: 'Blog'
})

module.exports = db