import mongoose from "mongoose";
const {Schema, model} = mongoose;

const TaskSchema = new Schema({
    title: {type:String, required: true},
    done: {type:Boolean, default: false},
    user:{type: Schema.Types.ObjectId, ref: 'user'},
    // list: {type: Schema.Types.ObjectId, ref: 'list'}
},{timestamps: true})



export default model('task', TaskSchema);