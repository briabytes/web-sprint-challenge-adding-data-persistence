const Project = require('./model');

const checkProjectId = async (req, res, next) => {
    const { id } = req.params
    try {
        const project = await Project.getById(id)
        if(project) {
            req.project = project
            next();
        }else {
            res.status(404).json({
                message: `project with id: ${id} not found`
            });
        }
    }catch(error) {
        next(error);
    }
}

const validateProjectName = async (req, res, next) => {
    const { project_name } = req.body
    try {
        if(!project_name || 
            project_name === '' || 
            typeof(project_name) !== 'string') {
                res.status(400).json({
                    message: 'invalid project name'
                });
        }else {
            next();
        }
    }catch(error) {
        next(error);
    }
}

module.exports = {
    checkProjectId,
    validateProjectName
};
