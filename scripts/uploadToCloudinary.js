import { v2 as cloudinary } from "cloudinary";
import { readdirSync } from "fs";
import { join } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configuration
cloudinary.config({
  cloud_name: process.env.VITE_CLOUDINARY_CLOUD_NAME || "djkl22q57",
  api_key: process.env.VITE_CLOUDINARY_API_KEY || "632767541835196",
  api_secret: process.env.VITE_CLOUDINARY_API_SECRET,
});

async function uploadGalleryImages() {
  const galleryPath = join(__dirname, "../public/gallery");
  const files = readdirSync(galleryPath).filter(
    (file) =>
      file.endsWith(".jpg") || file.endsWith(".jpeg") || file.endsWith(".png")
  );

  console.log(`Found ${files.length} images to upload...\n`);

  const uploadedUrls = [];

  for (const file of files) {
    try {
      const filePath = join(galleryPath, file);
      const publicId = `portfolio/gallery/${file.split(".")[0]}`;

      console.log(`Uploading ${file}...`);

      const uploadResult = await cloudinary.uploader.upload(filePath, {
        public_id: publicId,
        folder: "portfolio/gallery",
        overwrite: true,
      });

      // Generate optimized URL
      const optimizedUrl = cloudinary.url(uploadResult.public_id, {
        fetch_format: "auto",
        quality: "auto",
        crop: "limit",
        width: 1200,
      });

      uploadedUrls.push({
        filename: file,
        url: optimizedUrl,
        publicId: uploadResult.public_id,
      });

      console.log(`✓ Uploaded: ${file}`);
      console.log(`  URL: ${optimizedUrl}\n`);
    } catch (error) {
      console.error(`✗ Failed to upload ${file}:`, error.message);
    }
  }

  console.log("\n=== Upload Complete ===");
  console.log("\nCopy these URLs to update your GallerySection.tsx:\n");
  uploadedUrls.forEach(({ filename, url }) => {
    console.log(`${filename}:`);
    console.log(`  "${url}"`);
  });
}

uploadGalleryImages().catch(console.error);
