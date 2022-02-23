import { filterArtists } from '../../shared/filterArtists';
import { getTopArtists, postRefreshToken,  } from '../../shared/requests';
import { getSpotifyAuth, saveSpotifyAuth } from '../../shared/storage';

export default async function handler(req, res) {

  const spotifyData = getSpotifyAuth();

  if (spotifyData === -1) {
    res.status(401).send('please authenticate spotify');
    return;
  }

  const access_token = spotifyData.access_token;
  const refresh_token = spotifyData.refresh_token;
  
  let spotify_data;
  try {
    spotify_data = await getTopArtists(access_token);
  } catch(e) {
    console.log('caught the error', e);
  }

  let topArtists;

  if (spotify_data.data && spotify_data.status === 200) {
    topArtists = spotify_data.data;
  } else if (spotify_data.data && spotify_data.status === 401) {

    const refreshTokenResponse = await postRefreshToken(refresh_token);

    if (refreshTokenResponse.data && refreshTokenResponse.status === 200) {
      saveSpotifyAuth({
        refresh_token: refreshTokenResponse.refresh_token,
        access_token: refreshTokenResponse.access_token
      });

      topArtists = await (getTopArtists(refreshTokenResponse.access_token)).data;

    } else throw Error;

  } else {
    throw Error;
  }

  if (topArtists) {
    const filteredArtists = filterArtists(topArtists);
    res.status(200).json(filteredArtists);
  } else {
    res.status(500).message('something went wrong');
  }


}