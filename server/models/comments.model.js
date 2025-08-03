import mongoose,{Schema} from "mongoose";

const commentSchema = new Schema({
    
    videoId: {
        type: Schema.Types.ObjectId,
        ref: 'Video',
        required: true
      },
      userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
      content: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
      },
      likes: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
      }],
      dislikes: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
      }],
      replies: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
      }],
      parentComment: {
        type: Schema.Types.ObjectId,
        ref: 'Comment',
        default: null
      },
      createdAt: {
        type: Date,
        default: Date.now
      }
    }, {
      timestamps: true,
      toJSON: { virtuals: true },
      toObject: { virtuals: true }
});

commentSchema.virtual('replies', {
    ref: 'Comment',              
    localField: '_id',           
    foreignField: 'parentComment' 
  });

commentSchema.virtual('likes', {
    ref: 'User',              
    localField: '_id',           
    foreignField: 'likes' 
  });

commentSchema.virtual('dislikes', {
    ref: 'User',              
    localField: '_id',           
    foreignField: 'dislikes' 
  });

export const Comment = mongoose.model("Comment", commentSchema);
