
const express=require('express');
const dotenv=require("dotenv");
//const mongoose=require('mongoose');
const book=require("./routes/book.routes");
const user=require("./routes/user.routes");
const Favourites=require("./routes/favourite.routes");
const Cart=require("./routes/cart.routes");
const Order=require("./routes/order.routes");
const cors=require('cors')
const app=express();
dotenv.config();
require("./conn/conn");

const PORT=process.env.PORT || 4000;
//middlewares
//app.use("/books",router) //local host:5000/books
app.use(cors());
app.use(express.json());   //middlewares should be after expressjson
app.use("/api/v1",user);
app.use("/api/v1",book);
app.use("/api/v1",Favourites);
app.use("/api/v1",Cart);
app.use("/api/v1",Order);
app.use(cors());


//creating port
app.listen(PORT,()=>{
    console.log(`server is listening on port ${PORT}`);
});

// mongoose.connect("mongodb+srv://admin:RnFgh1yUdvM2zaC6@cluster0.n5kiacm.mongodb.net/myDB?retryWrites=true&w=majority&appName=Cluster0")
// .then(()=>console.log("connected to database")).then(()=>{
//   app.listen(5000)
 // }).catch((err)=>console.log(err));


//teJ7iToZGOkw9Ylmg
//RnFgh1yUdvM2zaC6