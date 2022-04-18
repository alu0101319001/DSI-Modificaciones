import 'mocha';
import {expect} from 'chai';
import {Reduce} from '../src/reduce';
import {AddReduce} from '../src/addreduce';
import {SubReduce} from '../src/subreduce';
import {ProdReduce} from '../src/prodreduce';
import {DivReduce} from '../src/divreduce';
function clientCode(reduceFunction: Reduce): number {
    return reduceFunction.run();
}

describe('Modificación P9: Template Method', () => {
    let array: number[] = [1,2,3,4,5];
    it('AddReduce with [1,2,3,4,5] return 15', () => {
        expect(clientCode(new AddReduce(array))).to.be.eql(15);
    });
    it('SubReduce with [1,2,3,4,5] return -15', () => {
        expect(clientCode(new SubReduce(array))).to.be.eql(-15);
    });
    it('ProdReduce with [1,2,3,4,5] return 120', () => {
        expect(clientCode(new ProdReduce(array))).to.be.eql(120);
    });
    it('DivReduce with [1,2,3,4,5] return 0.008333', () => {
        expect(clientCode(new DivReduce(array))).to.be.eql(0.008333);
    });
});