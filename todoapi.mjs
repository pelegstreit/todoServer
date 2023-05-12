import log from '@ajar/marker';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import raw from "./server/middleware/route.async.wrapper.mjs";
import {connectDB} from './server/db/mongoose.connection.mjs';
import taskRouter from './server/modules/task/task.router.mjs';
import userRouter from './server/modules/user/user.router.mjs';
// import listRouter from './server/modules/list/list.router.mjs';
import taskModel from "./server/modules/task/task.model.mjs";

//global varibale
const { PORT,HOST, DB_URI } = process.env;

//define express app
const app = express();

//apply middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

//routing
app.get("/gettasks", async (req,res) =>{
    const tasks= await taskModel.find();
    res.status(200).json(tasks);
    });
app.get('/gettaskbyID/:id', raw (async (req,res)=>{
    const task= await taskModel.findById(req.params.id);
    res.status(200).json(task)
    }));
app.post("/addtask", raw(async (req,res)=>{
    const task = await taskModel.create(req.body);
    res.status(200).json(task);
    }));
app.put('/updateTask/:id',raw(async (req,res)=>{
        const task= await taskModel.findByIdAndUpdate(req.params.id,req.body,{
            new:true, upsert:false
        });
        res.status(200).json(task);
    }))
app.delete('/deleteTask/:id',raw(async (req,res)=>{
        const task= await taskModel.findByIdAndRemove(req.params.id);
        res.status(200).json(task);
    }));
app.delete('/deleteAllcompleted',raw(async (req,res)=>{
    for(let item in req.body){
        await taskModel.findByIdAndRemove(item);
    }
       
        // res.status(200).json(task);
    }));



app.use((err,req,res,next) => {
    res.status(500).json({message:err.message})
});

app.use('*', (req,res)=>{
    res.status(404).json({message: `${req.url} was not found`})
}
);

//launch server
(async ()=> {
    app.listen(PORT,HOST);
    connectDB(DB_URI);
    log.magenta(`TODO is live on`,` ✨ ⚡  http://${HOST}:${PORT} ✨ ⚡`);  
  })().catch(log.error)