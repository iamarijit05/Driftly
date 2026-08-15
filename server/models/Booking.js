import mongoose from "mongoose";
const {ObjectId} = mongoose.Schema.Types

const bookingSchema = new mongoose.Schema({
    car: {
        
    }
}, {timestamps: true})


const Booking = mongoose.model('Booking', bookingSchema)

export default Booking