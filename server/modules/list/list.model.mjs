import mongoose from 'mongoose'
const { Schema, model } = mongoose
import {TaskSchema} from "../task/task.model.mjs"

export const ListSchema = new Schema ({
name:{type: String, required: true},
user:{type: Schema.Types.ObjectId, ref: 'user'},
task: [TaskSchema], 
},{timestamps:true});

export default model ('list', ListSchema) 
