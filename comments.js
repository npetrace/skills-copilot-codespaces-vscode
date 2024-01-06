// Create web server to handle comments

// Load modules
var express = require('express');
var router = express.Router();

// Load models
var Comment = require('../models/comment');

// Comments API
router.route('/')
    // Get all comments
    .get(function(req, res) {
        Comment.find(function(err, comments) {
            if (err) {
                res.send(err);
            }
            res.json(comments);
        });
    })
    // Create a comment
    .post(function(req, res) {
        var comment = new Comment();
        comment.author = req.body.author;
        comment.text = req.body.text;

        comment.save(function(err) {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Comment created!' });
        });
    });

// Comments by ID API
router.route('/:comment_id')
    // Get comment by ID
    .get(function(req, res) {
        Comment.findById(req.params.comment_id, function(err, comment) {
            if (err) {
                res.send(err);
            }
            res.json(comment);
        });
    })
    // Update comment by ID
    .put(function(req, res) {
        Comment.findById(req.params.comment_id, function(err, comment) {
            if (err) {
                res.send(err);
            }
            comment.author = req.body.author;
            comment.text = req.body.text;

            comment.save(function(err) {
                if (err) {
                    res.send(err);
                }
                res.json({ message: 'Comment updated!' });
            });
        });
    })
    // Delete comment by ID
    .delete(function(req, res) {
        Comment.remove({
            _id: req.params.comment_id
        }, function(err, comment) {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Successfully deleted' });
        });
    });

// Export router
module.exports = router;
