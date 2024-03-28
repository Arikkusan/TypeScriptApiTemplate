import util from 'util';
import { createPool, Pool } from 'mysql';
import { CreateTables } from "./queries/DatabaseCreation";

/**
 * Executes a database operation with cleanup.
 * @param {Function} handler - The handler function that performs the database operation.
 * @returns {Promise<any>} A promise that resolves with the result of the database operation.
 * @throws {Error} If an error occurs during the database operation.
 */
export async function ExecuteQuery(handler: Function): Promise<any> {
    let pool: Pool | undefined;

    try {

        // make the query async
        pool = getPool();
        const query = util.promisify(pool.query).bind(pool);

        // Create the tables if they don't exist
        await CreateTables(query);

        // then execute the handler function
        return await handler(query);

    } catch (error) {

        console.log(error);
        throw error;

    } finally {

        // Check if the pool is already closed before attempting to close it
        if (pool != undefined) {
            pool.end((err) => {
                if (err) console.log(err);
            });
        }

    }
}

/**
 * Retrieves a connection pool for MySQL database.
 * @returns {Object} The MySQL connection pool.
 */
function getPool(): Pool {
    return createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    });
}