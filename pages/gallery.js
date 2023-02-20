import Head from "next/head";
import React from "react";
import Masonry from "react-masonry-css";
import Event from "../components/Event";
import Navbar from "../components/Navbar";
import { fetchEvent } from "../utils/fetchEvent";
import { fetchGallery } from "../utils/fetchGallery";
import { urlFor } from "../sanity";

const gallery = ({ event, gallery }) => {
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <div className="flex min-h-screen font-poppins  flex-col items-center justify-center py-2 bg-[#0a0d14]">
      <Head>
        <title>メングリ | Gallery</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Event event={event} />
      <main className="md:max-w-screen-md  flex w-full flex-1 flex-col mb-10 items-center  md:px-20 px-10 text-center text-white">
        <Navbar />
        <h1 className="text-2xl font-bold mt-16 mb-10 h-10 text-blue-500">
          My Photography
        </h1>
        <div className="mx-auto ">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="flex flex-wrap -mx-4 my-1"
            columnClassName="px-2 py-2 mb-4 w-full lg:w-1/3 md:w-1/2 sm:w-full"
          >
            {gallery.gallery.map((photo, index) => (
              <img
                key={index}
                src={urlFor(photo.image).url()}
                className="w-full my-3 h-auto rounded-md"
              />
            ))}
          </Masonry>
        </div>
      </main>
    </div>
  );
};

export default gallery;
export async function getServerSideProps({ req, res }) {
  const event = await fetchEvent();
  const gallery = await fetchGallery();

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  return {
    props: {
      event,
      gallery,
    },
  };
}
