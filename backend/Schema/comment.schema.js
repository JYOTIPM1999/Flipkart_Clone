const mongoose = require("mongoose")


const Commentschema = new mongoose.Schema({
 
    product:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Tv"
    },
    comments:[
        {
            user:{
                type:mongoose.Schema.Types.ObjectId,
                ref:'User',
            },
            comment:{type:String,required:true},
            rating:{type:Number,required:true},
            image:{type:String},
            likes:{type:Number},
            dislikes:{type:Number}


        }
    ]

},
{
    timestamps:true,
}
)
