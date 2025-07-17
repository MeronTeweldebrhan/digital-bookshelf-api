import Book from '../modles/Book.js'
import express from 'express'

const router =express.Router()

/// Create: Post Book                       MARKED WORKS
router.post ('/',async (req,res)=>{
    try {
        const newbook = await Book.create(req.body)
        res.status(200).json(newbook)
    } catch (error) {
        console.error(error)
        res.status(500).json({error:error.message})
    }
})

/// READ ALL GET                                MARKED WORKS

router.get('/',async (req,res)=>{ 
    try {
        const books = await Book.find()
        res.json(books)
    } catch (error) {
        console.error(error)
        res.status(500).json({error:error.message})
    }
})

/// Read One
router.get('/:id',async(req,res)=>{
    const {id}=req.params
    try {
         const book =await Book.findById(id)
         res.json(book)
    } catch (error) {
        console.error(error)
        res.status(500).json({error:error.message})
    }
})
// Delete                                     MARKED WORKS
router.delete('/:id',async (req,res)=>{
    try {
        const deletbook= await Book.findByIdAndDelete(req.params.id)
        res.status(200).json(deletbook)
    } catch (error) {
        console.error(error)
        res.status(500).json({error:error.message})
    }
})

//Update by Id                                   MARKED WORKS
router.put('/:id',async (req,res)=>{
    const { id }=req.params
try {
        const updated = await Book.findOneAndUpdate({ _id: id },req.body,{
            new:true
        })
        res.status(200).json(updated)
    } catch (error) {
         console.error(error)
        res.status(500).json({error:error.message})
    }
})
/// Update Likes                                     MARKED WORKS  
router.post('/:id/like', async(req, res) => {
    const{value}=req.body

    try {
        const likedBook = await Book.findByIdAndUpdate(
        req.params.id, 
        {$inc: {like: value}},
        { new:true}
        )
        if(!likedBook){
            return res.status(404).json({error: "Book not found"})
        }
        res.json({message: "booked Liked!", likes: likedBook.like})
    } catch (error) {
        console.error(error);
        res.status(500).json({error: error.message})
    }
})

export default router


