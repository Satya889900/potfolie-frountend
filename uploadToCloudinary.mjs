import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

dotenv.config();

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const publicDir = path.join(process.cwd(), 'public');

// List of all image extensions to look for
const imageExtensions = ['.png', '.jpg', '.jpeg', '.webp', '.gif', '.svg'];

async function uploadImages() {
  try {
    const files = fs.readdirSync(publicDir);
    
    for (const file of files) {
      const ext = path.extname(file).toLowerCase();
      if (imageExtensions.includes(ext)) {
        const filePath = path.join(publicDir, file);
        console.log(`Uploading ${file}...`);
        
        try {
          const result = await cloudinary.uploader.upload(filePath, {
            folder: 'portfolio-frontend',
            public_id: path.basename(file, ext),
            use_filename: true,
            unique_filename: false,
          });
          console.log(`✅ Uploaded ${file}`);
          console.log(`   URL: ${result.secure_url}`);
        } catch (uploadError) {
          console.error(`❌ Failed to upload ${file}:`, uploadError.message);
        }
      }
    }
    console.log('\n🎉 All uploads finished!');
  } catch (error) {
    console.error('Error reading public directory:', error);
  }
}

// Check if credentials are set
if (!process.env.CLOUDINARY_CLOUD_NAME || process.env.CLOUDINARY_CLOUD_NAME === 'your_cloud_name_here') {
  console.error('⚠️ Please set your Cloudinary credentials in the .env file first.');
  process.exit(1);
}

uploadImages();
