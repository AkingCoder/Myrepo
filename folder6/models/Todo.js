import mongoose from 'mongoose';

const TodoSchema = new mongoose.Schema({
    title: {type:String,default:"Anand"},
    author: String,
    isDone:Boolean,
    rnd:Number

});
export const Todo = mongoose.model('Todo', TodoSchema);