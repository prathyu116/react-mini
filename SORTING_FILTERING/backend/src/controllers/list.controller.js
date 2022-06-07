const express=require("express")
const List = require("../models/listing.model")

const router=express.Router()


router.get('/list',async(req,res)=>{
    try {
        let page=req.query.page ||1
        let pagesize=req.query.pagesize||5
        let filter=req.query.filter
        let sort=req.query.sort
        const skip=(page-1)*pagesize;
        if(filter!=="all"){
        const list=await List.find({Type:{$eq:filter}}).skip(skip).limit(pagesize).sort({Year:sort}).lean().exec()
        const total_pages=Math.ceil((await List.find({Type:{$eq:filter}}).countDocuments())/pagesize)
        return res.send({total_pages,list})
        }
        else{
            const list=await List.find().skip(skip).limit(pagesize).sort({Year:sort}).lean().exec()
            const total_pages=Math.ceil((await List.find().sort({Year:sort}).countDocuments())/pagesize)
          
            return res.send({total_pages,list})
           
        }
    } 
    catch (error) {
        res.send(error)
    }
})

module.exports=router