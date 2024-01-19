import { model, Schema } from 'mongoose'
import { IPicture } from '../interfaces/index.interface'

const imageSchema = new Schema<IPicture>({
    url: {
        type: String,
        required: true
    }, 
    deleted: {
        type: Boolean,
        default: false
    }
}, {timestamps: true})

export default model<IPicture>('Image', imageSchema)