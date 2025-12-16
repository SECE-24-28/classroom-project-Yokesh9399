const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const port=4000;
const app=express();
app.use(cors());
app.use(express.json());
mongoose.connect("mongodb://localhost:27017/mycourse").then(()=>{
    console.log("Connected to MongoDB");
}).catch((err)=>{
    console.log("Error connecting to MongoDB",err);
});
const mycourse=require("./model/CourseModel");

//get all  courses
app.get("/api/courses",async(req,res)=>{
    try{
        const courses=await mycourse.find();
        res.json(courses);
    }catch(err){
        res.status(500).json({message:err.message})
    }
});

//get course by id
app.get("/api/courses/:id",async(req, res)=>{
    try{
        const course=await mycourse.findById(req.params.id);
        if(!course){
            return res.status(404).json({message:"Course not found"});
        }
        res.json(course);
    }catch(err){
        res.status(500).json({message:err.message});
    }
});

//insert course(s)
app.post("/api/courses",async(req,res)=>{
    try{
        const {title,duration}=req.body;
        const course=new mycourse({title,duration});
        await course.save();
        res.status(201).json(course);
    }catch(err){
        res.status(500).json({message:err.message});
    }
});

//update course using put
app.put("/api/courses/:id",async(req,res)=>{
    try{
        const {title, duration}=req.body;
        const updatedcourse=await mycourse.findByIdAndUpdate(req.params.id,{title,duration},{new:true})
            if(!updatedcourse){
                return res.status(404).json({message:"Course not found"});
            }
        res.json(updatedcourse);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
});

//update course using patch
app.patch("/api/courses/:id",async(req, res)=>{
    try{
        const {title, duration}=req.body;
        const updatedcourse=await mycourse.findByIdAndUpdate(req.params.id, {title, duration}, {new:true})
            if(!updatedcourse){
                return res.status(404).json({message:"Course not found"});
            }
             res.json(updatedcourse);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
})

//delete course
app.delete("/api/courses/:id",async(req, res)=>{
    try{
        const deletedcourse=await mycourse.findByIdAndDelete(req.params.id);
        if(!deletedcourse){
            return res.status(404).json({message:"Course not found"});
        }
        res.json({message:"Course deleted successfully"});
    }catch(err){
        res.status(500).json({message:err.message});
    }
});

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
});