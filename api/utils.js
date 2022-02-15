const requireUser = (req, res, next) => {
    if (!req.user) {
        next({message: 'You must be logged in to perform this action'});
        return;
    }
    next();
}

module.exports = {
    requireUser
}
