import express, {Express, Request, Response} from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import {config} from './config';
import { registerRoutes } from './routes';

const PORT = config.server.port;
const app: Express = express();

app.use(express.json());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Initialize database connection
let isConnected = false;

async function connectToDatabase() {
  if (isConnected) return;
  
  try {
    await mongoose.connect(config.mongo.url, {
      w: "majority", 
      retryWrites: true, 
      authMechanism: "DEFAULT"
    });
    isConnected = true;
    console.log("Connection to MongoDB successfully made");
  } catch (error) {
    console.log("Could not make a connection to the database!", error);
    throw error;
  }
}

// Register routes
registerRoutes(app);

// Health check endpoint
app.get('/api', (req: Request, res: Response) => {
  res.json({ message: 'IICT Library Management API is running!' });
});

// For Vercel serverless functions
export default async (req: Request, res: Response) => {
  await connectToDatabase();
  return app(req, res);
};

// For local development
if (process.env.NODE_ENV !== 'production') {
  (async function startup() {
    try {
      await connectToDatabase();
      
      app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      });
    } catch (error) {
      console.log("Could not start the server!", error);
    }
  })();
}


