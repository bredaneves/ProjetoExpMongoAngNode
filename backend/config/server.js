const port = 3003
//bodyparser é um middleware para receber o body
const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')
const queryParser = require('express-query-int')
/*o parâmetro extended siginifica que mais informações além do padrão
poderão ser recebidas na requisição do formulário*/
/*abaixo estão as chamadas de middleware na ordem em que devem ser
interpretadas, primeiro como url e depois como json*/
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)
server.use(queryParser())

server.listen(port, function() {
  console.log(`BACKEND is running on port ${port}.`)
})

module.exports = server
