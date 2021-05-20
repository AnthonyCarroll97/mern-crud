const express = require('express')
const {getBook, getBooks, createBook, deleteBook, updateBook} = require('../controllers/bookController')


const router = express.Router()

router.get('/', getBooks)
router.get('/:id', getBook)
router.post('/', createBook)
router.put('/:id', updateBook)
router.delete('/:id', deleteBook)

module.exports = router