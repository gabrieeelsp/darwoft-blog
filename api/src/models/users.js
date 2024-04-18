/* eslint-disable func-names */
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        surname: {
            type: String,
        },
        email: {
            type: String,
            unique: true, // crea un indice en la base de dato, no es validacion
        },
        password: {
            type: String,
        },
        tokensRevokedAt: {
            type: Date,
            default: Date.now(),
        },
        roles: [
            {
                _id: false,
                name: {
                    type: String,
                },
                isEnable: {
                    type: Boolean,
                    default: true,
                },
                createdAt: {
                    type: Date,
                    default: Date.now(),
                },
            },
        ],
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('User', UserSchema);
