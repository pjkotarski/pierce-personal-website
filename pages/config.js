import { useEffect, useState } from "react";
import axios from 'axios';
import styles from '../styles/config.module.scss';
import { useRouter } from "next/router";
import Link from "next/link";
import { SPOTIFY_LOGIN_URL } from "../configs/spotify.config";


export default function Config() {

  const [isAuthenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSucces] = useState(false);
  const { query } = useRouter();

  useEffect(() => {
    if (query.code) {
      triggerSpotifyAuth(query.code);
    }
  }, [query])

  const triggerSpotifyAuth = async(s_code) => {
    try {
      const response = await axios.post('/api/spotify-auth', { code: s_code });
      if (response.status === 200) {
        setShowError(false);
        setShowSucces(true);
      } else {
        setShowError(true);
        setShowSucces(false);
      }
    } catch(e) {
      setShowError(true);
      setShowSucces(false);
    }
  }

  const authenticate = async() => {
    try {
      const response = await axios.post('/api/auth-me', {
        'password': password
      });

      if (response.status === 200) {
        setAuthenticated(true);
      }
    
    } catch(e) {
      setAuthenticated(false);
      setShowError(true);
    }

  }

  return (
    <div className={styles.configContainer}>
      {isAuthenticated ? 
        <div className={styles.innerDiv}>
          <Link href={SPOTIFY_LOGIN_URL}>
            <a className={styles.linkContainer} >Login with spotify</a>
          </Link>
        </div>
        :
        <div className={styles.innerDiv}>
          <h2>Please identify yourself by entering password</h2>
          <input placeholder="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
          <button onClick={authenticate}>login</button>
        </div>
      }
      { showError && <h3>an error has occured</h3> }
      { showSuccess && <h3>you succeeding in updating spotify auth</h3>}
    </div>
  )

}