const express = require("express");
const {authMiddleware} = require("../middleware");
const { Post } = require("../db");
const router = express.Router();
const zod = require("zod");

const postSchema = zod.object({
    title: zod.string(),
    content: zod.string(),
})
router.post("/",authMiddleware,async(req,res)=>{
    const userId = req.header('userId')
    const body = await req.body;
    const { success } = postSchema.safeParse(body);
    const post = await Post.create({
        title:body.title,
        content:body.content,
        authorId:userId
    })
    return res.json({
        id:post.id
    })
})

router.put("/",authMiddleware,async()=>{
    const userId = req.headers("userId")
    const body = await req.body;
    const post = await Post.updateOne({
        id: body.id,
        authorId: userId
    },{
        title: body.title,
        content: body.content
    });
    return res.json({
        message: "post updated"
    })
})

router.get("/",authMiddleware,async()=>{
    const id = req.param('id');
    const post = await Post.findById(id);
    return res.json(post);
})

router.get("/bulk",authMiddleware,async()=>{
    const posts = await Post.find({});
    return res.json(posts);
})

module.exports = router;