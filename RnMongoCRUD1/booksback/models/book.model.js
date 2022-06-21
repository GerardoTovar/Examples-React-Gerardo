import mongoose from "mongoose";
const { Schema } = mongoose;

const bookSchema = new Schema({
    title: {type: String},
    description: String
});
const Book = mongoose.model('Book', bookSchema);

export default Book;