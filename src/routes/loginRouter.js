const express= require('express');
const loginRouter=express.Router();


function loginRoutes(obj){
loginRouter.get('/',function(req,res)
{
    res.render("login",obj.nav)
}
)
return loginRouter
}
module.exports=loginRoutes;