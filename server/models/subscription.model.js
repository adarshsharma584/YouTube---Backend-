import mongoose,{Schema} from "mongoose";


const subscriptionSchema = new Schema({
    subscriber: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    channel: {
      type: Schema.Types.ObjectId,
      ref: 'Channel',
      required: true
    },
    subscribedAt: {
      type: Date,
      default: Date.now
    }
  }, {
    timestamps: true
  });
  
  subscriptionSchema.index({ subscriber: 1, channel: 1 }, { unique: true });
  
  export const Subscription = mongoose.model("Subscription", subscriptionSchema);