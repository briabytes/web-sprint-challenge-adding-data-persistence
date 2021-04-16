const express = require('express');

const Projects = require('./model');
const {
    checkProjectId,
    validateProjectName
} = require('./middleware');

const router = express.Router();

router.get('/', (req, res, next) => {
    Projects.getAll()
        .then(projects => {
            res.json(projects);
        })
        .catch(next);
})

router.get('/:id', checkProjectId, (req, res) => {
    res.status(200).json(req.project);
})

router.post('/', validateProjectName, (req, res, next) => {
    const newProject = req.body

    Projects.create(newProject)
        .then(newProject => {
            res.status(201).json(newProject)
        })
        .catch(next);
})

module.exports = router;
