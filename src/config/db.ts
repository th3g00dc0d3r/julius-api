import { createConnection } from 'typeorm'

export const connectServerToDB = async () => {
    const conn = await createConnection();
    console.log(`App connected do DB ${conn.options.database}`);

    process.on('SIGINT', () => {
        conn.close().then(() => console.log("Connection to DB closed"))
    });
}