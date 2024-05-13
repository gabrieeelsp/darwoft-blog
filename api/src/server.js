const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const router = require('./routes');
const ClientError = require('./errors/ClientError');
const getErrorDBName = require('./utils/getErrorDBName');

const server = express();

// server.use((req, res, next) => {
//     setTimeout(() => {
//         next();
//     }, 1000);
// });

server.use(cors());
server.use(morgan('dev'));
server.use(express.json());
server.use(express.static('public'));

server.use('/api', router);

server.use((err, req, res, next) => {
    if (err instanceof ClientError) {
        const error = {
            message: err.message,
        };
        if (err.data) error.data = err.data;
        return res.status(err.statusCode).json({ error });
    }

    // si es un error inesperado se puede realizar algun accion como mandar un mail

    return res.status(500).json({
        error: {
            message: getErrorDBName(err) || err.message,
        },
    });
});

// process.on('unhandledRejection', function (err) {
//     console.log('seeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee');
// });

module.exports = server;
