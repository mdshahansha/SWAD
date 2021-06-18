const Order=require('../../../models/order');


function statusController(){
    return {
        update(req,res){
            Order.updateOne({
                _id:req.body.orderId
            },
            {
                status:req.body.status
            }
            )
        }
    }
}


module.exports=statusController;