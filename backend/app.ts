import express from 'express';
import cors from 'cors';
import * as bodyParser from 'body-parser';

class App {
    public express: express.Application;

    constructor() {
        this.express = express();
        this._config();
    }

    private _config(): void {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({extended: false}));
        this.express.use(cors());
    }

}

export default new App().express;
