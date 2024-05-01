const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: 'public/images/',
    filename: (req, file, cb) => {
        // generar el nombre del archivo
        const { postId } = req.params;
        const ext = path.extname(file.originalname);

        const filename = `${postId}-${Date.now()}${ext}`;

        cb(null, filename);
    },
});

const uploadMiddleware = multer({ storage });

module.exports = uploadMiddleware;
