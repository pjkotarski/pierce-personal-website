import Head from 'next/head'
import { About } from '../components/About/About.component';
import { Code } from '../components/Code/Code.component';
import { Contact } from '../components/Contact/Contact.component';
import { Landing } from '../components/Landing/Landing.component';
import { More } from '../components/More/More.component';
import { Template } from '../components/Template/Template.component'

export default function Home() {
  return (
    <div>
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
          <More/>
        </Template>

    </div>
  )
}

/*
export async function getStaticProps() {
  const spotify_data = await getTopArtists();

  return {
    props: {
      spotify_data
    }
  }
}*/