const express = require("express")
const app = express()
const port = 3000
app.use(express.json())

const conetdb = require("./db/conect")

conetdb()

const routes = require("./routes/router")

app.use("/api", routes)

app.listen(port, () => {
    (`Micro serviço rodando em http://localhost:${port}`)
  })