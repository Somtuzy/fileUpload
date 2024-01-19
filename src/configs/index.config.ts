import { Request, Response } from "express"
import { sendResponse } from "../api/utils/index.util";

export const CORS_CONFIG = {
        origin: '*',
        exposedHeaders: ['Authorization', 'Access-Token']
};
export const HEALTH_CHECK = (req: Request, res: Response) => res.sendStatus(200)
export const LIVE = (req: Request, res: Response) => sendResponse(res, 200, true, 'Server is Live.')
export const PAGE_NOT_FOUND = (req: Request, res: Response) => sendResponse(res, 404, false, 'The page you requested is not found.')
export const REDIRECT = (req: Request, res: Response) => res.redirect(301, <string>process.env.DOCSURL)
export { default as uploadToCloudinary } from './cloudinary.config'
export { default as upload } from './multer.config'
export { default as connectToDatabase } from './db.config'