import { customAlphabet } from "nanoid";

type ShortLink = {
  shortCode: string;
  shortUrl: string;
};

export default function generateShortLink(host: string): ShortLink {
  // Check if the host includes protocol and is valid
  if (!host || typeof host !== "string") {
    throw new Error("Invalid host provided");
  }

  // Create a nanoid generator with the given alphabet and length of 6
  const nanoid = customAlphabet("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", 6);

  // Generate the short code
  const shortCode = nanoid();

  // Check if the host includes a protocol, and default to https if not
  const protocol = host.startsWith("http://") || host.startsWith("https://") ? "" : "https://";
  
  // Construct the short URL
  const shortUrl = `${protocol}${host}/api/${shortCode}`;

  return {
    shortCode,
    shortUrl,
  };
}
