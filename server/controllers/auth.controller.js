import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const generateAccessAndRefreshTokens = async (user) => {
  const refreshToken = await user.generateRefreshToken();
  const accessToken = await user.generateAccessToken();

  return { accessToken, refreshToken };
};

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const existedUser = await User.findOne({ email });
    if (existedUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const user = await User.create({ username, email, password });
    const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
      user
    );

    res.cookie("token", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });
    const createdUser = await User.findById(user._id).select("-password");
    return res.status(201).json({
      message: "User registered successfully",
      user: createdUser,
      accessToken,
      refreshToken,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }
  const isPasswordValid = await user.comparePassword(password);
  if (!isPasswordValid) {
    return res.status(400).json({ message: "Invalid password" });
  }
  const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
    user
  );
  res.cookie("token", refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });
  const userSafe = await User.findById(user._id).select("-password");

  return res.status(200).json({
    message: "User logged in successfully",
    user: userSafe,
    accessToken,
    refreshToken,
  });
};

const logout = async (req, res) => {
  const userId = req.user.id;

  if (!userId) {
    return res.status(400).json({ message: "User not found" });
  }

  const user = await User.findById(userId);
  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  user.refreshToken = user.refreshToken.filter(
    (token) => token !== req.cookies.token
  );
  await user.save();

  res.cookie("token", "", {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    maxAge: 0,
  });
  return res.status(200).json({ message: "User logged out successfully" });
};

const refreshToken = async (req, res) => {
  const cookieStoredRefreshToken = req.cookies.token;
  if (!cookieStoredRefreshToken) {
    return res.status(400).json({ message: "Refresh token not found" });
  }
  const user = await User.findOne({ refreshToken: cookieStoredRefreshToken });
  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }
  const { accessToken, refreshToken: newRefreshToken } =
    await generateAccessAndRefreshTokens(user);
  res.cookie("token", newRefreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });
  return res
    .status(200)
    .json({
      message: "User logged in successfully",
      accessToken,
      refreshToken: newRefreshToken,
    });
};

export { register, login, logout, refreshToken };
