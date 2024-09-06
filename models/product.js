// const mongoose = require("mongoose");

// const productSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   price: { type: Number, required: true },
//   description: { type: String },
//   imageUrl: { type: String },
// });

// module.exports = mongoose.model("Product", productSchema);


// method 2 
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
 title:{
  type:String,
  required:[true,"title is required"], 
  minlength:[3,"title must be at least 3 characters long"],
  maxlength:[50,"Title must be less then 50 character "]
 },
 price:{
  type:Number,
  required:[true,"price is required "],
  min:[0,"price must be a positive number"]
 },
 description:{
  type:String,
  maxlength:[5000,"description cannot excee 500 characers"]
 },
 imageUrl:{
  type:String,
  // validate:{
  //   validator:(v)=>{
  //     return /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif))$/i.test(v);
  //   },
  //   message: props => `${props.value} is not a valid image URL!`
  // }
 }


});

module.exports = mongoose.model("Product", productSchema);


