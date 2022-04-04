import 'mocha';
import {expect} from 'chai';
import {Solver} from '../src/strategy/solver';
import {BubbleSort} from '../src/algoritmos/bubblesort';
import {MergeSort} from '../src/algoritmos/mergesort';

describe('Modificacion P8', () => {
    const testSolver = new Solver([9,2,1,5,6,7,8,3,4], new BubbleSort());
    it('Ordenar [9,2,1,5,6,7,8,3,4] por BubbleSort', () => {
        expect(testSolver.logic()).to.be.eql([1,2,3,4,5,6,7,8,9]);
    });
    const testSolver2 = new Solver([9,2,1,5,6,7,8,3,4], new MergeSort());
    it('Ordenar [9,2,1,5,6,7,8,3,4] por MergeSort', () => {
        expect(testSolver2.logic()).to.be.eql([1,2,3,4,5,6,7,8,9]);
    });
    const testSolver3 = new Solver([92,23,90,5,8,7,31,35,4], new MergeSort());
    testSolver3.setStrategy(new MergeSort());
    it('Cambiar estrategia a MergeSort y ordenar de nuevo', () => {
        expect(testSolver3.logic()).to.be.eql([4,5,7,8,23,31,35,90,92]);
    });
});
