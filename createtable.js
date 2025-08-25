import sql from './db.js'

sql`
CREATE TABLE logs
(
    id          SERIAL PRIMARY KEY,
    pathname    TEXT        NOT NULL,
    method      TEXT        NOT NULL,
    status_code INT         NOT NULL,
    duration    INT         NOT NULL,
    started_at  TIMESTAMPTZ NOT NULL,
    created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);`
    .then(() => {
        console.log("table created")
    })
