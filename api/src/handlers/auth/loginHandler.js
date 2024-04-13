const { matchedData } = require('express-validator');
const login = require('../../controllers/user/login');

const loginHandler = async (req, res) => {
    const data = matchedData(req);

    try {
        const resp = await login(data.email, data.password);

        return res.status(200).json({
            message: 'Login satisfactorio',
            data: resp,
        });
    } catch (error) {
        return res.status(400).json({
            error: {
                message: error.message,
            },
        });
    }
};

module.exports = loginHandler;
