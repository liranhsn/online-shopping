import mongoose, { Schema, Document } from 'mongoose';

export interface ICostume extends Document {
    title: string;
    description: string;
    price: number;
    coverImg: string;
    sizes: Array<string>;
}

export const CostumeSchema = new Schema({
    title: { type: String },
    description: { type: String },
    price: { type: Number },
    coverImg: { type: String },
    sizes: { type: Array },
});

const Shirt = mongoose.model<ICostume>('costumes', CostumeSchema);
export default Shirt;
