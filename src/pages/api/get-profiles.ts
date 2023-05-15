import { BigQuery } from "@google-cloud/bigquery";
import { NextApiRequest, NextApiResponse } from "next";

const projectId = "worldcoin-on-lens";

const credentials = {
  client_email: process.env.CLIENT_EMAIL,
  private_key: process.env.PRIVATE_KEY.split(String.raw`\n`).join("\n"),
};

const bigquery = new BigQuery({ projectId, credentials });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const query = `
        SELECT *
        FROM \`lens-public-data.polygon.worldcoin_human_check\`
    `;

    const options = {
      query,
      location: "US",
      useLegacySql: false,
    };

    const [job] = await bigquery.createQueryJob(options);
    const [rows] = await job.getQueryResults();

    res.status(200).json({ results: rows });
  } catch (error) {
    console.error("Error running BigQuery query:", error);
    res.status(500).json({ error: "An error occurred while running the query" });
  }
}
