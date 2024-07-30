const router=require("express").Router();
const User=require("../model/user.model");
const {authenticateToken} =require("./userAuth.routes");
const Order=require("../model/orders.model");
const Book=require("../model/book.model");

//place order
router.post("/placeOrder",authenticateToken,async(req,res)=>{
 try{
    const{id}=req.headers;
    const{order}=req.body;
    for(const orderData of order){
        const newOrder=new Order({user:id,book:orderData._id});
        const orderDataFromDb=await newOrder.save();

        //saving order in user model
        await User.findByIdAndUpdate(id,{$push:{orders:orderDataFromDb._id}});

        //clearing cart
        await User.findByIdAndUpdate(id,{$pull:{cart:orderData._id},
      });
    }
    return res.json({
        status:"Success",
        message:"order placed successfully"
    });


 }
 catch(error)
 {
   console.log(error);
   res.status(500).json({message:"An error occurred"});
 }
});

//get order history of particular user
router.get("/get-order-history",authenticateToken,async(req,res)=>{
    try{
        const{id}=req.headers;
        const userData=await User.findById(id).populate({
            path:"orders",
            populate:{path:"book"},

        });
        const orderData=userData.orders.reverse();
        return res.json({
            status:"Success",
            data: orderData,
        });

    }
    catch(error)
    {
      console.log(error);
      return res.status(500).json({message:"An error occurred"});
    }
});


//get all orders-----admin
router.get("/get-all-orders",authenticateToken,async(req,res)=>{
    try{
        const userData=await Order.find()
        .populate({
            path:"book",
        })
        .populate({
            path:"user",
        })
        .sort({createdAt:-1});
        return res.json({
            status:"Success",
            data:userData,
        });
        
    }
    catch(error)
    {
        console.log(error);
        return res.status(500).json({message:"An error occurred"});
    }
});


//update order ----admin
router.put("/updateOrder",authenticateToken,async(req,res)=>{
    try{
        const{id}=req.params;
        await Order.findByIdAndUpdate(id,{status:req.body.status});
        return res.json({
            status:"Success",
            message:"Status updated Successfully",
        });

    }
    catch(error)
    {
        console.log(error);
        return res.status(500).json({message:"An error occurred"});
    }
});

module.exports=router;