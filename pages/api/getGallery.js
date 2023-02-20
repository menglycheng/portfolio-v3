import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
const query = groq`
    *[_type== "gallery"]
    
`;

export default async function handler(req, res) {
  const gallery = await sanityClient.fetch(query);
  res.status(200).json({ gallery });
}
