const express = require('express');
const router = express.Router();
const Expense = require('./model').Expense;
const User = require('./model').User;
// router param
router.param('uId', (req, res, next, userName) => {
  User.find({}, (err, doc) => {
    if (err) return next(err);
    if (!doc) {
      err = new Error('Document not found');
      err.status = 404;
      return next(err);
    }
    console.log(doc);
    req.userName = userName;
    return next();
  });
});

// question routes
router.get('/:uId', (req, res, next) => {
    Expense.find({userName : req.userName}).exec((err, expenses) => {
    if (err) return next(err);
    res.json(expenses);
  });
});

router.post('/:uId/new', (req, res, next) => {
    if (err) return next(err);
    const expenses = new Expense(req.body);
    expenses.save((err, ) => {
    if (err) return next(err);
    res.status(201);
    Expense.find({userName : req.userName}).exec((err, expenses) => {
    if (err) return next(err);
    res.json(expenses);
      });
  });
});


module.exports = router;
