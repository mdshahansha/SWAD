const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = new Schema({
    customerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    items:{
        type:Object,
        required:true
    }
},{
    timestamps:true
})

module.exports = mongoose.model('User', orderSchema)