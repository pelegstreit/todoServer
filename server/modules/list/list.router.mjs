// import { Router } from "express";
// import listModel from "./list.model.mjs "
// import taskModel from "../task/task.model.mjs";
// import userModel from "../user/user.model.mjs"
// import express from 'express'
// import raw from '../../middleware/route.async.wrapper.mjs'

// const router= Router();

// //define middlewawre
// router.use(express.json());

// //defnie founctions-
// //create list
// router.post('/', raw( async (req,res)=>{
//     const list = await listModel.create(req.body);
//     let user = await userModel.findById(req.body.user);
//     user.list.push(list);
//     await user.save;
//     res.status(200).json(list)
// }))

// //get all lists
// router.get('/', raw(async (req,res)=>{
//     const lists= await listModel.find();
//     res.status(200).json(lists)
// }))

// //get list by ID
// router.get('/:id', raw (async (req,res)=>{
//     const list= await listModel.findById(req.params.id);
    
//     res.status(200).json(list)
// }))

// //update list by ID
// router.put('/:id',raw(async (req,res)=>{
//     const list= await listModel.findByIdAndUpdate(req.params.id,req.body,{
//         new:true, upsert:false
//     });
//     let user = await userModel.findById(req.body.user);
//     const filtered = user.list.filter((l)=> l._id !== req.params.id);
//     user.list.push(list);
//     user.list =  filtered;
//     await user.save;
//     for (let taskID of req.body.task){
//         let task = await taskModel.findById(taskID);
//         const tasksfiltered = task.list.filter((l)=> l._id !== req.params.id);
//         task.list.push(list);
//         task.list =  tasksfiltered;
//         await task.save;
//     }
//     res.status(200).json(list)
// }))


// //merge list by ID
// router.patch('/:id', raw(async (req,res)=>{
//     const list= await listModel.findByIdAndUpdate(req.params.id,req.body,{
//         new:true, upsert:false
//     });
//     let user = await userModel.findById(req.body.user);
//     const filtered = user.list.filter((l)=> l._id !== req.params.id);
//     user.list.push(list);
//     user.list =  filtered;
//     await user.save;
//     for (let taskID of req.body.task){
//         let task = await taskModel.findById(taskID);
//         const tasksfiltered = task.list.filter((l)=> l._id !== req.params.id);
//         task.list.push(list);
//         task.list =  tasksfiltered;
//         await task.save;
//     }
//     res.status(200).json(list)
// }))


// //delete list
// router.delete('/:id',raw(async (req,res)=>{
//     const list= await userModel.findByIdAndRemove(req.params.id);
//     let user = await userModel.findById(req.body.user);
//     const filtered = user.list.filter((l)=> l._id !== req.params.id);
//     user.list =  filtered;
//     await user.save;
//     for (let taskID of req.body.task){
//         let task = await taskModel.findByIdAndRemove(taskID);
//         await task.save
//     }
//     res.status(200).json(user);
// }))

// export default router;