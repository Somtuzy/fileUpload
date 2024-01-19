import { Router } from 'express';
import { upload } from '../../configs/index.config';
import { imageController } from '../controllers/index.controller';
import { uploadFiles } from '../middlewares/index.middleware';

const fileUploadRouter = Router()

fileUploadRouter.post('/upload', [upload.array('image'), uploadFiles('images')], imageController.uploadImage);

fileUploadRouter.get('/get_image', imageController.viewImages);

fileUploadRouter.get('/get_image/:id', imageController.downloadImage);

export default fileUploadRouter