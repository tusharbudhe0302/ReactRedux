'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();
const config = require('./config');
const fbaurth = require('./server/aurthservice/fbaurth');
server.connection({port: config.port, host: config.host});

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('Hello, world!');
    }
});

server.route({
    method: 'GET',
    path: '/{name}',
    handler: function (request, reply) {
        reply('Hello, ' + encodeURIComponent(request.params.name) + '!');
    }
}),
server.route({
    method: 'GET',
    path: '/getfbfeed/{userID}',
    handler: function (request, reply) {
        console.log(request.params.userID);
        fbaurth.getfbDatagraphAPI(request.params.userID, function (err, ds) {
            if (err) {
                reply({err});
            } else {
                reply({ds});
            }
        })


    }
});
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});