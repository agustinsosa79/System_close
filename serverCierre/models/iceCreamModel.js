import mongoose from "mongoose"

const icecreamSchema = mongoose.Schema({ key: {type: String, required: true, unique: true}, label: String, price: {type: Number, default: 0}, quantity:{type: Number, default: 0}})

const useModel = mongoose.model('icecream', icecreamSchema)

export default useModel 