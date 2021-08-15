const db = require('../../database/dbConfig')

module.exports = {
    getClasses,
    getClassById,
    getClassAttendees,
    getClassInstructors,
    addClass,
    updateClass,
    removeClass
}

async function getClasses() {
    return await db('classes as c')
}

async function getClassById(classId) {
    return await db('classes')
        .where('classId', classId)
        .first()
}
//returns students enrolled in class
async function getClassAttendees(id) {
    return await db('classes as c')
        .join('enrolled as e', 'c.classId', 'e.classId')
        .join('users as u', 'u.userId', 'e.userId')
        .select('c.name', 'u.username')
        .where('c.classId', id)
        .where('role', 'student')
}
//returns instructors enrolled in class
async function getClassInstructors(id) {
    return await db('classes as c')
        .join('enrolled as e', 'c.classId', 'e.classId')
        .join('users as u', 'u.userId', 'e.userId')
        .select('c.name', 'u.username')
        .where('c.classId', id)
        .where('role', 'instructor')
}

async function addClass(newClass) {
    const [id] = await db('classes').insert(newClass, 'classId')
    return getClassById(id)
}

async function updateClass(id, changes) {
    return await db('classes')
        .where('classId', id)
        .update(changes)
        .then(count => {
            return count > 0 ? getClassById(id) : null
        })
}

async function removeClass(id) {
    const rmvd = getClassById(id)
    return await db('classes')
        .where('classId', id)
        .del()
        .then(() => {
            return rmvd
        })
}