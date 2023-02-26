const mongoose=require('mongoose')

const FoodSchema = new mongoose.Schema ({
    title :
    {
        type:String,
        required:true
    },
   
    imageURL:
    {
        type:String,
        required:true

    }
})

const Food = mongoose.model("FoodData",FoodSchema)
module.exports=Food

