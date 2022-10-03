
import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Thomas DGH | Front-End Développeur</title>
        <meta
          name="description"
          content="Développeur React JS / Next JS / WordPress"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
