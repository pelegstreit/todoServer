import mongoose from 'mongoose'
import log from '@ajar/marker'

export const connectDB = async (uri) => {
    mongoose.connect(uri,{useNewUrlParser: true, useUnifiedTopology: true})
    log.magenta(' ✨  Connected to Mongo DB ✨ ')
}