const getErrorDBName = (error) => {
    if (error.name === 'MongoServerError') {
        if (error.code === 11000 && error.keyPattern) {
            if (error.keyPattern.email)
                return 'El email ya existe para otro usuario';
            if (error.keyPattern.title)
                return 'El título ya existe para otro post';
            if (error.keyPattern.name)
                return 'El nombre ya existe para otra categoría';
        }
    }

    return null;
};

module.exports = getErrorDBName;
