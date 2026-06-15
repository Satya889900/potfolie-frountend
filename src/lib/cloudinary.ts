export function getCloudinaryUrl(publicId: string, fallbackLocalPath: string) {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  
  if (!cloudName || cloudName === 'your_cloud_name_here') {
    return fallbackLocalPath;
  }

  // Generate Cloudinary URL for the portfolio-frontend folder
  // Remove leading slash and extension for the Cloudinary public ID if needed, 
  // but since we uploaded with use_filename: true, it will retain the filename.
  const fileName = fallbackLocalPath.replace(/^\//, '');
  
  return `https://res.cloudinary.com/${cloudName}/image/upload/portfolio-frontend/${fileName}`;
}

export const cloudinaryLoader = ({ src, width, quality }: { src: string; width: number; quality?: number }) => {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  
  if (!cloudName || cloudName === 'your_cloud_name_here') {
    return src;
  }

  // Assuming src is like "/hero_split.png"
  const fileName = src.replace(/^\//, '');
  const params = ['f_auto', 'c_limit', `w_${width}`, `q_${quality || 'auto'}`];
  
  return `https://res.cloudinary.com/${cloudName}/image/upload/${params.join(',')}/portfolio-frontend/${fileName}`;
};
