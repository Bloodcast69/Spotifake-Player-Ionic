import app from './app';
import {Queries} from './queries/queries';

const PORT = 3000;
const queries = new Queries();

app.post('/api/login', queries.LoginQuery().loginUser);
app.post('/api/register', queries.RegisterQuery().registerUser);
app.get('/api/playlist', queries.PlaylistQuery().getPlaylist);

app.listen(PORT, () => {
    console.log(`Express server listening on port: ${PORT}`);
});
