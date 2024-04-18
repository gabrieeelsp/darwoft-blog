const getOneById = require('../../controllers/post/getOneById');

const getOneByIdHamdler = async (req, res) => {
    const { postId } = req.objectsId;

    try {
        const post = await getOneById(postId);
        if (!post) throw new Error('Post no encontrado');
        return res.status(200).json({ message: 'Post Encontrado', data: post });
    } catch (error) {
        return res.status(400).json({
            error: {
                message: error.message,
            },
        });
    }
};

module.exports = getOneByIdHamdler;
