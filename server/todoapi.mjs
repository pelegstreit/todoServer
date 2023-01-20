import log from '@ajar/marker'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import {connectDB} from './db/mongoose.connection.mjs'
import taskRouter from './modules/task/task.router.mjs'
import userRouter from './modules/user/user.router.mjs'
import listRouter from './modules/list/list.router.mjs'

//global varibale
const { PORT,HOST, DB_URI } = process.env;

//define express app
const app = express();

//apply middleware
app.use(morgan('dev'))
app.use(cors());

//routing
app.use('/task', taskRouter);
app.use('/user', userRouter);
app.use('/list', listRouter);

app.use('*', (req,res)=>{
    res.status(404).json({message: `${req.uel} was not found`})
}
)

//launch server
(async ()=> {
    app.listen(PORT,HOST);
    connectDB(DB_URI);
    log.magenta(`TODO is live on`,` ✨ ⚡  http://${HOST}:${PORT} ✨ ⚡`);  
  })().catch(log.error)