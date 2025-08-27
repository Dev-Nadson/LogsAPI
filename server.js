import { fastify } from 'fastify'
import { Database } from './DatabasePostgres.js'

const server = fastify()
const db = new Database()

server.get('/logs', async () => {
    const logs = await db.list()
    return logs
})

server.post('/logs/batch', async (req, reply) => {
    const logs = req.body
    await db.create(logs)
    return reply.status(201).send()
})

server.listen({
    port: 5050
})