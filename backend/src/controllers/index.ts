import { PrismaClient } from '../services/prisma/client';
import { Request, Response } from 'express';

export function getExampleData(req: Request, res: Response) {
    // Example controller function to handle GET requests for example data
    res.json({ message: "Hello World!" });
};

export function createExampleData(req: Request, res: Response) {
    // Example controller function to handle POST requests for creating example data
    const data = req.body;
    // Logic to save data to the database would go here
    res.status(201).json({ message: "Data created", data });
};