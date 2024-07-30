const router=require("express").Router();
const User=require("../model/user.model");
const {authenticateToken} =require("./userAuth.routes");

//add book to cart
router.put("/add-book-to-cart",authenticateToken,async(req,res)=>{
    try{
    const{bookid,id}=req.headers;
    const userData=await User.findById(id);
    const isBookInCart=userData.cart.includes(bookid);
    if(isBookInCart)
    {
        return res.json({
            status:"Success",
            message:"book already in cart",
        });
    }
    await User.findByIdAndUpdate(id,{$push:{cart:bookid},
    });
    return res.json({
        status:"Success",
        message:"book added to cart",
    });
  }
  catch(error)
  {
    console.log(error);
    res.status(500).json({message:"an error occurred"});
  }
});

//remove from cart
router.put("/remove-book-from-cart/:bookid",authenticateToken,async(req,res)=>{
    try{
        const{bookid}=req.params;
        const{id} =req.headers;
        await User.findByIdAndUpdate(id,{$pull:{cart:bookid}});
        
        return res.json({
            status:"success",
             message:"book removed from cart"});
    }
    catch(error)
    {
        console.log(error);
        res.status(500).json({message:"internal server error"});
    }
});

//get cart of a user
router.get("/get-books-in-cart",authenticateToken,async(req,res)=>{
    try{
        const{id} =req.headers;
        const userData=await User.findById(id).populate("cart");
        const cart=userData.cart.reverse(); //rev will show the recent added book first
        return res.json({
            status:"Success",
            data:cart,
        });
    }
    catch(error)
    {
        console.log(error);
        res.status(500).json({message:"internal server error"});
    }
});


module.exports=router;