const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.status(200).send('Backend')
})

app.listen(3000, () => console.log('backend rodando na porta 3000'))