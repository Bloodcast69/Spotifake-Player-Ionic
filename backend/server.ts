import app from './app';
import {Queries} from './queries/queries';

const PORT = 3000;
const queries = new Queries();

app.post('/api/login', queries.LoginQuery().loginUser);
app.post('/api/register', queries.RegisterQuery().registerUser);
app.get('/api/songs', queries.SongsQuery().getSongs);
app.get('/api/search-songs', queries.SearchSongsQuery().getSongsSearch);
app.get('/api/album-info', queries.AlbumInfoQuery().getSongsFromAlbum);

app.listen(PORT, () => {
    console.log(`Express server listening on port: ${PORT}`);
});
