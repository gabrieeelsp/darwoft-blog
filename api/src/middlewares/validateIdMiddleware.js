const { ObjectId } = require('mongoose').Types;

const validateIdMiddleware = (idName) => {
    return (req, res, next) => {
        const id = req.params[idName];

        try {
            const newObjectId = new ObjectId(id);
            if (!req.objectsId) req.objectsId = {};
            req.objectsId[idName] = newObjectId;

            return next();
        } catch (error) {
            return res
                .status(400)
                .json({ error: { message: `Error tipo Id [${idName}]` } });
        }
    };
};

module.exports = validateIdMiddleware;
