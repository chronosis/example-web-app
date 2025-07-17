import cors from 'cors';
import { Router } from 'express';
import { getExampleData, createExampleData } from '../controllers';
import { PrismaClient } from '../services/prisma/client';

export default function routes(prisma: PrismaClient) {
    const router = Router();
    router.use(cors());
    router.get('/', (req, res) => {
        res.send('Welcome to the API');
    });
    router.get('/example', getExampleData);
    router.post('/example', createExampleData);
    return router;
}