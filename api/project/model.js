const db = require('../../data/dbConfig');

function getAll() {
    return db('projects');
}

async function getById(project_id) {
    return db('projects')
    .where({ project_id })
    .first();
}

async function create(project) {
    const id = await db('projects')
        .insert(project)

    return getById(id);
}

module.exports = {
    getAll,
    getById,
    create
};
