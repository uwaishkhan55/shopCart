const Sequelize = require('sequelize')

const db = new Sequelize({
  dialect: 'sqlite',
  storage: __dirname+'/tests.db',
})
const Users = db.define('user', {
  username: {
    type: Sequelize.STRING(30),
    unique: true,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING(30),
  },
  email: {
    type: Sequelize.STRING(30)
  },
  fbToken: {
    type: Sequelize.TEXT
  },
  fbId: {
    type: Sequelize.STRING(30),
    unique: true
  }
})
// const Vendors = db.define('vendor', {
//   name: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
// })

const Products = db.define('product', {
  img:
  {
    type:Sequelize.TEXT
  },
  name:
  {
    type: Sequelize.STRING,
    allowNull: false,
    unique:true
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 1
  },
})

// Vendors.hasMany(Products)
// Products.belongsTo(Vendors)

// const Users = db.define('user', {
//   name: {
//     type: Sequelize.STRING(30),
//     allowNull: false
//   },
//   city: Sequelize.STRING(30),
// })

const CartItems = db.define('cartitem', {
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1
  },
})

CartItems.belongsTo(Users)
Users.hasMany(CartItems)

CartItems.belongsTo(Products)
Products.hasMany(CartItems)

db.sync(()=>
{
    console.log('working fine')
})
module.exports = {
  db,
  Products,
  Users,
  CartItems
  // Users, , Vendors,
  // CartItems
}