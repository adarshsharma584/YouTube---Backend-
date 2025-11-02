// multer.middleware.js
import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Different directories for different file types
        let uploadDir = 'uploads/';

        switch (file.fieldname) {
            case 'avatar':
                uploadDir += 'avatars/';
                break;
            case 'video':
                uploadDir += 'videos/';
                break;
            case 'thumbnail':
                uploadDir += 'thumbnails/';
                break;
            default:
                uploadDir += 'others/';
        }

        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});

// File filter function
const fileFilter = (req, file, cb) => {
    if (file.fieldname === "avatar") {
        // Accept only image files for avatars
        if (!file.mimetype.startsWith('image/')) {
            return cb(new Error('Only image files are allowed for avatars!'), false);
        }
    } else if (file.fieldname === "video") {
        // Accept only video files
        if (!file.mimetype.startsWith('video/')) {
            return cb(new Error('Only video files are allowed!'), false);
        }
    } else if (file.fieldname === "thumbnail") {
        // Accept only image files for thumbnails
        if (!file.mimetype.startsWith('image/')) {
            return cb(new Error('Only image files are allowed for thumbnails!'), false);
        }
    }
    cb(null, true);
};

// Create separate multer instances to enforce per-file limits
const uploadAvatarInstance = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 2 * 1024 * 1024 } // 2MB
});

const uploadThumbnailInstance = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 5 * 1024 * 1024 } // 5MB
});

const uploadVideoInstance = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 200 * 1024 * 1024 } // 200MB
});

export const uploadAvatar = uploadAvatarInstance.single('avatar');
export const uploadVideo = uploadVideoInstance.single('video');
export const uploadThumbnail = uploadThumbnailInstance.single('thumbnail');
export const uploadVideoWithThumbnail = uploadVideoInstance.fields([
    { name: 'video', maxCount: 1 },
    { name: 'thumbnail', maxCount: 1 }
]);