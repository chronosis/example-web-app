import express from 'express';
import routes from './routes';
import { PrismaClient } from './services/prisma/client';

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ensure routes(prisma) returns a Router, not an Application
app.use('/api', routes(prisma));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});