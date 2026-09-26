import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Felix",
    short_name: "Felix",
    description: "CRISPY Felix — conversational AI with connected tools and GitHub editing.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b0f14",
    theme_color: "#0b0f14",
    orientation: "portrait-primary",
    icons: [
      {
        src: "/openai_logo.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
