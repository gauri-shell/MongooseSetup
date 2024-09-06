const express = require("express");  // we require a express 
const connectDB = require("./config/db");  // 
const productRoutes = require("./routes/productRoutes");

const app = express();

// Middleware
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Routes
app.use("/", productRoutes);



// method 1 
async function startServer(){
  try{
    const client=await connectDB();
    console.log("connected to database");

    app.listen(1111,()=>{
      console.log("server started on port 1111")
    });

    // Graceful shutdown 
    process.on('SIGINT',async()=>{
      await client.close();
      console.log('mongoDB connection closed')
      process.exit(0);
    });
  }catch(err){
    console.error("failed to start server: ",err);
  }
}
startServer();






// method 2
// // connect to MongoDB and Start server 
// const startServer = async()=>{
//   try{
//     await connectDB(); // wait for the  databse connection to establish 
//     console.log("connected to MongoDB");
  
//   // start the server only after successful connection
//   app.listen(1111,()=>{
//     console.log("server is listening on port 1111");
//   });
//   }catch(err){
//     console.error("failed to connect ot MongoDB",err);
//     process.exit(1);// exit the process if the databse connection fails
//   }
// }
// startServer();
// code



// method 3 
// const  startServer= async()=>{
//   try{
//     await connectDB();
//     app.listen(1111,()=>{
//       console.log("server started on port 1111");
//     });
//   }catch(err){
//     console.error("failed to start server",err)
//   }
// }






// this is same for all Nativedb or mongoose 


