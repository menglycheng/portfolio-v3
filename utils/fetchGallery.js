export const fetchGallery = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getGallery`,
    { next: { revalidate: 10 } }
  );
  const gallery = await res.json();

  return gallery;
};
