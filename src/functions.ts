import {User} from './usermodels';
import './dbconnection';

export function add(namein: string, lastnamein: string,
    agein: number, emailin: string, passwordin: string) {
        const newUser = new User({
            name: namein,
            lastname: lastnamein,
            age: agein,
            email: emailin,
            password: passwordin,
        });

        newUser.save().then((result) => {
            console.log('New user added:');
            console.log(result);
        }).catch((error) => {
            console.log(error);
        });
        return;
    }
