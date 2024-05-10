const responseHelper = (res, { statusCode = 200, data }) => {
    return res.status(statusCode).json({
        data,
    });
};

module.exports = responseHelper;
