const express = require(`express`)
const cors = require(`cors`)

const app = express()

app.use(cors())
app.use(express.json())

const inventory = [`gallon of milk`, `wrapping paper`, `wagon`, `canoe`, `rusty nail`, `desk`, `comic book`, `camera`, `pile of trash`, `butter`]

app.get(`/api/inventory`, (req, res) => {
    if(req.query.item){
        const filteredInventory = inventory.filter(item => item.toLowerCase().includes(req.query.item.toLowerCase()))
        res.status(200).send(filteredInventory)
    } else {
    res.status(200).send(inventory)
    }
})

app.get(`/api/inventory/:index`, (req, res) => {
    res.status(200).send(inventory[+req.params.index])
})




app.listen(5050, () => console.log(`Server is listening on 5050.`))


