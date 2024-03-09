const mongoose = require("mongoose");
const uri = "mongodb+srv://rohitjakhmola666:3337254@cluster0.3bbmblk.mongodb.net/food?retryWrites=true&w=majority";
const db = () => {
    mongoose.connect(uri)


        .then(async () => {
            console.log('Connected to MongoDB using Mongoose');

            const schema = new mongoose.Schema({})
            const st = mongoose.model('items', schema);
            const cat = mongoose.model('categories', schema);
            global.category=await cat.find({}).exec();
            global.items = await st.find({}).exec(); // Use async/await with Promises
            // console.log('Retrieved data:',items);
            // console.log('Retrieved data:',category);
  })
        .catch((error) => { console.error('Mongoose connection error:', error);  });
}
module.exports = db;