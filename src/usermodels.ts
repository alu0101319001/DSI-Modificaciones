import validator from 'validator';
import {model, Schema, Document} from 'mongoose';

interface UserInterface extends Document {
    name: string,
    lastname: string,
    age: number,
    email: string,
    password: string
}
  
const UserSchema = new Schema<UserInterface>({
    name: {
        type: String,
        required: true,
        validate: (value: string) => {
            if (!value.match(/^[A-Z]/)) {
                throw new Error('Name must start with a capital letter');
            } else if (!validator.isAlpha(value)) {
                throw new Error('Name must contain alpha characters only');
            }
        },
    },
    lastname: {
        type: String,
        required: true,
        validate: (value: string) => {
            if (!value.match(/^[A-Z]/)) {
                throw new Error('Lastname must start with a capital letter');
            } else if (!validator.isAlpha(value)) {
                throw new Error('Lastname must contain alpha characters only');
            }
        },
    },
    age: {
        type: Number,
        required: true,
        validate: (value: number) => {
            if ((value < 0)) {
                throw new Error('Age can not be less than 0');
            }
        },
    },
    email: {
        type: String,
        required: true,
        validate: (value: string) => {
            if (!validator.isEmail(value)) {
                throw new Error('Email format not correct');
            }
        },
    },
    password: {
        type: String,
        required: true,
        validate: (value: string) => {
            if (!validator.isStrongPassword(value)) {
                throw new Error('Is not a strong password');
            }
        },
    },
});

export const User = model<UserInterface>('User', UserSchema);
