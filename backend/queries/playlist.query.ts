import express from 'express';
import { PoolConfig } from './pool-config';

export class PlaylistQuery {
    public getPlaylist = (req: express.Request, res: express.Response) => {
        const pool = new PoolConfig().pool;
        pool.query(`SELECT * FROM playlist;`, ((err: any, result: any) => {
            if (err) {
                throw err;
            }
            const playlistMapped = result.rows.map((song: any) => ({
                albumName: song.albumname,
                albumArtist: song.albumartist,
                coverSrc: song.coversrc,
                songAddress: song.songaddress,
                songName: song.songname
            }));
            res.send(playlistMapped);
        }));
    }
}

export default new PlaylistQuery();
