exports.hello = async (event, context) => {
    const error = true;
    if (error) {
        throw new Error(JSON.stringify({
            statusCode: 404,
            message: "order not found"
        }));
    } else {
        return {
            body: 'Hello from Lambda!',
        };
    }
};