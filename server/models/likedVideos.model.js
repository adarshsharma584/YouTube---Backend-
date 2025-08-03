import mongoose,{Schema} from "mongoose";

const likedVideosSchema = new Schema({
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    videoId: {
      type: Schema.Types.ObjectId,
      ref: 'Video',
      required: true
    },
    likedAt: {
      type: Date,
      default: Date.now
    }
  }, {
    timestamps: true
  });

  export const LikedVideos = mongoose.model("LikedVideos", likedVideosSchema);
