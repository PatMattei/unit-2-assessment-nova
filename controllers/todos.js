const express = require('express');
const router = express.Router();

//const ToDo = require('../models/seed.js')
const ToDo = require('../models/todos');

//Index
router.get('/', (req, res) => {
    ToDo.find({}, (error, allToDos) => {
        res.render('Index', {
            toDos: allToDos
        })
    });
});
//New
//Delete
//Update

//CREATE
router.post('/', (req, res) => {
    console.log(req.body)
    ToDo.create(req.body, (error, item) => {
        ToDo.find({}, (error, allToDos) => {
            res.render('Index', {
                toDos: allToDos
            })
        });
    });
});
//Edit
//Show

module.exports = router;