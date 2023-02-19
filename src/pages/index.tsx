import ContentTile from "@/components/ContentTile";
import Header from "@/components/Header";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import spotifyLogo from "../../public/spotifyLogo.png";
import SpotifyInfo from "@/components/SpotifyInfo";


const Home: NextPage = () => {
  const spotify = (
    <Image
      src={spotifyLogo}
      width="300"
      height="300"
      className="w-20 h-20 rounded-full shadow-lg shadow-neonblue-300"
      alt="spotify logo"
    />
  );
 

  return (
    // set universal format to be grid of different boxes
    // create row that has just one element that is the your name and contact info
    // make it as easy as possible to add boxes so code is cleaner
    // I should be creating a separate tile component that I can just add to the page

    <div>
      <Head>
        <title>Scott Guidotti&apos;s Website </title>
      </Head>

      <div className=" w-full h-screen bg-background">
        <Header />
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-3 gap-4">
            <SpotifyInfo/>
            <div className="col-span-2">
            <ContentTile
              contentLogo={spotify}
              name="Spotify Interactions"
              description="Come play around with me using the spotify api 
              I want you to suggest songs, look at my recently played and maybe ask open ai what song you should reccomend me"
            />
            </div>
            <ContentTile name="About Me" description="testing 123" />
            <ContentTile name="About Me" description="testing 123" />
            <ContentTile name="About Me" description="testing 123" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
