const responseHelper = (res, { statusCode = 200, message, data }) => {
    return res.status(statusCode).json({
        message,
        data,
    });
};

module.exports = responseHelper;
