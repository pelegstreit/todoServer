import mongoose from "mongoose";
import {ListSchema} from "../list/list.model.mjs"

const {Schema, model} = mongoose;


const UserSchema = new Schema({
    name: {type:String, required: true},
    list: [ListSchema]
},{timestamps: true})



export default model('user', UserSchema);