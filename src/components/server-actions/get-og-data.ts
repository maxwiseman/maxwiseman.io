"use server";
import scraperLite from "open-graph-scraper-lite";
import { type OpenGraphScraperOptions } from "open-graph-scraper-lite/dist/lib/types";

export async function getOgData(
  options: OpenGraphScraperOptions & { url: string },
) {
  const page = await fetch(options.url).then((res) => res.text());
  const data = await scraperLite({ html: page, ...options });
  return data;
}
