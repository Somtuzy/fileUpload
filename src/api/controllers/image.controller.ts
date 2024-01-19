import { Request, Response } from 'express'
import { sendResponse } from '../utils/index.util';
import { imageService } from '../services/index.service';
import { IPicture } from '../interfaces/image.interface';
 
class ImageController{
    async uploadImage(req: Request, res: Response): Promise<Response<any, Record<string, any>>> {
        const { images } = req.body
        const data: IPicture[] = []

        console.log(req.body, 'here');

        for(const image of images) {
            // const uploadedImage = await imageService.create(image)
            // data.push(uploadedImage)
            console.log('image:', image);
        }

        const suffix: string = data.length > 1 ? 's' : ''

        return sendResponse(res, 201, true, `Image${suffix} uploaded successfully!`, data)
    }

    async downloadImage(req: Request, res: Response): Promise<Response<any, Record<string, any>>> {
        const { id } = req.params
       
        const isExistingImage = await imageService.find({ _id: id})
        if(!isExistingImage) return sendResponse(res, 404, false, `Image does not exist`)

        return sendResponse(res, 200, true, 'Image fetched successfully!')
    }

    async viewImages(req: Request, res: Response): Promise<Response<any, Record<string, any>>> {
        const { id } = req.params

        const result = await imageService.search(req.query)
        if(result.data.length === 0) return sendResponse(res, 404, false, `There are no images matching your search criteria`)
        
        return sendResponse(res, 200, true, 'Image fetched successfully!', result)
    }
}

export default new ImageController();