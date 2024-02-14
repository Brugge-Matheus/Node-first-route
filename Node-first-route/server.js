// Método Nodejs puro

// import {createServer} from 'node:http'

// const server = createServer((request, response) => {
//     response.write('Hello Word!')

//     return response.end();
// })

// server.listen(3333)
//localhost: 3333


// Metodo com Fastify

import {fastify} from 'fastify'
import {DatabaseMemory} from './data-base-memory.js'

const server = fastify()

const database = new DatabaseMemory();

// POST, https://localhost:3333/videos
// POST, https://localhost:3333/videos/33

// Route Parameter

//Request Body

server.post('/videos', (request, reply) => {

    const {title, description, duration} =  request.body


    database.create({
        title: title,
        description: description,
        duration: duration
    })

    console.log(database.list());

    return reply.status(201).send()
})

server.get('/videos', (request) => {
    const search = request.query.search

    console.log(search);

    const videos = database.list(search)

    return videos


    return videos
})

server.put('/videos/:id', (request, reply) => {
    const videoId = request.params.id
    const {title, description, duration} = request.body

    database.update(videoId, {
        title,
        description,
        duration,
    })

    return reply.status(204).send()
})

server.delete('/videos/:id', (request, reply) => {
    const videoId = request.params.id;

    database.delete(videoId);

    reply.status(204).send();
});

server.listen({
    port: 3333,
})