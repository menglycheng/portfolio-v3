import React from "react";
import Head from "next/head";
import NavBar from "../components/Navbar";
import { BsFacebook, BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import { RocketLaunchIcon } from "@heroicons/react/24/outline";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { fetchCompetition } from "../utils/fetchCompetition";
import { fetchEvent } from "../utils/fetchEvent";
import Event from "../components/Event";
import Footer from "../components/Footer";
import Link from "next/link";
import { fetchAboutProfile } from "../utils/fetchAboutProfile";
import AboutProfile from "../components/AboutProfile";
import Skills from "../components/Skills";
import { fetchSkill } from "../utils/fetchSkill";

const about = ({ competition, event, aboutProfile, skill }) => {
  const [text, count] = useTypewriter({
    words: [
      "Hello, I'm Mengly",
      "សួស្តី ខ្ញុំឈ្មោះ ម៉េងលី",
      "こんにちは、メングリです",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  // console.log()

  return (
    <div className="flex min-h-screen flex-col font-poppins  items-center justify-center py-2 bg-[#0a0d14]">
      <Head>
        <title>メングリ | About</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Event event={event} />
      <main className="md:max-w-screen-md flex  flex-1 flex-col  md:px-20 px-10 text-white">
        <NavBar />
        <AboutProfile aboutProfile={aboutProfile} />
        <h1 className="text-2xl font-bold mt-16 mb-10 h-10 text-blue-500">
          <span> {text}</span> <Cursor cursorColor="white" />
        </h1>
        <div className="text-justify text-sm">
          <p className="py-2">
            A senior student at Kirirom Insitute of Technology, Originally from
            Kampong Cham, Cambodia who interest with web development and data
            Engineering.
          </p>

          <p className="py-2 ">
            Outside of Study and Intership, I love enjoying with nature, and I
            spend my free time exploring new place. Moreover I love playing
            sport such as football, frisbee. I think enjoying with nature and
            sport when i have free time can brain more creative.
          </p>
        </div>
        {/* Skills  */}
        {/* <div>
          <h1 className="text-xl font-bold pt-10">My Skills</h1>
          <Skills skill={skill} />
        </div> */}
        {/* competition */}
        <div>
          <h1 className="text-xl font-bold pt-10">Competition I've join</h1>
          <div className="pt-7 flex flex-row flex-wrap w-full ">
            {competition.competition.map((item, index) => (
              <div key={item._id}>
                <div className="flex m-1  justify-center cursor-pointer hover:text-[#0a0d14] hover:bg-blue-500 items-center border border-blue-500 w-fit px-3 rounded-md">
                  <RocketLaunchIcon className="w-4 h-4 mr-2" />
                  <p className="text-sm">{item.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Contact me */}
        <div>
          <h1 className="text-lg pt-16">Get In Touch With Me</h1>
          <div className="flex justify-left items-center pt-5 ">
            <Link
              target="_blank"
              href="https://www.facebook.com/menglycheng"
              className="border p-1 w-fit rounded-md mr-2 cursor-pointer hover:text-[#0a0d14] hover:bg-blue-500   border-blue-500"
            >
              <BsFacebook className="mx-2 w-5 h-5" />
            </Link>
            <Link
              target="_blank"
              href="https://www.instagram.com/iammengly/"
              className="border p-1 w-fit rounded-md mr-2 cursor-pointer border-blue-500 hover:text-[#0a0d14] hover:bg-blue-500 "
            >
              <BsInstagram className="mx-2 w-5 h-5" />
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/menglycheng"
              className="border p-1 w-fit rounded-md mr-2 border-blue-500 cursor-pointer hover:text-[#0a0d14] hover:bg-blue-500 "
            >
              <BsLinkedin className="mx-2 w-5 h-5" />
            </Link>
            <Link
              target="_blank"
              href="https://github.com/menglycheng"
              className="border p-1 w-fit rounded-md mr-2 border-blue-500 cursor-pointer hover:text-[#0a0d14] hover:bg-blue-500 "
            >
              <BsGithub className="mx-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default about;
export async function getServerSideProps({ req, res }) {
  const competition = await fetchCompetition();
  const event = await fetchEvent();
  const aboutProfile = await fetchAboutProfile();
  const skill = await fetchSkill();
  // console.log()
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  return {
    props: {
      competition,
      event,
      aboutProfile,
      skill,
    },
  };
}
