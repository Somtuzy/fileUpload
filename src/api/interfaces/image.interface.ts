import { Types } from 'mongoose'
export interface IPicture{
    _id: Types.ObjectId;
    url: string;
    deleted: boolean;
}

export interface ICreateImage{
    url: string;
}

export interface IUpdateImage{
    url: string;
}