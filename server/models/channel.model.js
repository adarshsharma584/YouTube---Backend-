import mongoose, { Schema } from "mongoose";
   
const channelSchema = new Schema({
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 3
    },
    description: {
      type: String,
      default: ''
    },
    avatar: {
      type: String, // Profile picture URL
      default: ''
    },
    
    subscribers: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }],
    subscribersCount: {
      type: Number,
      default: 0
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  }, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
})


// Videos uploaded to the channel
channelSchema.virtual('videos', {
    ref: 'Video',
    localField: '_id',
    foreignField: 'channelId'
  });
  
  // Playlists created in this channel
  channelSchema.virtual('playlists', {
    ref: 'Playlist',
    localField: '_id',
    foreignField: 'channelId'
  });

  

export const Channel = mongoose.model("Channel", channelSchema);
