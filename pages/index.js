import axios from 'axios';
import Head from 'next/head'
import { useEffect, useState } from 'react';
import { About } from '../components/About/About.component';
import { Code } from '../components/Code/Code.component';
import { Contact } from '../components/Contact/Contact.component';
import { Landing } from '../components/Landing/Landing.component';
import { More } from '../components/More/More.component';
import { Template } from '../components/Template/Template.component'

export default function Home({ spotify_data }) {

  const [showMore, setShowMore] = useState(false);

  useEffect(() => {

    console.log('SPOTIFY_DATA', spotify_data);

    if (spotify_data) { 
      setShowMore(true);
    } else { setShowMore(false) }
  }, [spotify_data]);

  return (
    <>
      <Head>
        <title>Pierce Codes</title>
        <meta name="Pierce Kotarski personal site" content="Pierce Kotarski front-end engineer pesonal site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing showMore={showMore}/>
      <Template showMore={showMore}>
        <About/>
        <Code/>
        <Contact/>
        { spotify_data && <More spotify_data={spotify_data}/> }
      </Template>

    </>
  )
}

export async function getStaticProps() {
  
  try {
    const { data: spotify_data } = await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/top-artists`);
    console.log('gotten artists and stuff', spotify_data);
    return {
      props: {
        spotify_data
      }
    }
  } catch(e) {
    const spotify_data = null;
    
    return {
      props: {
        spotify_data
      }
    }

  }
}