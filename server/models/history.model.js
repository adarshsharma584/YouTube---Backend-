import mongoose,{Schema} from "mongoose";

const historySchema = new Schema({
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
    watchedAt: {
      type: Date,
      default: Date.now
    }
  }, {
    timestamps: true
  });

  export const History = mongoose.model("History", historySchema);
