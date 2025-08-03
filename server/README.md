# YouTube-Backend API

A comprehensive backend API for a YouTube-like web application built with Node.js, Express, and MongoDB. This project provides user authentication, channel management, video operations, and social features like subscriptions, playlists, and comments.

## 🚀 Features

- **User Authentication**: JWT-based authentication with refresh tokens
- **Role-based Access Control**: User, Creator, and Admin roles
- **Channel Management**: Create and manage YouTube-like channels
- **Video Operations**: Upload, manage, and interact with videos
- **Social Features**: Subscriptions, playlists, comments, likes
- **User History**: Watch history and watch later functionality
- **Secure**: Password hashing, HTTP-only cookies, CORS support

## 📋 Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## 🛠️ Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd Youtube-Backend/server
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Setup:**
   Create a `.env` file in the server directory with the following variables:
   ```env
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/youtube-backend
   JWT_ACCESS_TOKEN_SECRET=your_access_token_secret_here
   JWT_REFRESH_TOKEN_SECRET=your_refresh_token_secret_here
   NODE_ENV=development
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

## 📁 Project Structure

```
server/
├── controllers/          # Request handlers
│   └── auth.controller.js
├── middlewares/          # Custom middleware
│   ├── auth.middleware.js
│   └── role.middleware.js
├── models/              # MongoDB schemas
│   ├── user.model.js
│   ├── channel.model.js
│   ├── video.model.js
│   ├── comments.model.js
│   ├── playlist.model.js
│   ├── subscription.model.js
│   ├── history.model.js
│   ├── likedVideos.model.js
│   └── watchLater.model.js
├── routes/              # API routes
│   └── auth.route.js
├── utils/               # Utility functions
│   └── dbConnect.js
├── .env                 # Environment variables
├── index.js            # Application entry point
└── package.json        # Dependencies and scripts
```

## 🔧 Dependencies

### Production Dependencies
- **express** (^5.1.0): Web framework for Node.js
- **mongoose** (^8.17.0): MongoDB object modeling
- **bcrypt** (^6.0.0): Password hashing
- **jsonwebtoken** (^9.0.2): JWT token generation and verification
- **cookie-parser** (^1.4.7): Parse HTTP cookies
- **cors** (^2.8.5): Cross-Origin Resource Sharing
- **dotenv** (^17.2.1): Environment variable loader

### Development Dependencies
- **nodemon** (^3.1.10): Auto-restart server during development

## 🔐 API Endpoints

### Authentication Routes (`/api/auth`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/auth/register` | Register a new user | No |
| POST | `/api/auth/login` | Login user | No |
| POST | `/api/auth/logout` | Logout user | Yes |
| POST | `/api/auth/refresh-token` | Refresh access token | Yes |

#### Register User
```http
POST /api/auth/register
Content-Type: application/json

{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "password123"
}
```

#### Login User
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

## 📊 Data Models

### User Model
- **username**: Unique username (min 3 characters)
- **email**: Unique email with validation
- **password**: Hashed password (min 6 characters)
- **avatar**: Profile picture URL
- **role**: user | creator | admin (default: user)
- **channels**: Array of channel references
- **refreshToken**: Array of refresh tokens

### Channel Model
- **owner**: Reference to User
- **name**: Channel name (min 3 characters)
- **description**: Channel description
- **avatar**: Channel profile picture
- **subscribers**: Array of User references
- **subscribersCount**: Number of subscribers

### Video Model
- **userId**: Reference to User (owner)
- **channelId**: Reference to Channel
- **title**: Video title
- **description**: Video description
- **videoUrl**: Video file URL
- **thumbnail**: Video thumbnail URL

### Additional Models
- **Comments**: Video comments with user references
- **Playlist**: User-created playlists
- **Subscription**: User-channel subscriptions
- **History**: User watch history
- **LikedVideos**: User liked videos
- **WatchLater**: User watch later list

## 🔒 Authentication & Authorization

### JWT Tokens
- **Access Token**: Short-lived (1 hour) for API access
- **Refresh Token**: Long-lived (7 days) for token renewal
- Tokens stored in HTTP-only cookies for security

### Middleware
- **authMiddleware**: Validates JWT tokens
- **roleMiddleware**: Checks user roles for protected routes

### User Roles
- **user**: Basic user permissions
- **creator**: Can create and manage channels/videos
- **admin**: Full system access

## 🚦 Getting Started

1. Start your MongoDB server
2. Run `npm run dev` to start the development server
3. The API will be available at `http://localhost:3000`
4. Test the `/` endpoint to verify the server is running

## 🧪 Testing the API

You can test the API endpoints using tools like Postman, curl, or any HTTP client:

```bash
# Test server status
curl http://localhost:3000/

# Register a new user
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"testuser","email":"test@example.com","password":"password123"}'
```

## 🔧 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `PORT` | Server port number | No (default: 3000) |
| `MONGO_URI` | MongoDB connection string | Yes |
| `JWT_ACCESS_TOKEN_SECRET` | Secret for access tokens | Yes |
| `JWT_REFRESH_TOKEN_SECRET` | Secret for refresh tokens | Yes |
| `NODE_ENV` | Environment (development/production) | No |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test your changes
5. Submit a pull request

## 📝 License

This project is licensed under the ISC License.

## 🐛 Known Issues

- Additional routes for video, channel, and social features need to be implemented
- File upload functionality for videos and images needs to be added
- Rate limiting and additional security measures should be implemented for production

## 🔮 Future Enhancements

- Video upload and streaming functionality
- Real-time notifications
- Advanced search and filtering
- Analytics and reporting
- Content moderation tools