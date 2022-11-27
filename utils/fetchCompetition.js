export const fetchCompetition = async () => {
  const res = await fetch(
    `https://portfolio-v3-diduybptw-mengly19.vercel.app/api/getCompetition`
  );
  const competition = await res.json();

  return competition;
};
