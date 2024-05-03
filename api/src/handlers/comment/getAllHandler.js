const count = require('../../controllers/comment/count');
const getAll = require('../../controllers/comment/getAll');
const responseHelper = require('../../helpers/responseHelper');

const getOffset = (limit, page) => {
    if (!limit) return 0;
    return limit * (page - 1);
};

const getOptionsSearch = (options) => {
    const filters = {};
    const modifiers = {};

    modifiers.limit = options.limit ? Number(options.limit) : undefined;
    modifiers.page =
        options.page && options.page > 0 ? Number(options.page) : 1;

    modifiers.offset = modifiers.limit
        ? getOffset(modifiers.limit, modifiers.page)
        : undefined;

    if (options['author-id']) filters.author = options['author-id'];
    if (options['post-id']) filters.category = options['post-id'];

    return {
        filters,
        modifiers,
    };
};

const getTotalPages = (limit, totalRecords) => {
    return Math.ceil(totalRecords / limit);
};

const getAllHandler = async (req, res, next) => {
    try {
        const options = req.query;

        const { filters, modifiers } = getOptionsSearch(options);

        const posts = await getAll(filters, modifiers);

        const data = {
            posts,
        };

        let countPosts = null;
        if (modifiers.limit) {
            countPosts = await count(filters);

            data.pagination = {
                total_records: countPosts,
                current_page: modifiers.page,
                total_pages: getTotalPages(modifiers.limit, countPosts),
            };
        }

        return responseHelper(res, {
            statusCode: 201,
            message: 'Búsqueda Realizada con exito',
            data,
        });
    } catch (error) {
        return next(error);
    }
};

module.exports = getAllHandler;
