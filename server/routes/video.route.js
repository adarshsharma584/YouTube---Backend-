import express from 'express';
import { uploadVideo, updateVideoThumbnail } from '../controllers/video.controller.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';
import { uploadVideoWithThumbnail, uploadThumbnail } from '../middlewares/multer.middleware.js';

const router = express.Router();

// Protected routes - require authentication
router.use(authMiddleware);

// Upload video with optional thumbnail
router.post('/upload', uploadVideoWithThumbnail, uploadVideo);

// Update video thumbnail
router.patch('/:videoId/thumbnail', uploadThumbnail, updateVideoThumbnail);

export default router;