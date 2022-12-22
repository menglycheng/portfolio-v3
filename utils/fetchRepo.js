export const fetchRepo = async () => {
  const res = await fetch("https://api.github.com/users/menglycheng/repos", {
    next: { revalidate: 10 },

  });

  const repos = await res.json();

  return repos;
};
