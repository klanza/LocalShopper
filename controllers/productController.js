const db = require("../models");
const ObjectID = require('nekodb').client.ObjectID;

// Defining methods for the productsController
// add more methods later!!!!
module.exports = {

  findByKeyword: function(req, res) {
    db.Product
      .find({keyword: req.params.keyword})
      .then(dbModel => {
        // console.log(dbModel);
        res.json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },
  findAll: function(req, res) {
    db.Product
      .find(req.query)
      // .sort({ _id: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByProductName: function(req, res) {
    db.Product
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Product
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Product
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Product
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};