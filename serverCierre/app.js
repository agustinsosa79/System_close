import { config } from 'dotenv'
import express from 'express'
import { connectMongoDB } from './config/database.js'
import productsRoute from './routes/routeProducts.route.js'
import cors from 'cors'
config()
const app = express()
app.use(cors())
const PORT = process.env.PORT || 3000

await connectMongoDB()


app.use(express.json())

app.use('/products', productsRoute)



app.listen(PORT, () => {
    console.log(`listening succes on the port http://localhost:${PORT}`)
})

