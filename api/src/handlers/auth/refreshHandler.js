const refresh = require('../../controllers/user/refresh');

const refreshHandler = async (req, res) => {
    let token = req.headers.authorization;

    if (!token)
        return res
            .status(401)
            .json({ error: { message: 'Token no proporcionado.' } });
    token = token.split(' ').pop();
    try {
        const resp = await refresh(token);

        return res.status(200).json({
            message: 'Token refresh satisfactorio.',
            data: { token: resp },
        });
    } catch (error) {
        return res.status(401).json({ error: error.message });
    }
};

module.exports = refreshHandler;
