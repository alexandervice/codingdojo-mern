const Author = require("../models/authors.model");
// const mongoose = require('mongoose');


// alternatively it can be done this way, so you don't need to type the module.exports everytime:
module.exports = {
  // CREATE
  createNewAuthor: (req, res) => {
    Author.create(req.body)
      .then(newAuthor => res.json({author: newAuthor}))
      .catch(err => res.status(400).json(err));
  },
  // READ ALL
  findAllAuthors: (req, res) => {
    Author.find().sort({name:1})
      .then(allAuthors => res.json({authors: allAuthors}))
      .catch(err => res.json(err));
  },
  // READ ONE
  findOneAuthor: (req, res) => {
    Author.findOne({ _id: req.params.id })
      .then(oneAuthor => res.json({author: oneAuthor}))
      .catch(err => res.json(err));
      // .catch(err => {
      //   if (err instanceof mongoose.CastError)
      //     return httpResponse.success(res, "Data was not found", null);
      //   return res.json(err)});
  },
  // UPDATE
  updateAuthor: (req, res) => {
    Author.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
      .then(updatedAuthor => res.json({author: updatedAuthor}))
      .catch(err => res.status(400).json(err));
  },
  // DELETE
  deleteAuthor: (req, res) => {
    Author.deleteOne({ _id: req.params.id })
      .then(result => res.json({result: result}))
      .catch(err => res.json(err));
  }
}

// old way of doing it below

// module.exports.findAllProducts = (req, res) => {
//   Product.find()
//     .then((allProducts) => {
//       res.json({ products: allProducts })
//     })
//     .catch((err) => {
//       res.json({ message: 'Something went wrong', error: err })
//     });
// }

// module.exports.findOneProduct = (req, res) => {
//   Product.findOne({ _id: req.params.id })
//     .then(oneProduct => {
//       res.json({ product: oneProduct })
//     })
//     .catch((err) => {
//       res.json({ message: 'Something went wrong', error: err })
//     });}

// module.exports.createNewProduct = (req, res) => {
//   Product.create(req.body)
//     .then(newProduct => {
//       res.json({ product: newProduct })
//     })
//     .catch(err => res.status(400).json(err));
//   }

// module.exports.updateProduct = (req, res) => {
//   Product.findOneAndUpdate(
//     { _id: req.params.id },
//     req.body,
//     { new: true, runValidators: true }
//   )
//     .then(updatedProduct => {
//       res.json({ product: updatedProduct })
//     })
//     .catch(err => res.status(400).json(err));
//   }

// module.exports.deleteProduct = (req, res) => {
//   Product.deleteOne({ _id: req.params.id })
//     .then(result => {
//       res.json({ result: result })
//     })
//     .catch((err) => {
//       res.json({ message: 'Something went wrong', error: err })
//     });}

