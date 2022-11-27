import Head from "next/head";
import NavBar from "../components/Navbar";
import Profile from "../components/Profile";
import BtnProject from "../components/BtnProject";
import Work from "../components/Work";
import Footer from "../components/Footer";
import { fetchExperience } from "../utils/fetchExperience";

const Home = ({ experiences }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-[#0a0d14]">
      <Head>
        <title>メングリ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="md:max-w-screen-md flex w-full flex-1 flex-col items-center  px-20 text-center text-white">
        <NavBar />
        <Profile />
        <BtnProject />
        <Work experiences={experiences} />
        <Footer />
      </main>
    </div>
  );
};

export default Home;

export async function getServerSideProps() {
  const experiences = await fetchExperience();

  // console.log()
  return {
    props: {
      experiences,
    },
  };
}
