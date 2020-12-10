const express= require('express');
const booksRouter=express.Router();


function booksRoutes(obj){
booksRouter.get('/',function(req,res)
{
    res.render("books",obj);
})
booksRouter.get('/:id',function(req,res)
{
const index=req.params.id;
obj.index=index;
res.render("book",obj)
}
)
return booksRouter;
}

module.exports=booksRoutes;