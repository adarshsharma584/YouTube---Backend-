import mongoose,{Schema} from "mongoose";

const watchLaterSchema = new Schema({
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
    addedAt: {
      type: Date,
      default: Date.now
    }
  }, {
    timestamps: true
  });
  
  export const WatchLater = mongoose.model("WatchLater", watchLaterSchema);