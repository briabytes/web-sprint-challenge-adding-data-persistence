// build your `/api/tasks` router here
const express = require('express');
const router = express.Router();

const Tasks = require('./model');
const { checkTaskBody } = require('./middleware');

router.get('/', async (req, res, next) => {
    try {
        const t = await Tasks.get();
        res.json(t);
    } catch(e) {
        next(e);
    }
});

router.post('/', checkTaskBody, async (req, res, next) => {
    try {
        const t = await Tasks.create(req.body);
        res.json(t);
    } catch(e) {
        next(e);
    }
});

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
      error: err.message,
      stack: err.stack,
    })
  });


module.exports = router;