const Resource = require('./model');

const checkResourceId = async (req, res, next) => {
    const { id } = req.params
    try {
        const resource = await Resource.getById(id)
            if(resource) {
                req.resource = resource
                next();
            }else {
                res.status(404).json({
                    message: `resource with id: ${id} not found`
                });
            }
    }catch(error) {
        next(error);
    }
}

const validateResourceName = async (req, res, next) => {
    const { resource_name } = req.body
    try {
        const resource = await Resource.getByName(resource_name)
            if(resource) {
                res.status(400).json({
                    message: `resource with name: ${resource_name} already exists`
                });
            }if(!resource_name ||
                resource_name === '' ||
                typeof(resource_name) !== 'string') {
                    res.status(400).json({
                        message: 'resource name invalid'
                    });
            }else {
                next();
            }

    }catch(error) {
        next(error);
    }
}

module.exports = {
    checkResourceId,
    validateResourceName
};
