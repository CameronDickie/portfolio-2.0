import Head from "next/head";
import Hero from "../components/Hero";
import Carousel from "../components/Carousel";
import Summary from "../components/Summary";
// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import "@fortawesome/fontawesome-svg-core/styles.css";
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; /* eslint-disable import/first */

export default function Home() {
  return (
    <div className="bg-gray-100 h-screen">
      <Head>
        <title>cd</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      {/* <Carousel /> */}
      <Summary />
    </div>
  );
}
