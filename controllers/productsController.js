const Converter = require("csvtojson");
const db = require("../models");
const ObjectID = require('nekodb').client.ObjectID;
const upload = require("express-fileupload")
const Busboy = require('busboy');

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
      .find(req.query).join()
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
  // remove: function(req, res) {
  //   db.Product
  //     .findById({ _id: req.params.id })
  //     .then(dbModel => dbModel.remove())
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // }

  uploadWithCSV: function(req, res) {
    console.log("route hit");
    // console.log(req);
    let busboy = new Busboy({ headers: req.headers });
    if(req){
      let file = req.body;
      console.log(file)
      // console.log(req.body);
      let seller = req.params.userID
      let converter = new Converter({});
      converter.fromString(file)
      .on("json", jsonObj => { //single json object will be emitted for each csv line
          // console.log(jsonObj);
          // Makes an array of keys, to determine what to grab
          let keyArray = Object.keys(jsonObj);
          //uploaded variables default to open strings
          //and change if the incoming CSV has a relevant field
          let uploadedProductName
          let uploadedSKU
          let uploadedUPC
          let uploadedSerialNumber
          let uploadedPrice
          //uploaded values suitable as keywords are pushed to keyWordsArray
          let keyWordsArray = [];


          //------ Searches for the key that contains "sku"
          let sku = keyArray.find( key => {
              return key.match(/sku|SKU/);
          });
          if(sku) {
              // console.log("SKU in this file is: "+ sku);
              // Store the found sku data as uploadedSKU
              uploadedSKU = jsonObj[sku];
            //   console.log("sku: " + uploadedSKU);
              keyWordsArray.push(uploadedSKU);
          };
          //----- Searches for the key that contains a product name or similar
          let productName = keyArray.find( key => {
              return key.match(/name|handle|title|headline/gi);
          });
          if(productName){
              // console.log("'Name' in this file is: "+ productName);
              // Store the found sku data as uploadedSKU
              uploadedProductName = jsonObj[productName];
            //   console.log("productName: " + uploadedProductName);
              keyWordsArray.push(uploadedProductName);
          };
          //----- Searches for the key that contains a upc code or similar
          let upc = keyArray.find( key => {
              return key.match(/upc|code/gi);
          });
          if(upc){
              // console.log("'Name' in this file is: "+ productName);
              // Store the found sku data as uploadedSKU
              uploadedUPC = jsonObj[upc];
            //   console.log("upc: " + uploadedUPC);
              keyWordsArray.push(uploadedUPC);
          };
          //----- Searches for the key that contains a upc code or similar
          let serialNumber = keyArray.find( key => {
              return key.match(/serial|number|product|id|identification/gi);
          });
          if(serialNumber){
              // console.log("'Name' in this file is: "+ productName);
              // Store the found sku data as uploadedSKU
              uploadedSerialNumber = jsonObj[serialNumber];
            //   console.log("serialNumber: " + uploadedSerialNumber);
              keyWordsArray.push(uploadedSerialNumber);
          };
          //---- Searches for the key that contains a upc code or similar
          let price = keyArray.find( key => {
              return key.match(/price/gi);
          });
          if(price){
              // console.log("'Name' in this file is: "+ productName);
              // Store the found sku data as uploadedSKU
              uploadedPrice = jsonObj[price];
            //   console.log("price: " + uploadedPrice);
          };
          
        //   console.log('keywords: ' + keyWordsArray);
        //   console.log("seller: " + seller);
        //   console.log("--------------------------------")

          //Create the object to store in the database
          product = {
                "productName": uploadedProductName,
                "sku": uploadedSKU,
                "upc": uploadedUPC,
                "serialNumber": uploadedSerialNumber,
                "price": uploadedPrice,
                "seller": seller,
                "keywords": keyWordsArray 
            };
          console.log("--------------------------------")
          console.log(product);
          console.log("--------------------------------")

          db.Product
            .create(product).save()
            .then(dbModel => console.log(dbModel))
            .catch(err => console.log(err));
      }) 
    };        
  }






};