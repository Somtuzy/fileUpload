import { v2 as cloudinary } from "cloudinary";
import { IUpload } from "../api/interfaces/index.interface";

// Configurations for cloudinary where the images are uploaded to get a secure url.
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});

// Exporrts cloudinary upload configuration.
export default async (file: IUpload) => {
    return await cloudinary.uploader.upload(file.path);
}