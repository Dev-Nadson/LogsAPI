import { fastify } from 'fastify'

const server = fastify()

server.get('/', async () => {

})

server.listen({
    port: 5050
})