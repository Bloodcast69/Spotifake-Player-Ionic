import {LoginQuery} from './login.query';
import {RegisterQuery} from './register.query';
import {SongsQuery} from './songs.query';
import {SearchSongsQuery} from './search-songs.query';
import {AlbumInfoQuery} from './album-info.query';

export class Queries {
    public LoginQuery() {
        const loginQuery = new LoginQuery();
        return loginQuery;
    }

    public RegisterQuery() {
        const registerQuery = new RegisterQuery();
        return registerQuery;
    }

    public SongsQuery() {
        const songsQuery = new SongsQuery();
        return songsQuery;
    }

    public SearchSongsQuery() {
        const searchSongsQuery = new SearchSongsQuery();
        return searchSongsQuery;
    }

    public AlbumInfoQuery() {
        const albumInfoQuery = new AlbumInfoQuery();
        return albumInfoQuery;
    }
}

export default new Queries();

