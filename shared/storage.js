import fs from 'fs';
import path from 'path';

export const getSpotifyAuth = () => {

  try { 
    const rawSpotifyAuthJson = fs.readFileSync(path.join(__dirname, '../../spotify.json'), 'utf-8');
    return JSON.parse(rawSpotifyAuthJson);
  } catch(e) {
    console.log('could not parse the spotify auth json');
    throw e;
  }
}

export const saveSpotifyAuth = (spotifyData) => {
  const spotifyDataString = JSON.stringify(spotifyData);
  fs.writeFileSync(path.join(__dirname, '../../spotify.json'), spotifyDataString);
}

export const updateAccessToken = (access_token) => {
  
  const refresh_token = getSpotifyAuth().refresh_token;

  saveSpotifyAuth({
    access_token: access_token,
    refresh_token: refresh_token
  });
}
