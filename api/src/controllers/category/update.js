/* eslint-disable no-underscore-dangle */
const mongoose = require('mongoose');
const { categoryModel, postModel } = require('../../models');
const ClientError = require('../../errors/ClientError');

const update = async (id, data) => {
    if (!mongoose.Types.ObjectId.isValid(id)) return null;

    const category = await categoryModel.findById(id);

    if (category.isVisible !== data.isVisible) {
        const postVisibles = await postModel.find({
            category: id,
            isVisible: true,
        });

        if (data.isVisible && !postVisibles.length)
            throw new ClientError(
                422,
                'No se puede publicar esta categoría, no existen publicaciones activas',
            );
        if (!data.isVisible && postVisibles.length)
            throw new ClientError(
                422,
                'No se puede despublicar esta categoría, existen publicaciones activas',
            );
    }

    const resp = await categoryModel.findByIdAndUpdate({ _id: id }, data, {
        new: true,
    });

    return resp;
};

module.exports = update;
