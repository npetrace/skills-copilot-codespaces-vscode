// create web server
var express = require('express');
var router = express.Router();

// import comment model
var Comment = require('../models/comment');

// get all comments
router.get('/', function(req, res, next) {
  Comment.find(function(err, comments) {
    if (err) {
      return next(err);
    }
    res.json(comments);
  });
});

// get single comment by id
router.get('/:id', function(req, res, next) {
  Comment.findById(req.params.id, function(err, comment) {
    if (err) {
      return next(err);
    }
    res.json(comment);
  });
});

// create new comment
router.post('/', function(req, res, next) {
  Comment.create(req.body, function(err, comment) {
    if (err) {
      return next(err);
    }
    res.json(comment);
  });
});

// update single comment by id
router.put('/:id', function(req, res, next) {
  Comment.findByIdAndUpdate(req.params.id, req.body, function(err, comment) {
    if (err) {
      return next(err);
    }
    res.json(comment);
  });
});

// delete single comment by id
router.delete('/:id', function(req, res, next) {
  Comment.findByIdAndRemove(req.params.id, req.body, function(err, comment) {
    if (err) {
      return next(err);
    }
    res.json(comment);
  });
});

// export router
module.exports = router;