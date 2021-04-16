const Task = require('./model');

const checkTaskId = async (req, res, next) => {
    const { id } = req.params
    try {
        const task = await Task.getById(id)
            if(task) {
                req.task = task
                next();
            }else {
                res.status(404).json({
                    message: `task with id: ${id} not found`
                });
            }
    }catch(error) {
        next(error);
    }
}

const validateTaskBody = async (req, res, next) => {
    const { 
        task_description,
        project_id } = req.body

    try {
        if(!task_description ||
            task_description === '' ||
            typeof(task_description) !== 'string') {
                res.status(400).json({
                    message: 'task description invalid'
                });
        }if(!project_id) {
            res.status(400).json({
                message: 'task invalid'
            });
        }else {
            next();
        }
    }catch(error) {
        next(error);
    }
}

module.exports = {
    checkTaskId,
    validateTaskBody
};
