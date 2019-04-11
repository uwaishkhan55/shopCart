const Sequelize = require('sequelize')

const db = new Sequelize({
  dialect: 'sqlite',
  storage: __dirname+'/tests.db',
})
const Users = db.define('user', {
  username: {
    type: Sequelize.STRING(30),
    unique: true
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
  user_id:Sequelize.INTEGER,
  product_id:Sequelize.INTEGER,
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1
  },
})


// CartItems.belongsTo(Users)
// CartItems.belongsTo(Products)
// Products.hasMany(CartItems, {foreignKey: {unique: true}})
// Users.hasMany(CartItems, {foreignKey: {unique: true}})


Users.hasMany(CartItems, {foreignKey: 'user_id'})
CartItems.belongsTo(Users, {foreignKey: 'user_id'})
Products.hasMany(CartItems, {foreignKey: 'product_id'})
CartItems.belongsTo(Products, {foreignKey: 'product_id'})
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