import { NextFunction, Request, Response } from 'express'
import { uploadToCloudinary } from '../../configs/index.config'
import { IGenericObject, IUpload } from '../interfaces/index.interface';

export default (fieldToAccessUploadedFiles: string) => async (req: Request, res: Response, next: NextFunction) => {
    const uploads: IUpload[] & IGenericObject[] = []
    if (req.files && req.files.length > 0) {
        for (const file of req.files) {
            const result = await uploadToCloudinary(file)
            console.log(result);
            uploads.push({ ...file, ...result })
        }
    }
    
    req.body[fieldToAccessUploadedFiles] = uploads
    console.log(`File(s) uploaded successfully. Field to access uploaded file(s): req.body.${fieldToAccessUploadedFiles}`);
    console.log('Uploaded File(s):', req.body[fieldToAccessUploadedFiles]);
    
    next()
}