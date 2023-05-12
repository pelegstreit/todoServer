import { Router } from "express";
import taskModel from "./task.model.mjs";
// import listModel from "../list/list.model.mjs";
import express from 'express';
import raw from '../../middleware/route.async.wrapper.mjs';
const router= Router();

//define middlewawre
router.use(express.json());

//defnie founctions-
//create task
router.post('/', raw( async (req,res)=>{
    const task = await taskModel.create(req.body);
    // let list = await listModel.findById(req.body.list);
    // list.task.push(task);
    // await list.save;
    res.status(200).json(task)
}));

//get all tasks
router.get('/', raw(async (req,res)=>{
    const tasks= await taskModel.find();
    res.status(200).json(tasks);
}))

//get task by ID
router.get('/:id', raw (async (req,res)=>{
    const task= await taskModel.findById(req.params.id);
    res.status(200).json(task);
}))

//update task by ID
router.put('/:id',raw(async (req,res)=>{
    const task= await taskModel.findByIdAndUpdate(req.params.id,req.body,{
        new:true, upsert:false
    });
    // let list = await listModel.findById(req.body.list);
    // const filtered = list.task.filter((t)=> t._id !== req.params.id);
    // filtered.push(task);
    // list.task =  filtered;
    // await list.save;
    res.status(200).json(task)
}))


//merge task by ID
router.patch('/:id', raw(async (req,res)=>{
    const task= await taskModel.findByIdAndUpdate(req.params.id,req.body,{
        new:true, upsert:false
    });
    // let list = await listModel.findById(req.body.list);
    // const filtered = list.task.filter((t)=> t._id !== req.params.id);
    // filtered.push(task);
    // list.task =  filtered;
    // await list.save;
    res.status(200).json(task)
}))


//delete task
router.delete('/:id',raw(async (req,res)=>{
    const task= await taskModel.findByIdAndRemove(req.params.id);
    // let list = await listModel.findById(req.body.list);
    // const filtered = list.task.filter((t)=> t._id !== req.params.id);
    // list.task =  filtered;
    // await list.save;
    res.status(200).json(task);
}));

export default router;