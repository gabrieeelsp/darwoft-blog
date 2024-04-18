class ClientError extends Error {
    constructor(statusCode, message, data) {
        super(message);
        this.statusCode = statusCode || 400;
        this.name = 'ClientError';
        this.data = data;
    }
}

module.exports = ClientError;
