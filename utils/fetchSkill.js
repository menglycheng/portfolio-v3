export const fetchSkill = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkill`,
    { next: { revalidate: 10 } }
  );
  const skill = await res.json();
  return skill;
};
