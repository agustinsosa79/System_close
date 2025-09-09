import useModel from "../models/iceCreamModel.js";
import { Router } from "express";

const route = Router()


route.get('/', async (req, res) => {
    try {
    const data = await useModel.find()
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})


route.put('/:key/price', async (req, res) => {
    const { key } = req.params
    const { price } = req.body

    try {
        const updated = await useModel.findOneAndUpdate(
            {key},
            {price},
            {new: true}
        )
        res.json(updated)
    } catch (error) {
        console.error(error)
        res.status(404)
    }
})


route.put('/:key/quantity', async (req, res) => {
    const { key } = req.params
    const { quantity } = req.body

    try {
        const updated = await useModel.findOneAndUpdate(
            { key }, 
            { quantity },
            {new: true }
        )
        res.json(updated)
    } catch (error) {
        console.error(error)
        res.status(404)
    }
})



export default route    