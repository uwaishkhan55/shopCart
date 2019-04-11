const { Products,Users, CartItems} = require('./db')
const db=require("./db")
async function get()
{
     let item = await CartItems.findAll({
      //  user_id:1,
      //  product_id:2
      include: [{
        model: Products
       },
      {model:Users}],
       
       where :
       {
           product_id:2
       }
      // user_id:2,
      // product_id:5
       
     })
     console.log("___________________>>>>>>>>>>"+JSON.stringify(item[0].product))
  }

get()


  