const sequelize = require ('../db')
const {DataTypes} = require ('sequelize')

const Worker = sequelize.define('worker', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true,},
    email:{type:DataTypes.STRING, unique: true,},
    password:{type:DataTypes.STRING},
    role:{type:DataTypes.STRING, defaultValue: "USER"},
})
const Products = sequelize.define('products', {
    name:{type:DataTypes.STRING, unique: true, allowNull:false, primaryKey:true},
    description:{type:DataTypes.STRING, allowNull:false},
    quantity:{type:DataTypes.INTEGER, allowNull:false},
    price:{type:DataTypes.INTEGER, allowNull:false},
    img:{type:DataTypes.STRING, allowNull:false},
})
const Request = sequelize.define('request', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true,},
    productName:{type:DataTypes.STRING, allowNull:false},
    quantity:{type:DataTypes.INTEGER, allowNull:false},
    status:{type:DataTypes.STRING, allowNull:false},
})

Products.hasMany(Request)
Request.belongsTo(Products, {
    foreignKey: 'productName'
})

module.exports = {
    Worker, Products, Request
}
