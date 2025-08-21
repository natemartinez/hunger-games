# 🏹 Hunger Games Simulator

A full-stack web application that simulates the Hunger Games with a React frontend and Node.js backend.

## 📋 Project Structure

```
hungergamesSIM/
├── client/          # React TypeScript frontend
├── server/          # Node.js Express backend
├── package.json     # Root package management
└── README.md        # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd hungergamesSIM
   ```

2. **Install dependencies for both client and server:**
   ```bash
   npm run install:all
   ```

3. **Install root dependencies:**
   ```bash
   npm install
   ```

### Running the Application

#### Option 1: Run both client and server simultaneously (Recommended)
```bash
npm run dev
```
This will start:
- Server on `http://localhost:5000`
- Client on `http://localhost:3000`

#### Option 2: Run client and server separately

**Terminal 1 - Start the server:**
```bash
npm run server:dev
```

**Terminal 2 - Start the client:**
```bash
npm run client:dev
```

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Run both client and server concurrently |
| `npm run server:dev` | Run server in development mode |
| `npm run client:dev` | Run client in development mode |
| `npm run server:start` | Run server in production mode |
| `npm run client:build` | Build client for production |
| `npm run install:all` | Install dependencies for both client and server |
| `npm run install:server` | Install server dependencies only |
| `npm run install:client` | Install client dependencies only |

## 🛠️ Technology Stack

### Backend (Server)
- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **CORS** - Cross-Origin Resource Sharing
- **dotenv** - Environment variable management
- **Nodemon** - Development auto-restart

### Frontend (Client)
- **React** - Frontend library
- **TypeScript** - Type-safe JavaScript
- **Axios** - HTTP client for API calls
- **Create React App** - React toolchain

## 🔧 Configuration

### Server Configuration
The server runs on port 5000 by default. You can customize this by creating a `.env` file in the `server/` directory:

```env
PORT=5000
NODE_ENV=development
```

### Client Configuration
The client is configured to proxy API requests to `http://localhost:5000`. This is set in the client's `package.json`:

```json
{
  "proxy": "http://localhost:5000"
}
```

## 📡 API Endpoints

The server provides the following API endpoints:

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Root endpoint with API info |
| GET | `/api/health` | Health check endpoint |
| GET | `/api/games` | Games endpoint (placeholder) |
| GET | `/api/tributes` | Tributes endpoint (placeholder) |

## 🎮 Features (Planned)

- 🎯 **Create Custom Tributes** - Design your own tributes with unique stats
- 🎮 **Run Simulation Games** - Watch the Hunger Games unfold in real-time
- 📊 **View Game Statistics** - Analyze game results and tribute performance
- 🏆 **Tournament Management** - Organize and track multiple games

## 🐛 Troubleshooting

### Common Issues

**1. Server connection failed**
- Make sure the server is running on port 5000
- Check if another application is using port 5000
- Verify firewall settings

**2. Client not connecting to server**
- Ensure both client and server are running
- Check that the proxy configuration in client/package.json is correct
- Try refreshing the browser

**3. Dependencies installation fails**
- Delete `node_modules` folders and `package-lock.json` files
- Run `npm install` again
- Check your Node.js and npm versions

### Development Tips

1. **Hot Reloading**: Both client and server support hot reloading during development
2. **API Testing**: Use the built-in "Test API Endpoints" button in the client
3. **Console Logs**: Check browser console and terminal for detailed error messages

## 📚 Development

### Adding New API Endpoints

1. **Server**: Add routes in `server/index.js`
2. **Client**: Add corresponding service functions in `client/src/services/api.ts`
3. **Frontend**: Use the API service in React components

### Project Structure Details

```
client/
├── public/          # Static files
├── src/
│   ├── services/    # API service functions
│   ├── App.tsx      # Main React component
│   ├── App.css      # Styles
│   └── index.tsx    # React entry point
└── package.json     # Client dependencies

server/
├── index.js         # Express server entry point
├── package.json     # Server dependencies
└── .gitignore       # Git ignore rules
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

---

**May the odds be ever in your favor!** 🏹
