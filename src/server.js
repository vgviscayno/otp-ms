const Hapi = require('@hapi/hapi');

//Routes

const server = Hapi.server({
    port: process.env.PORT,
    host: 'localhost',
});

server.route(userRoutes);

const init = async () => {
    await server.initialize();
    return server;
};

const start = async () => {
    await server.start();
    console.log(`Server running on ${server.info.uri}`);
    return server;
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

module.exports = {
    init,
    start,
};
