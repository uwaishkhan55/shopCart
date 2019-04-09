const { Products,Users} = require('./db')
const db=require("./db")
async function get()
{
  let item = await Users.findAll(
    {
      where:
      {
         id:1
      }
    }
  )
  console.log(item)
}
get()

  