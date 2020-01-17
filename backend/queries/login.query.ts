import express from 'express';
import { PoolConfig } from './pool-config';

export class LoginQuery {
    public loginUser = (req: express.Request, res: express.Response) => {
        const pool = new PoolConfig().pool;
        pool.query(`SELECT * FROM users WHERE login = '${req.body.login}'`, ((err: any, result: any) => {
            if (err) {
                throw err;
            }
            const { login, password } = result.rows[0];
            res.send({login, password, loggedIn: true});
        }));
    }
}

export default new LoginQuery();
