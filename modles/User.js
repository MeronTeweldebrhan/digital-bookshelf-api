import mongoose from 'mongoose'

const reviewschema = new mongoose.Schema({
    book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book',
        required: true
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    date:{
   type: Date ,default :Date.now()
    }
})

const userschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    likedBooks:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book'
    }],
    reviews: [reviewschema]
    

})




export default mongoose.model('User', userschema)