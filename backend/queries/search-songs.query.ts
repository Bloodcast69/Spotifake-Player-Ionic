import express from 'express';
import { PoolConfig } from './pool-config';

export class SearchSongsQuery {
    public getSongsSearch = (req: express.Request, res: express.Response) => {
        const pool = new PoolConfig().pool;
        const { query } = req.query;

        pool.query(`SELECT * FROM songs WHERE lower(albumname || albumartist || songname) LIKE lower('%${query}%');`, ((err: any, result: any) => {
            if (err) {
                throw err;
            }
            const songsListMapped = result.rows.map((song: any) => ({
                albumName: song.albumname,
                albumArtist: song.albumartist,
                coverSrc: song.coversrc,
                songAddress: song.songaddress,
                songName: song.songname
            }));
            res.send(songsListMapped);
        }));
    }
}

export default new SearchSongsQuery();
