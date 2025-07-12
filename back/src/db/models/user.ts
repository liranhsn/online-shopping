import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
    iv: string;
    createdDate: Date;
}

export const UserSchema = new Schema({
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    phone: { type: String },
    password: { type: String },
    iv: { type: String },
    createdDate: {
        type: Date,
        default: Date.now,
    },
});

const User = mongoose.model<IUser>('user', UserSchema);
export default User;
