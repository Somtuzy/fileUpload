import { Types } from 'mongoose'
export interface IPicture{
    _id: Types.ObjectId;
    filename: string;
    secure_url: string;
    deleted: boolean;
}

export interface ICreateImage{
    filename: string;
    secure_url: string;
}

export interface IUpdateImage{
    secure_url: string;
}