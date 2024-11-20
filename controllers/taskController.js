const tasks=require('../models/taskModel')

// ADD-POST
exports.addPostController=async(req,res)=>{
    console.log("inside addPostController");
    const{title,description,startDate,endDate}=req.body
    try{
        const newTask= new tasks({title,description,startDate,endDate})
        await newTask.save()
        res.status(200).json(newTask)
        
    }catch(err){
        res.status(401).json(err)
    }
}

// ALL POSTS -GET
exports.getAllPostsController=async(req,res)=>{
    console.log("inside getAllPostsController");
    try{
        const allTasks=await tasks.find()
        res.status(200).json(allTasks)
    }catch(err){
        res.status(401).json(err)
    }
}

// USER POSTS-GET
exports.getUserPostsController=async(req,res)=>{
    console.log("Inside getUserPostsController");
    const userId=req.userId
    try{
        const userPosts=await posts.find({userId})
        res.status(200).json(userPosts)
    }catch(err){
        res.status(401).json(err)
    }
}

// DELETE POST
exports.deletePostController=async(req,res)=>{
    console.log("Inside deletePostController");
    const {pId}=req.params
    try{
        const removePost=await posts.findByIdAndDelete({_id:pid})
        res.status(200).json(removePost)
    }catch(err){
        res.status(401).json(err)
    }
}

// EDIT POST
exports.editPostController=async(req,res)=>{
    console.log("Inside editPostController ");
    const {pid}=req.params
    try{
        const editPost=await posts.findByIdAndUpdate({_id:pid},{title,description},{new:true})
        await editPost.save()
        res.status(200).json(editPost)
    }catch(err){
        res.status(401).json(err)
    }
}