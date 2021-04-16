const db = require('../../data/dbConfig');

async function getAll() {
    const tasks = await db('tasks as t')
    .join('projects as p', 'p.project_id', 't.project_id')
    .column('t.task_id',  
        't.task_description', 
        't.task_notes', 
        't.task_completed', 
        'p.project_name', 
        'p.project_description');

    return tasks.map(task => {
        return {
            ...task,
            task_completed: task.task_completed ? true : false
        }
    })
}

async function getById(task_id) {
    return db('tasks')
    .where({ task_id })
    .first();
}

async function create(task) {
    const [id] = await db('tasks').insert(task, ['task_id']);
    const newTask = await getById(id);
    return {
        ...newTask,
        task_completed: newTask.task_completed ? true : false
    }
}

module.exports = {
    getAll,
    getById,
    create
};
