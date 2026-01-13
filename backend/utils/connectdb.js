import mongoose from 'mongoose'

export const connectDb = async() => {
    try {
        await mongoose.connect(process.env.db_url,{
              useNewUrlParser: true,
    useUnifiedTopology: true,
        })
        console.log('Db connected');
    } catch (error) {
        console.log(error)
    }
}