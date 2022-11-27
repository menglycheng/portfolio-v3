import Head from "next/head";
import NavBar from "../components/Navbar";
import Project from "../components/Project";
const index = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-[#0a0d14]">
      <Head>
        <title>メングリ | Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="md:max-w-screen-md flex w-full flex-1 flex-col items-center  px-20 text-center text-white">
        <NavBar />
        <div className="w-full pt-10">
          <h1 className="text-2xl text-left font-bold">My Project</h1>
          <div className="w-fit h-2 bg-blue-500 " />

          <div className="mt-16">
            <Project />
          </div>
        </div>
      </main>
    </div>
  );
};

export default index;
