import cloudinary from './cloudinaryConfig.js';
import fs from 'fs';

export const uploadOnCloudinary = async (localFilePath, folder = "others") => {
    try {
        if (!localFilePath) return null;

        // Upload file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto",
            folder: folder
        });

        // Remove file from local server
        fs.unlinkSync(localFilePath);

        return response;

    } catch (error) {
        // Remove the locally saved temporary file as the upload operation failed
        if (localFilePath) {
            fs.unlinkSync(localFilePath);
        }
        return null;
    }
};