const express = require('express')


const app = express()

app.get("/",(request, response) => {
  return response.json({message: "Hello world Ignite!"})
})

app.listen(3333)

// o método .json pode retornar vários tipos de dados, um array, um objeto