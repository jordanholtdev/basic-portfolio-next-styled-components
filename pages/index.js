import Head from "next/head";
import Layout from "../components/Layout";
import IntroSection from "../components/IntroSection/index";
import ProjectSection from "../components/ProjectSection/index";
import About from "../components/About/index";
import TechSection from "../components/TechSection/index";
import Contact from "../components/Contact/index";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Jordan Holt</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <IntroSection />
      <ProjectSection />
      <About />
      <TechSection />
      <Contact />
    </Layout>
  );
}
