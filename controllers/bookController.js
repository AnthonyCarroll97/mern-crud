const Book = require('../models/Book')

async function getBooks(req, res){
    try{
        const books = await Book.find()
        res.status(200).send(books)
    } catch(error){
        res.status(500).send(e)
    }
}

async function getBook(req, res){
    console.log(req.params.id)
    try{
        console.log("a")
        const book = await Book.findById(req.params.id).exec()
        res.status(200).send(book)
    }catch(error){
        res.status(404).json({error: e.message})
    }
}

async function createBook(req, res){
    try{
        const book = await Book.create(req.body)
        res.status(201).json(book)
    }catch(error){
        res.status(500).json({error: error.message})
    }
}

async function updateBook(req,res){
    try{
        const newBook = await Book.findByIdAndUpdate(req.params.id, req.body,{new: true})
        res.status(200).json(newBook)
    }catch(error){
        res.status(500).json({error: error.message})
    }
}

async function deleteBook(req, res){
    try{
        await Book.findByIdAndDelete(req.params.id, req.body)
        res.status(200).json({message: "Book succesfully deleted"})

    } catch(error){
        res.status(500).json({error: error.message})
    }
}
module.exports = {getBooks, getBook, createBook, updateBook, deleteBook}