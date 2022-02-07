import axios from 'axios';
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


/*
  What will the auth process actually look like? 

  1) Prompt the user to log in with spotify
  2) receive the auth code in redirect
  3) make request with auth-token in nodejs
  4) get back a access_token and a refresh_token 
  5) save both access and refresh token to file storage 
  6) make calls with access_token --> no updates yet. 
  7) once access token expires, get refresh_token from file storage 
  8) call refresh endpoint with refresh token
  9) update both acess and refresh tokens
*/