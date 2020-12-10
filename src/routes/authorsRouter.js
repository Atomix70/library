const express= require('express');
const authorsRouter=express.Router();

function authorsRoutes(){
authorsRouter.get('/',function(req,res)
{
    res.render("authors",obj);
})
authorsRouter.get('/:id',function(req,res)
{
    const index=req.params.id;
    obj.index=index;
    console.log(index)
    res.render("author",obj)
}
)
return authorsRouter
}
module.exports=authorsRoutes