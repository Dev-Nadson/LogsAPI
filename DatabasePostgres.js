import sql from './db.js'

export class Database {
    async create(logs) {
        if (!Array.isArray(logs) || logs.length === 0) {
            throw new Error('Dados inválidos, não é um array')
        }

        await Promise.all(
            logs.map(async log => {
                const { pathname, method, status_code, duration, started_at } = log
                return sql`
                INSERT INTO logs (pathname, method, status_code, duration, started_at)
                VALUES (${pathname}, ${method}, ${status_code}, ${duration}, ${started_at})
                `
            })
        )
    }
    async list() {
        const data = await sql`select * from logs`
        return data
    }
}