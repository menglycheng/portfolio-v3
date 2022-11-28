export const fetchPersonalInfo = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getPersonalInfo`
  );
  const personalInfo = await res.json();

  return personalInfo;
};
