import { model, Schema } from 'mongoose'
import { IPicture } from '../interfaces/index.interface'

const imageSchema = new Schema<IPicture>({
    filename: {
        type: String,
        required: true
    }, 
    originalname: {
        type: String,
        required: true
    }, 
    secure_url: {
        type: String,
        required: true
    },
    deleted: {
        type: Boolean,
        default: false
    }
}, {timestamps: true})

export default model<IPicture>('Image', imageSchema)