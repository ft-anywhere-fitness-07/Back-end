module.exports = {isRegisterValid, isLoginValid}

function isRegisterValid(user) {
    return Boolean(user.username &&  user.email && user.password  && user.role && typeof user.password === 'string')
}

function isLoginValid(user) {
    return Boolean(user.username && user.password && typeof user.password === 'string')
}