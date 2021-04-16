const db = require('../../data/dbConfig');

function getAll() {
    return db('resources');
}

async function getById(resource_id) {
    return db('resources')
    .where({ resource_id })
    .first();
}

async function getByName(resource_name) {
    return db('resources')
    .where({ resource_name })
    .first();
}

async function create(resource) {
    const id = await db('resources')
        .insert(resource)

    return getById(id);
}

module.exports = {
    getAll,
    getById,
    getByName,
    create
};
