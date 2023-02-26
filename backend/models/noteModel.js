const mongoose=require('mongoose')

const noteSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    imageURL:
    {
        type:String,
        required:true

    },
    id: {
      type:Number,
     
      
    },
  },
  {
    timestamps: true,
  }
);

const Note = mongoose.model("Note", noteSchema);

module.exports=Note;