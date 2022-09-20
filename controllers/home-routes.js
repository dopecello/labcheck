const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('homepage');
});

router.get('/register', (req, res) => {
    res.render('register');
  });

  router.get('/login', (req, res) => {
    res.render('login');
  });

  router.get('/product', (req, res) => {
    res.render('product');
  });




module.exports = router;