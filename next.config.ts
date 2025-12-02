import type { NextConfig } from "next";
import { withContentCollections } from "@content-collections/next";

const nextConfig: NextConfig = {
  basePath: process.env.NODE_ENV === "production" ? "/docs" : undefined,
  reactStrictMode: true,
};

// withContentCollections must be the outermost plugin
export default withContentCollections(nextConfig);
