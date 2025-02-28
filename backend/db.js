const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://user:user@cluster0.xxuhzmu.mongodb.net/medium")

const userSchema = new mongoose.Schema({
    id:{
        type: String,
        default:()=> new mongoose.Types.ObjectId(), 
        unique: true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
    },
    name:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    posts:[{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }]
})

const postSchema = new mongoose.Schema({
    id: { type: String,
        default: () => new mongoose.Types.ObjectId(),
        unique: true
    },
    title:{
        type:String,
        required:true
    },
    content:{
        type : String,
        required:true
    },
    published:{
        type:Boolean,
        default:false
    },
    authorId:{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User", 
        required: true 
    }
        
})

const User = mongoose.model("User",userSchema);

const Post = mongoose.model("Post",postSchema);

module.exports = {
    User,
    Post
}