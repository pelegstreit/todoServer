import mongoose from "mongoose";
// import {ListSchema} from "../list/list.model.mjs";
// import {TaskSchema} from "../task/task.model.mjs";

const {Schema, model} = mongoose;


const UserSchema = new Schema({
    name: {type:String, required: true},
    // list: [ListSchema]
    // task: [TaskSchema], 
},{timestamps: true})



export default model('user', UserSchema);