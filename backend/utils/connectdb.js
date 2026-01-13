import mongoose from 'mongoose'

export const connectDb = async() => {
    try {
        await mongoose.connect(process.env.db_url)
        console.log('Db connected');
    } catch (error) {
        console.log(error)
    }
}