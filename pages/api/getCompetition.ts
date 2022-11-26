import type, { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { SanityClient } from "next-sanity";
import { sanityClient } from "../../sanity";
const query = groq`
    *[_type== "competition"]
    
`;
type Data = {
  competition: Competition[],
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const competition: Competition[] = await sanityClient.fetch(query);
  res.status(200).json({ competition });
}
