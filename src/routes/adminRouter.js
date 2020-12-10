const express= require('express');
const adminRouter=express.Router();

function adminRoutes(obj){
adminRouter.get('/',function(req,res)
{
    res.render("admin",obj)
}
)
adminRouter.get('/addauthor',function(req,res)
{
    res.render("addauthor",obj.nav)
}
)
adminRouter.get('/addbook',function(req,res)
{
    res.render("addbook",obj.nav)
}
)
adminRouter.get('/admin-book',function(req,res)
{
    res.render("admin-book",obj)
}
)
adminRouter.get('/admin-books',function(req,res)
{
    res.render("admin-books",obj)
}
)

adminRouter.get('/admin-authors',function(req,res)
{
    res.render("admin-authors",obj)
}

)
adminRouter.get('/admin-authors/:id',function(req,res)
{
    const index=req.params.id;
    obj.index=index;
    console.log(index)
    // res.render("author",obj)
    res.render("admin-author",obj)
}
)
adminRouter.get('/admin-books/:id',function(req,res)
{
    const index=req.params.id;
    obj.index=index;
    console.log(index)
    // res.render("author",obj)
    res.render("admin-book",obj)
}
)

return adminRouter;
}

module.exports=adminRoutes;