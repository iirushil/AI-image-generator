# Image Generator

A full-stack web application for AI-powered image generation with user authentication, credit-based system, and payment integration. Users can generate images from text prompts using the Clipdrop API, manage their credits, and purchase additional credits through Razorpay.

## 🚀 Features

- **AI Image Generation**: Generate high-quality images from text prompts using Clipdrop API
- **User Authentication**: Secure registration and login system with JWT tokens
- **Credit System**: Credit-based model for image generation (1 credit per image)
- **Payment Integration**: Purchase credits using Razorpay payment gateway
- **Modern UI**: Beautiful, responsive design built with React and Tailwind CSS
- **Real-time Updates**: Instant credit balance updates and image generation results
- **User Dashboard**: View generated images and manage account

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client
- **Motion** - Animation library
- **React Toastify** - Toast notifications

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database (via Mongoose)
- **JWT** - Authentication tokens
- **Bcrypt** - Password hashing
- **Razorpay** - Payment gateway
- **Clipdrop API** - Image generation service

## 📁 Project Structure

```
image-generator/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── component/     # Reusable components
│   │   ├── context/       # React context for state management
│   │   ├── page/          # Page components
│   │   └── assets/        # Static assets
│   ├── public/            # Public assets
│   └── package.json
│
├── server/                # Backend Express application
│   ├── config/           # Configuration files
│   ├── controllers/      # Route controllers
│   ├── middleware/       # Custom middleware
│   ├── models/           # Database models
│   ├── routes/           # API routes
│   └── server.js         # Entry point
│
└── README.md
```

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **MongoDB** (local or cloud instance like MongoDB Atlas)
- **Clipdrop API Key** ([Get it here](https://clipdrop.co/))
- **Razorpay Account** (for payment integration)

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd image-generator
   ```

2. **Install server dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies**
   ```bash
   cd ../client
   npm install
   ```

## ⚙️ Environment Variables

### Server Environment Variables

Create a `.env` file in the `server/` directory with the following variables:

```env
# Server Configuration
PORT=4000

# MongoDB Connection
MONGODB_URL=mongodb://localhost:27017
# OR for MongoDB Atlas:
# MONGODB_URL=mongodb+srv://username:password@cluster.mongodb.net

# JWT Secret Key (use a strong random string)
JWT_SECRET=your_jwt_secret_key_here

# Clipdrop API Key
CLIPDROP_API=your_clipdrop_api_key_here

# Razorpay Configuration
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

### Client Environment Variables (if needed)

If you need to configure API endpoints, create a `.env` file in the `client/` directory:

```env
VITE_API_URL=http://localhost:4000
```

## 🚀 Running the Application

### Development Mode

1. **Start the backend server**
   ```bash
   cd server
   npm start
   ```
   The server will run on `http://localhost:4000` (or your configured PORT)

2. **Start the frontend development server**
   ```bash
   cd client
   npm run dev
   ```
   The client will run on `http://localhost:5173` (default Vite port)

### Production Build

1. **Build the frontend**
   ```bash
   cd client
   npm run build
   ```

2. **Start the production server**
   ```bash
   cd server
   npm start
   ```

## 📡 API Endpoints

### User Routes (`/api/user`)

- `POST /api/user/register` - Register a new user
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }
  ```

- `POST /api/user/login` - Login user
  ```json
  {
    "email": "john@example.com",
    "password": "password123"
  }
  ```

- `GET /api/user/credits` - Get user credits (requires authentication)
  - Headers: `token: <jwt_token>`

### Image Routes (`/api/image`)

- `POST /api/image/generate-image` - Generate image from prompt (requires authentication)
  ```json
  {
    "prompt": "a beautiful sunset over mountains"
  }
  ```
  - Headers: `token: <jwt_token>`

## 🎯 Usage

1. **Register/Login**: Create an account or login to your existing account
2. **Purchase Credits**: Navigate to the buy credits page to purchase credits via Razorpay
3. **Generate Images**: Enter a text prompt and generate AI images (consumes 1 credit per image)
4. **View Results**: See your generated images and remaining credit balance

## 🔒 Security Features

- Password hashing with bcrypt
- JWT-based authentication
- Protected API routes with middleware
- Input validation and sanitization
- CORS configuration

## 📝 License

ISC

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Support

For issues and questions, please open an issue in the repository.

---

**Note**: Make sure to keep your `.env` files secure and never commit them to version control. Add `.env` to your `.gitignore` file.

