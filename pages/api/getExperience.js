import type, { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { SanityClient } from "next-sanity";
import { sanityClient } from "../../sanity";
const query = groq`
    *[_type== "experience"]
    
`;

export default async function handler(req, res) {
  const experiences = await sanityClient.fetch(query);
  res.status(200).json({ experiences });
}
