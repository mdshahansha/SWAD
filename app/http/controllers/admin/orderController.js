const order = require("../../../models/order")
//ne means notequal
function orderController(){
    return {
        index(req,res){
            order.find({status:{$ne:'ompleted'} }, null , {sort:{'createdAt':-1}}).
            populate('customerId','-password').exec((err,order)=>{
                res.render('admin/orders')
            })
        }
    }
}