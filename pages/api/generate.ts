import type { NextApiRequest, NextApiResponse } from "next";
import { isWebUri } from "valid-url";
import { prisma, generateShortLink } from "@/libs/index";

type RequestData = {
  url: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  if (method !== "POST") {
    return res.status(405).json({
      error: "Only POST requests are allowed",
    });
  }

  let requestData: RequestData;

  // Use try-catch to handle JSON parsing errors
  try {
    requestData = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
  } catch (error) {
    return res.status(400).json({
      statusCode: 400,
      error: {
        message: "Invalid JSON in request body",
      },
      data: null,
    });
  }

  const { url } = requestData;

  if (!url || !isWebUri(url)) {
    return res.status(400).json({
      statusCode: 400,
      error: {
        message: "URL is not valid or missing",
      },
      data: null,
    });
  }

  const host = req.headers.host;
  const { shortCode, shortUrl } = generateShortLink(host!);

  try {
    const result = await prisma.$transaction(async (tx) => {
      // Check if the URL already exists
      const originalUrl = await tx.url.findFirst({
        where: {
          originalUrl: url,
        },
      });

      if (originalUrl) return originalUrl;

      // Create new short URL entry
      const newUrl = await tx.url.create({
        data: {
          originalUrl: url,
          shortUrl,
          urlCode: shortCode,
        },
      });

      // Create analytics entry for the new URL
      await tx.urlAnalytic.create({
        data: {
          clicked: 0,
          url: {
            connect: {
              id: newUrl.id,
            },
          },
        },
      });

      return newUrl;
    });

    return res.status(200).json({
      statusCode: 200,
      error: null,
      data: {
        originalUrl: result.originalUrl,
        shortUrl: result.shortUrl,
        code: result.urlCode,
      },
    });
  } catch (error) {
    console.error("Error during URL processing:", error);
    return res.status(500).json({
      statusCode: 500,
      error: {
        message: "An error occurred while processing the request",
      },
      data: null,
    });
  }
}
