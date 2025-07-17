import mongoose from "mongoose";

const booksschema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  isbn: {
    type: String,
    unique: true,
  },
  publishedDate: {
    type: Date,
  },
  instock: {
    type: Boolean,
  },
  like:{
    type:Number,
    default: 0
  }
});

const Book = mongoose.model("Book", booksschema);

export default Book;
