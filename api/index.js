const server = require('./src/server');

const dbConnect = require('./src/config/mongo');

dbConnect();

const { PORT_INT_API } = process.env;

server.listen(PORT_INT_API, () => {
    // eslint-disable-next-line no-console
    console.log(`Server running on port ${PORT_INT_API}`);
});
