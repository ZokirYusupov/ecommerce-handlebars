var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let products = [
    {
      name: "Iphone 11",
      category: "Mobile",
      description: "Famous and best",
      image: 'https://picsum.photos/300'
    },
    {
      name: "Vivo 31",
      category: "Mobile",
      description: "Best of the best",
      image: 'https://picsum.photos/300'
    },
    {
      name: "Iphone 4",
      category: "Mobile",
      description: "Famous and best",
      image: 'https://picsum.photos/300'
    },
    {
      name: "Iphone 1",
      category: "Mobile",
      description: "Famous and best",
      image: 'https://picsum.photos/300'
    },
  ]
  res.render('index', {
     title: 'Express',
     products
    });
});

module.exports = router;
