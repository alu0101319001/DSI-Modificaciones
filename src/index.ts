import {Reduce} from './reduce';
import {AddReduce} from './addreduce';
import {SubReduce} from './subreduce';
import {ProdReduce} from './prodreduce';
import {DivReduce} from './divreduce';

function clientCode(reduceFunction: Reduce) {
    reduceFunction.run;
}

let array: number[] = [1,2,3,4,5];

clientCode(new AddReduce(array));
clientCode(new SubReduce(array));
clientCode(new ProdReduce(array));
clientCode(new DivReduce(array));