/**
 * cloudinaryLoader
 * Used by Next.js <Image loader={cloudinaryLoader} src="/filename.ext" ... />
 * src should be a leading-slash path like "/hero_split.png" or "/Projectimg.png"
 * It resolves to:
 *   https://res.cloudinary.com/<cloud>/image/upload/<transforms>/portfolio-frontend/<filename>
 */
export const cloudinaryLoader = ({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) => {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

  // If the image is a direct external URL (like https://i.ibb.co/...), load it directly
  if (src.startsWith("http://") || src.startsWith("https://")) {
    return src;
  }

  // Fallback to local public path during development for instant preview
  if (process.env.NODE_ENV === "development") {
    return src;
  }

  if (!cloudName || cloudName === "your_cloud_name_here") {
    return src;
  }

  // Strip the leading slash to get just the filename (e.g. "hero_split.png")
  const fileName = src.replace(/^\//, "");

  // f_auto lets Cloudinary serve the best format (webp/avif where supported)
  // c_limit prevents upscaling beyond the original dimensions
  const transforms = [
    "f_auto",
    "c_limit",
    `w_${width}`,
    `q_${quality ?? "auto"}`,
  ].join(",");

  return `https://res.cloudinary.com/${cloudName}/image/upload/${transforms}/portfolio-frontend/${fileName}`;
};

/**
 * getCloudinaryUrl – helper for non-<Image> usage (e.g. CSS backgrounds, og:image)
 * Returns the raw Cloudinary URL without resize transforms.
 */
export function getCloudinaryUrl(publicId: string): string {
  if (publicId.startsWith("http://") || publicId.startsWith("https://")) {
    return publicId;
  }
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  if (process.env.NODE_ENV === "development") {
    return `/${publicId}`;
  }
  if (!cloudName || cloudName === "your_cloud_name_here") {
    return `/${publicId}`;
  }
  return `https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto/portfolio-frontend/${publicId}`;
}
