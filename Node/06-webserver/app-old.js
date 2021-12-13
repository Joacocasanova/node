const http = require('http')

const server = http.createServer( (req, res) => {
    res.write('hola mundo')
    res.end()
})
.listen( 8080 )


console.log('Puerto 8080 activado')