import {Strategy} from '../interfaces/strategy';

export class MergeSort implements Strategy {
    execute(data: number[]): number[] {
        let result = this.divide(data);
        console.log(result.toString());
        return result;
    }

    divide(data: number[]): number[] {
        var halfLenght = Math.ceil(data.length/2);
        var low = data.slice(0, halfLenght);
        var high = data.slice(halfLenght);
        if (halfLenght > 1) {
            low = this.divide(low);
            high = this.divide(high);
        }
        return this.combine(low, high);
    }

    combine(low: number[], high: number[]): number[] {
        var indexLow = 0;
        var indexHigh = 0;
        var lengthLow = low.length;
        var lenghtHigh = high.length;
        var combined = [];
        while (indexLow < lengthLow || indexHigh < lenghtHigh) {
            var lowItem = low[indexLow];
            var highItem = high[indexHigh];
            if (lowItem !== undefined) {
                if (highItem === undefined) {
                    combined.push(lowItem);
                    indexLow++;
                } else {
                    if (lowItem <= highItem) {
                        combined.push(lowItem);
                        indexLow++;
                    } else {
                        combined.push(highItem);
                        indexHigh++;
                    }
                }
            } else {
                if (highItem !== undefined) {
                    combined.push(highItem);
                    indexHigh++;
                }
            }
        }
        return combined;
    }
}
