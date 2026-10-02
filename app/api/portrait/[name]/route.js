import { readFile } from "fs/promises";
import path from "path";

const NAMES = new Set(["granite", "pebble", "slate", "flint", "obsidian", "quartz"]);

export async function GET(_request, { params }) {
  const name = params.name;
  if (!NAMES.has(name)) {
    return new Response("Not found", { status: 404 });
  }

  const file = path.join(process.cwd(), "data", "portraits", `${name}.b64.txt`);
  const encoded = await readFile(file, "utf8");
  const bytes = Buffer.from(encoded.trim(), "base64");

  return new Response(bytes, {
    headers: {
      "Content-Type": "image/jpeg",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
