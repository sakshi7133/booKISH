const router=require("express").Router();
const User=require("../model/user.model");
const Book=require("../model/book.model")
//const booksController=require("../controllers/books-controllers")
const jwt=require("jsonwebtoken");
const {authenticateToken}=require("../routes/userAuth.routes");
  
  //add book
  router.post("/addbook",authenticateToken,async(req,res)=>{
    try{
        const { id } =req.headers;
        const user=await User.findById(id);
        if(user.role!=="admin")
        {
            return res.status(400).json({message:"you are not having access to perform admin work"});
        }
        const book=new Book({
            url:req.body.url,
            title:req.body.title,
            author:req.body.author,
            price:req.body.price,
            description:req.body.description,
            language:req.body.language
        });
        await book.save()
        res.status(200).json({message:"book added successfully"});

    }
    catch(error){
    res.status(500).json({message:"internal server error"});    
    }
  });

  //update book
  router.put("/update-book",authenticateToken,async(req,res)=>{
    try{
      const { id } =req.headers;
      const {bookid}=req.headers;
      const user=await User.findById(id);
      if(user.role!=="admin")
        {
            return res.status(400).json({message:"you are not having access to perform admin work"});
        }
      await Book.findByIdAndUpdate(bookid,{
        url:req.body.url,
        title:req.body.title,
        author:req.body.author,
        price:req.body.price,
        description:req.body.description,
        language:req.body.language,
      });
    return res.status(200).json({message:"book updated successfully!"});
  }
  catch(error)
  {
    console.log(error);
    return res.status(500).json({message:"an error occurred"});
  }
  });

  //delete book
  router.delete("/delete-book",authenticateToken,async(req,res)=>{
    try{
      const { id } =req.headers;
      const {bookid}=req.headers;
      const user=await User.findById(id);
      if(user.role!=="admin")
        {
            return res.status(400).json({message:"you are not having access to perform admin work"});
        }
      await Book.findByIdAndDelete(bookid);
    return res.status(200).json({message:"book deleted successfully!"});
       }
    catch(error)
       {
         console.log(error);
        return res.status(500).json({message:"an error occurred"});
      }
  });

  //get all books
  router.get("/get-all-books",async(req,res)=>{
    try{
       const books=await Book.find().sort({ createdAt: -1});
       return res.json({
        status:"success",
        data:books,
       });

    }
    catch(error)
    {
      console.log(error);
      return res.status(500).json({message:"an error occurred"});
    }
  });

  //get recent books
  router.get("/get-recent-books",async(req,res)=>{
    try{
       const books=await Book.find().sort({ createdAt: -1}).limit(5);
       return res.json({
        status:"success",
        data:books,
       });

    }
    catch(error)
    {
      console.log(error);
      return res.status(500).json({message:"an error occurred"});
    }
  });

  //get by id
  router.get("/getById/:id",async(req,res)=>{
    try{
      const{ id }=req.params;
      const book=await Book.findById(id);
      return res.json({
        status:"Success",
        data:book,
      });

    }
    catch(error)
      {
       console.log(error);
       return res.status(500).json({message:"an error occurred"});
      }
  });




module.exports=router;