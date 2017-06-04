var Author = require('../models/author');
var Book = require('../models/book')

// Display list of all Authors
exports.author_list = async function(req, res, next) {
  try {
    let authorList = await Author.find().sort([['family_name', 'ascending']]).exec()
    // res.send('223')
    res.render('./catalog/author_list', {title: 'Author List', authorList})
  } catch (e) {
    next(e)
  }
};

// Display detail page for a specific Author
exports.author_detail = async function(req, res) {
  let result = await Promise.all([Author.findById(req.params.id).exec(), Book.find({'author': req.params.id}, 'title summary').exec()])
  res.render('./catalog/authorDetail', {title: 'Author Detail', author: result[0], authorBooks: result[1] })
};

// Display Author create form on GET
exports.author_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Author create GET');
};

// Handle Author create on POST
exports.author_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Author create POST');
};

// Display Author delete form on GET
exports.author_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Author delete GET');
};

// Handle Author delete on POST
exports.author_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Author delete POST');
};

// Display Author update form on GET
exports.author_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Author update GET');
};

// Handle Author update on POST
exports.author_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Author update POST');
};
