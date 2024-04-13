const getErrorDBName = (error) => {
    if (error.name === 'MongoServerError') {
        if (error.code === 11000 && error.keyPattern && error.keyPattern.email)
            return 'El email ya existe para otro usuario';
    }
    return null;
};

module.exports = getErrorDBName;
