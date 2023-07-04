const mongoose = require("mongoose")


mongoose.connect("mongodb+srv://chibuezeonyenze123:Pk1jghaofy85p4mP@cluster0.zikfpg2.mongodb.net/")
.then(()=>{console.log("Connected to the DB");})
.catch((error)=>{console.log(error.message)})

