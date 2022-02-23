import axios from 'axios';
import Head from 'next/head'
import { About } from '../components/About/About.component';
import { Code } from '../components/Code/Code.component';
import { Contact } from '../components/Contact/Contact.component';
import { Landing } from '../components/Landing/Landing.component';
import { More } from '../components/More/More.component';
import { Template } from '../components/Template/Template.component'

export default function Home({ spotify_data }) {
  return (
    <>
      <Head>
        <title>Pierce Codes</title>
        <meta name="Pierce Kotarski personal site" content="Pierce Kotarski front-end engineer pesonal site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing/>
      <Template>
        <About/>
        <Code/>
        <Contact/>
        <More spotify_data={spotify_data}/>
      </Template>

    </>
  )
}

export async function getStaticProps() {
  const { data: spotify_data } = await axios.get('http://localhost:3000/api/top-artists');

  return {
    props: {
      spotify_data
    }
  }
}