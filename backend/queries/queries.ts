import {LoginQuery} from './login.query';
import {RegisterQuery} from './register.query';
import {PlaylistQuery} from './playlist.query';

export class Queries {
    public LoginQuery() {
        const loginQuery = new LoginQuery();
        return loginQuery;
    }

    public RegisterQuery() {
        const registerQuery = new RegisterQuery();
        return registerQuery;
    }

    public PlaylistQuery() {
        const playlistQuery = new PlaylistQuery();
        return playlistQuery;
    }
}

export default new Queries();

