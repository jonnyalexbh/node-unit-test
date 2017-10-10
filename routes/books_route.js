var express = require('express');
var validate = require('express-jsonschema').validate;
var books  = require('../controllers/books_controller');
var router = express.Router();

var booksSchema = require('../schemas/books_schema');

router.route('/books')
    .get(books.getBooks)
    .post(validate({body: booksSchema}), books.createBook)	

router.route('/books/:book_id')
	.get(books.getBookById)
	/*.put(validate({body: applicationsSchema.ApplicationUpdateSchema}), applications.updateApplicationById)
	.patch(applications.updatePartialApplicationById)	
	.delete(applications.deleteApplicationById)*/	
	
module.exports = router