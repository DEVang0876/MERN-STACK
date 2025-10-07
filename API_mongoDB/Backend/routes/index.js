var express = require('express');
var router = express.Router();
var ProductModel = require('../models/Products')



router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/product-api', async function (req, res) {
  try {
    const products = await ProductModel.find();
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});




















router.get('/home', function (req, res, next) {
  res.render('home', { title: 'Home' });
});

router.get('/about', function (req, res, next) {
  res.render('about', { title: 'About' });
});

router.get('/add-product', function (req, res, next) {
  res.render('add-product');
});

router.post('/add-product-process', function (req, res, next) {

  var productdata = {
    pname: req.body.txt1,
    pprice: req.body.txt2,
    pdetails: req.body.txt3,
  }

  var mydata = ProductModel(productdata)
  mydata.save()
    .then(() => {
      res.send("Record Added")
    })
    .catch(err => console.log(err))
});

router.get('/display-product', function (req, res, next) {

  ProductModel.find()
    .then(data => {
      console.log(data)
      res.render('display-product', { mydata: data })
    })
    .catch(err => console.log(err))

});

router.get('/delete-product/:id', function (req, res, next) {

  var id = req.params.id
  ProductModel.findByIdAndDelete(id)
    .then(data => {
      res.redirect('/display-product')
    })
    .catch(err => console.log(err))
});


router.get('/display-product-api', function (req, res, next) {

  ProductModel.find()
    .then(data => {
      console.log(data)
      res.json(data)
    })
    .catch(err => console.log(err))

});

// New: JSON API for React



router.get('/edit-product/:id', function (req, res, next) {
  const id = req.params.id;
  ProductModel.findById(id)
    .then(product => {
      if (!product) return res.status(404).send('Product not found');
      res.render('edit-product', { product });
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Server error');
    });
});


router.post('/edit-product/:id', function (req, res, next) {
  const id = req.params.id;
  const updated = {
    pname: req.body.txt1,
    pprice: req.body.txt2,
    pdetails: req.body.txt3,
  };

  ProductModel.findByIdAndUpdate(id, updated)
    .then(() => {
      res.redirect('/display-product');
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Update failed');
    });
});

module.exports = router;
