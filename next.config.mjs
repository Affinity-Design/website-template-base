import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const templateRoot = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  turbopack: {
    root: templateRoot
  }
};

export default nextConfig;
