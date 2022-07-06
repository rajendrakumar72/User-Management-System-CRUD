const mongoose=require('mongoose');

const connectionDB=async()=>{
    //mongoDB Connection String
    try {
      const con=await mongoose.connect(process.env.MONGO_URI,{
       
      });  

      console.log(`mongoDB Connected :${con.connection.host}`);

    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports=connectionDB 