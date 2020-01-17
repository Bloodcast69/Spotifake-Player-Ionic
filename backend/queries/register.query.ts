import express from 'express';
import {PoolConfig} from './pool-config';

export class RegisterQuery {
    public registerUser = (req: express.Request, res: express.Response) => {
        const pool = new PoolConfig().pool;
        pool.query(`INSERT INTO users(login, password) VALUES ('${req.body.login}', '${req.body.password}');`, ((err: any, result: any) => {
            if (err) {
                throw err;
            }
            res.send({registered: true});
        }));
    };
}

export default new RegisterQuery();
