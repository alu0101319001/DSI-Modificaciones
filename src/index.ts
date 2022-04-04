import {Solver} from './strategy/solver';
import {BubbleSort} from './algoritmos/bubblesort';
import {MergeSort} from './algoritmos/mergesort';

const mySolver = new Solver([9,2,1,5,6,7,8,3,4], new BubbleSort());
mySolver.logic();

mySolver.setStrategy(new MergeSort());
mySolver.logic();    
