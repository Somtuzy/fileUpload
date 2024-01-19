import { Request, Response, Router } from 'express';
import axios from 'axios';

const pingRouter = Router()

pingRouter.get('/', async (req: Request, res: Response) => {
    let message;
    const response = await axios.get(`${process.env.SERVER_BASE_URL}/health`);
    if(response.status !== 200) {
        message = {
            status: response.status, 
            statusText: response.statusText || response.data,
            message: "Your server is unhealthy"
        } 

        res.status(200).json(message);
    }
    
    message = { 
        status: response.status, 
        statusText: response.statusText || response.data,
        message: "Your server is healthy" 
    }
    res.status(200).json(message);
});

export default pingRouter