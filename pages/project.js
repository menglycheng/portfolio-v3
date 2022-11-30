import Head from "next/head";
import Event from "../components/Event";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import Project from "../components/Project";
import { fetchEvent } from "../utils/fetchEvent";
import { fetchProject } from "../utils/fetchProject";
const index = ({ projects, event }) => {
  console.log(projects);
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-[#0a0d14]">
      <Head>
        <title>メングリ | Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Event event={event} />

      <main className="md:max-w-screen-md flex w-full flex-1 flex-col items-center  md:px-20 px-10 text-center text-white">
        <NavBar />
        <div className="w-full pt-10">
          <h1 className="text-2xl text-left font-bold">My Project</h1>
          <div className="w-fit h-2 bg-blue-500 " />

          <div className="mt-16">
            <Project projects={projects} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default index;
export async function getServerSideProps({ req, res }) {
  const projects = await fetchProject();
  const event = await fetchEvent();

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  // console.log()
  return {
    props: {
      projects,
      event,
    },
  };
}
