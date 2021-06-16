import axios from 'axios';
import Noty from 'noty'

let addToCart=document.querySelectorAll('.add-to-cart');
let cartCounter=document.querySelector('#cartCounter')
function upDateCart(pizza){
    //
    axios.post('update-cart',pizza).then(function(res){
        console.log(res);
        cartCounter.innerText =res.data.totalQty
        new Noty({
            type:'success',
            timeout:1200,
            progressBar:false,
            text:'Item added to Cart',
            layout:'bottomLeft'
        }).show();
    }).catch(err=>
        {
            new Noty({
                type:'error',
                timeout:1200,
                progressBar:false,
                text:'Something went Wrong',
               
            })

        })
}



addToCart.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        
        let pizza=JSON.parse(btn.dataset.pizza);
        updateCart(pizza);
        console.log(pizza);
    })
})