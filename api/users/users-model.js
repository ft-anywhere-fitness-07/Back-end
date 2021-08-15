const db = require('../../database/dbConfig')

module.exports = {getUsers, add, getById, getBy, update, remove, getUserClasses, dropClass, enroll}

async function getUsers() {
    return await db('users')
}

async function getBy(filter) {
    return await db('users as u')
        .where(filter)
}

async function getById(userId) {
    return await db('users as u')
        .select('u.userId', 'u.username', 'u.email', 'u.role')
        .where('u.userId', userId)
        .first()
}

async function getUserClasses(id) {
    return await db('classes as c')
        .join('enrolled as e', 'c.classId', 'e.classId')
        .join('users as u', 'u.userId', 'e.userId')
        .select('e.id','c.name', 'c.type', 'c.time', 'c.duration', 'c.intensityLvl', 'c.location')
        .where('u.userId', id)

}

async function add(user) {
    const [id] = await db('users').insert(user, 'userId')
    return getById(id)
}

async function update(id, changes) {
    return await db('users')
        .where('userId', id)
        .update(changes)
        .then(count => {
            return count > 0 ? getById(id) : null
        })
}

async function remove(id) {
    const rmvd = getById(id)
    return await db('users')
        .where('userId', id)
        .del()
        .then(() => {
            return rmvd
        })
}

async function enroll(body) {
    return await db('enrolled').insert(body)
}

async function dropClass(id) {
    return await db('enrolled')
        .where('id', id)
        .del()
}