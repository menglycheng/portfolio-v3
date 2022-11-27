export const fetchExperience = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`
  );
  const experience = await res.json();
  console.log(experience);
  return experience;
};
