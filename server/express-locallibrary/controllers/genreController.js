var Genre = require('../models/genre');
const Book = require('../models/book')

// Display list of all Genre
exports.genre_list = async function(req, res) {
  let genreList = await Genre.find().sort([['name', 'ascending']]).exec()
  res.render('./catalog/genreList', {title: 'Genre List', genreList})
};

// Display detail page for a specific Genre
exports.genre_detail = async function(req, res) {
  let results = await Promise.all([Genre.findById(req.params.id).exec(), Book.find({'genre': req.params.id}).exec()])
  res.render('./catalog/genreDetail', {title: 'Genre Detail', genre: results[0], genre_books: results[1]})
};

// Display Genre create form on GET
exports.genre_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre create GET');
};

// Handle Genre create on POST
exports.genre_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre create POST');
};

// Display Genre delete form on GET
exports.genre_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre delete GET');
};

// Handle Genre delete on POST
exports.genre_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre delete POST');
};

// Display Genre update form on GET
exports.genre_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre update GET');
};

// Handle Genre update on POST
exports.genre_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre update POST');
};