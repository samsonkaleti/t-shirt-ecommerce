import mongoose from "mongoose";  
export async function connect() {
    try {
        await mongoose.connect(process.env.MANGOOS_ID!) 
        const connection = mongoose.connection; 

        connection.on('connected', () => {
            console.log('Mongoose connected to db successfully');
        }) 

        connection.on('error', (err) => {
            console.log('Mongoose connection error: ' + err);
            process.exit();
        })


        console.log("connected to mongoDB")
    } catch (error) {
        console.log("error connecting to mongoDB", error)
        }
}
