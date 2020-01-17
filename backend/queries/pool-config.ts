import {Pool} from 'pg';

export class PoolConfig {
    public pool: Pool;

    constructor() {
        this.pool = new Pool({
            user: 'damian',
            host: 'localhost',
            database: 'spotifake',
            password: '',
            port: 5432
        });
    }
}

export default new PoolConfig().pool;
