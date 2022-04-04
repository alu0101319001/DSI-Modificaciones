import {Strategy} from '../interfaces/strategy';

export class BubbleSort implements Strategy {
    execute(data: number[]): number[] {
        return this.resolve(data);
    }

    resolve(data: number[]): number[] {
        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < data.length - 1; j++) {
                if (data[j] > data[j+1]) {
                    let swap = data[j];
                    data[j] = data[j+1];
                    data[j+1] = swap;
                }
            }
        }
        console.log(data.toString());
        return data;
    }
}
