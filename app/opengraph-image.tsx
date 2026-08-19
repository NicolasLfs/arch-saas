import { createOgImage, ogImageSize } from "@/lib/og-image";

export const alt = "ArchSaaS - diagnóstico técnico para SaaS";
export const size = ogImageSize;
export const contentType = "image/png";

export default function Image() {
  return createOgImage();
}