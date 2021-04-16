const express = require('express');

const Tasks = require('./model');
const {
    checkTaskId,
    validateTaskBody
} = require('./middleware');

const router = express.Router();

router.get('/', (req, res, next) => {
    Tasks.getAll()
        .then(tasks => {
            res.json(tasks);
        })
        .catch(next);
})

router.get('/:id', checkTaskId, (req, res) => {
    res.status(200).json(req.task);
})

router.post('/', validateTaskBody, (req, res, next) => {
    const newTask = req.body

    Tasks.create(newTask)
        .then(newTask => {
            res.status(201).json(newTask)
        })
        .catch(next);
})

module.exports = router;
