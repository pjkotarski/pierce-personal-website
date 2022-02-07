
export const SPOTIFY_CLIENT_ID = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
export const SPOTIFY_CLIENT_SECRET = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET;
const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/config/";


const scopes = [
  "user-top-read",
];

export const SPOTIFY_LOGIN_URL = `${authEndpoint}?client_id=${SPOTIFY_CLIENT_ID}&response_type=code&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}`;