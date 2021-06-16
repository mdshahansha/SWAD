function cartController(){
    return {
         index(req,res){  
    res.render('customers/cart');
         },
         update(req,res){
              return res.json({ data:"All Okay"})
         }
    }
}

module.exports=cartController;