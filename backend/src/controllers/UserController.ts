import { json } from "express"

import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [
    {
        name: 'André',
        email: 'andretavares3@gmail.com'
    }
];

export default {
    async index(req: Request, res: Response) {
        return res.json(users);
    },

    async create(req: Request, res: Response) {

        const emailService = new EmailService();

        emailService.sendMail({
            to: {
                name: 'André',
                email: 'andretavares3@gmail.com'
            },
            message: {
                subject: 'Welcome to the system',
                body: 'Welcome mister'
            }
        });

        return res.send();
    }
}