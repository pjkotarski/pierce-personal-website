import axios from 'axios';
import { stringify } from 'querystring';

const credentials = {
  clientId: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri: `${process.env.NEXT_PUBLIC_URL}/config`
}

const bufferedCredentials = new Buffer(credentials.clientId  + ':' + credentials.clientSecret).toString('base64');


export const getTopArtists = (access_token) => {
  return axios.get('https://api.spotify.com/v1/me/top/artists?time_range=short_term&limit=30', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${access_token}`
    }
  });
}

export const registerSpotifyUser = (code) => {

  return axios.post('https://accounts.spotify.com/api/token', 
  
    stringify({
      'grant_type': 'authorization_code',
      'code': code,
      'redirect_uri': credentials.redirectUri
    }),

    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${bufferedCredentials}`
      }
    });
}


export const postRefreshToken = (refresh_token) => {
  axios.post('https://accounts.spotify.com/api/token', 
  stringify({
    'grant_type': 'refresh_token',
    'refresh_token': refresh_token
  })
  , { headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': `Basic ${bufferedCredentials}`
  }});
}



