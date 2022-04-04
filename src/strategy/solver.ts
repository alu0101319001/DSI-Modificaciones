import {Strategy} from '../interfaces/strategy';

export class Solver {
    constructor(private data: number[], private strategy: Strategy) {
    }

    setStrategy(strategy: Strategy) {
        this.strategy = strategy;
    }

    logic() {
        return this.strategy.execute(this.data);
    }
}
