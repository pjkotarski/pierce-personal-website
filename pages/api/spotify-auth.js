import { registerSpotifyUser } from '../../shared/requests';
import { saveSpotifyAuth } from '../../shared/storage';

export default async function handler(req, res) {
  
  try {
    const code = req.body.code;
    const response = await registerSpotifyUser(code);
    saveSpotifyAuth({
      access_token: response.data.access_token,
      refresh_token: response.data.refresh_token
    });

    res.status(200).send('success!');

  } catch(e) {

    if (e.response) {
      res.status(500).send('could not get auth from spotify');

    } else {
      console.log('there was another error', e);
    }
  }

}
