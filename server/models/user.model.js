import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      match: /^\S+@\S+\.\S+$/, // Email format validation
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    avatar: {
      type: String, // S3/Cloudinary URL
      default: "", // Optional fallback image
    },
    role: {
      type: String,
      enum: ["user", "creator", "admin"],
      default: "user",
    },
    channels: [
      {
        type: Schema.Types.ObjectId,
        ref: "Channel",
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now,
    },
    refreshToken: [
      {
        type: String,
        default: "",
      },
    ],
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateRefreshToken = async function () {
  const refreshToken = await jwt.sign(
    { userId: this._id },
    process.env.JWT_REFRESH_TOKEN_SECRET,
    {
      expiresIn: "7d",
    }
  );
  return refreshToken;
};

userSchema.methods.generateAccessToken = async function () {
  const accessToken = await jwt.sign(
    {
      userId: this._id,
      email: this.email,
      role: this.role,
    },
    process.env.JWT_ACCESS_TOKEN_SECRET,
    {
      expiresIn: "1h",
    }
  );
  return accessToken;
};

export default mongoose.model("User", userSchema);
