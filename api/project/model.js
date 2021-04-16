const db = require('../../data/dbConfig');

async function getAll() {
    const projects = await db('projects');

    return projects.map(project => {
        return {
            ...project,
            project_completed: project.project_completed ? true : false
        }
    })
}

async function getById(project_id) {
    return db('projects')
    .where({ project_id })
    .first();
}

async function create(project) {
    const id = await db('projects').insert(project, ['project_id']);
    const newProject = await getById(id);
    return {
        ...newProject,
        project_completed: newProject.project_completed ? true : false
    }
}

module.exports = {
    getAll,
    getById,
    create
};
