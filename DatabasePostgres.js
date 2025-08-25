import sql from './db.js'

export class Database {
    async create(logs) {
        const { pathname, method, status_code, duration, started_at } = logs

        await sql`insert into logs (pathname, method, status_code, duration, started_at) VALUES (${pathname}, ${method}, ${status_code}, ${duration}, ${started_at})`
    }

    async list() {
        const data = await sql`select * from logs`
        return data
    }
}