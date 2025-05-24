import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
// Load env variables before anything else
dotenv.config();
// Simulate __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Build the path to your product.js file
const filePath = path.join(__dirname, '../src/controller/product/product.js');
// Convert to file:// URL for dynamic import
const fileUrl = pathToFileURL(filePath);
// Dynamic import of the ES module
const { product } = await import(fileUrl.href);
// Initialize Express
const app = express();
const PORT = process.env.PORT || 5000;
// Define route
app.get('/', product);
// Start server
app.listen(PORT);
