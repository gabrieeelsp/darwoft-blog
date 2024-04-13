/* eslint-disable no-console */
const mongoose = require('mongoose');

const dbConnect = () => {
    const { DB_URI } = process.env;
    mongoose
        //
        .connect(DB_URI)
        .then(() => {
            console.log('**** CONEXION CORRECTA ****');
        })
        .catch((error) => {
            console.log(error);
            console.log('**** ERROR DE CONEXION ****');
        });
};

module.exports = dbConnect;
