import mongoose, { Schema } from "mongoose";

const videoSchema = new Schema({

    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    channelId: {
      type: Schema.Types.ObjectId,
      ref: 'Channel',
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: ""
    },
    videoUrl: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String,
      default: "",
      required:true
    },
    tags: [String],
    views: {
      type: Number,
      default: 0
    },
    likes: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }],
    dislikes: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }],
    visibility: {
      type: String,
      enum: ['public', 'MembersOnly'],
      default: 'public'
    },
    duration: {
        type: Number,
        default: 0
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  },{
    timestamps: true,
    toJSON: {
      virtuals: true
    },
    toObject: {
      virtuals: true
    }
  });

  videoSchema.virtual('comments', {
    ref: 'Comment',              
    localField: '_id',           
    foreignField: 'videoId'      
  });

  export const Video = mongoose.model("Video", videoSchema);