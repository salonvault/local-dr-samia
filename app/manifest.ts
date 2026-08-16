import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dr Samia Skin Clinic",
    short_name: "Dr Samia",
    description: "Consultation-led skin, hair, laser, and aesthetic care in Garden Town, Gujranwala.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#FFF8F6",
    theme_color: "#DF596B",
  };
}
