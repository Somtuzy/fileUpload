import { Request } from 'express'

export interface IGenericObject {
    [key: string]: any
}

export interface IPaginate {
    currentPage: Number;
    totalPages: Number
}

export type ICustomValidationFields = (value: any, helpers: any, fieldToCheck: any, valueToCheck: any) => any

export interface IUpload {
        fieldname: string;
        originalname: string;
        encoding: string;
        mimetype: string;
        destination: string;
        filename: string;
        path:  string;
        size: number
}

export { IPicture, ICreateImage, IUpdateImage } from './image.interface'