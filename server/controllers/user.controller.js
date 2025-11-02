import { User } from "../models/user.model.js";
import { WatchLater } from "../models/watchLater.model.js";
import { uploadOnCloudinary } from "../utils/uploadOnCloudinary.js";
const getUserProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    if (!userId) {
      return res.status(400).json({ message: "Unauthorized User" });
    }
    const user = await User.findById(userId).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateUserProfile = async (req, res) => {
  try {
    const { username, email } = req.body;
    const userId = req.user.id;
    if (!userId) {
      return res.status(400).json({ message: "Unauthorized User" });
    }

    const updateData = {
      username,
      email,
    };

    // Handle avatar upload if file is provided
    if (req.file) {
      const avatarResponse = await uploadOnCloudinary(req.file.path, "avatars");
      if (avatarResponse) {
        updateData.avatar = avatarResponse.secure_url;
      }
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      updateData,
      { new: true }
    ).select("-password");

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({
      message: "User updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const changePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;
    const userId = req.user.id;
    if (!userId) {
      return res.status(400).json({ message: "Unauthorized User" });
    }
    if (!oldPassword || !newPassword) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const isPasswordValid = await user.comparePassword(oldPassword);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid password" });
    }
    user.password = newPassword;
    await user.save();
    return res.status(200).json({ message: "Password changed successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const userId = req.user.id;
    if (!userId) {
      return res.status(400).json({ message: "Unauthorized User" });
    }
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export {
  getUserProfile,
  updateUserProfile,
  changePassword,
  deleteUser,
};
