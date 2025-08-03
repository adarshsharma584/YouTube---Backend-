import mongoose,{Schema} from "mongoose";

const playlistSchema = new Schema({
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100
    },
    description: {
      type: String,
      trim: true,
      maxlength: 1000
    },
    thumbnail: {
      type: String // URL or Cloudinary path
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    channelId: {
      type: Schema.Types.ObjectId,
      ref: 'Channel',
      required: true
    },
    videos: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Video'
      }
    ],
   visibility: {
      type: String,
      enum: ['public', 'MembersOnly'],
      default: 'public'
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  }, {
    timestamps: true
  });

  export const PlayList = mongoose.model("PlayList", playlistSchema);