require('dotenv').config()
const moongose = require('mongoose')
const express = require('express')
const { default: mongoose } = require('mongoose')
const app = express()

const PORT = process.env.PORT || 3000
const MONGO_URL = process.env.MONGODB_URI

moongose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('mongoDB is connected');
    app.listen(PORT, () => {
        console.log(`listening succes on the port http://localhost:${PORT}`)
    })
})
.catch((err) => {
    console.error(err)
})

const userSchema = mongoose.Schema({ name: String, age: Number})

const useModel = mongoose.model('users', userSchema)

app.get('/', async (req, res) => {
    const userData = await useModel.find()
    res.send(userData)
    res.send('Hello to the connection of the mongoDB')
})


