const count = require('../../controllers/post/count');
const getAll = require('../../controllers/post/getAll');
const responseHelper = require('../../helpers/responseHelper');

const getOffset = (limit, page) => {
    if (!limit || !page) return 0;
    return limit * (page - 1);
};

const getOptionsSearch = (options) => {
    const filters = {};
    const modifiers = {};

    if (options['order-by'] === 'visits')
        modifiers.sort = {
            countVisits: options['order-dir'] ? options['order-dir'] : -1,
        };

    if (options['order-by'] === 'comments')
        modifiers.sort = {
            countComments: options['order-dir'] ? options['order-dir'] : -1,
        };

    if (!options['order-by'])
        modifiers.sort = {
            createdAt: -1,
        };

    modifiers.limit = options.limit ? Number(options.limit) : undefined;
    modifiers.page =
        options.page && options.page > 0 ? Number(options.page) : undefined;

    modifiers.offset = modifiers.limit
        ? getOffset(modifiers.limit, modifiers.page)
        : undefined;

    if (options.title) filters.title = new RegExp(options.title, 'i');

    if (options['is-visible']) filters.isVisible = options['is-visible'];

    if (options['author-id']) filters.author = options['author-id'];
    if (options['category-id']) filters.category = options['category-id'];

    if (options.exclude) filters._id = { $ne: options.exclude };

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
        if (modifiers.page) {
            countPosts = await count(filters);

            data.pagination = {
                total_records: countPosts,
                current_page: modifiers.page,
                total_pages: getTotalPages(modifiers.limit, countPosts),
            };
        }

        return responseHelper(res, {
            statusCode: 200,
            data,
        });
    } catch (error) {
        console.log(error);
        return next(error);
    }
};

module.exports = getAllHandler;
