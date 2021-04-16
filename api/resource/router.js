const express = require('express');

const Resources = require('./model');
const {
    checkResourceId,
    validateResourceName
} = require('./middleware');

const router = express.Router();

router.get('/', (req, res, next) => {
    Resources.getAll()
        .then(resources => {
            res.json(resources);
        })
        .catch(next);
})

router.get('/:id', checkResourceId, (req, res) => {
    res.status(200).json(req.resource);
})

router.post('/', validateResourceName, (req, res, next) => {
    const newResource = req.body

    Resources.create(newResource)
        .then(newResource => {
            res.status(201).json(newResource)
        })
        .catch(next);
})


module.exports = router;
