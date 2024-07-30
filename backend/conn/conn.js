const mongoose=require("mongoose");
const conn=async()=>{
    try{
        await mongoose.connect(`${process.env.URI}`); //`${process.env.MONGODB_URI}/${DB_NAME}`
        console.log("connected to database");
    }catch(error)
    {
        console.log(error);
    }
};
conn()
