import 'mocha';
import {expect} from 'chai';
import {PrimeNumber} from '../src/mod1';

context('Modificación P7', () => {
	describe('PrimeNumber Class', () => {
		it('Primeros 5 primos = [2,3,5,7,11]', () => {
			const primeNumberInstace = PrimeNumber.getPrimeNumber();
			expect(primeNumberInstace.firstPrimes(5)).to.be.eql([2, 3, 5, 7, 11]);
		});

		it('Bad input return the prev value', () => {
			const primeNumberInstace = PrimeNumber.getPrimeNumber();
			const test = [5, 7, 11];
			expect(primeNumberInstace.firstPrimes(-2)).to.be.eql(test);
		});

		it('Primos entre 4 y 30 = [5, 7, 11, 13, 17, 19, 23, 29]', () => {
			const primeNumberInstace = PrimeNumber.getPrimeNumber();
			const test = [5, 7, 11, 13, 17, 19, 23, 29];
			expect(primeNumberInstace.rangePrimes(4, 30)).to.be.eql(test);
		});

		it('Bad input return the prev value', () => {
			const primeNumberInstace = PrimeNumber.getPrimeNumber();
			const test = [5, 7, 11, 13, 17, 19, 23, 29];
			expect(primeNumberInstace.rangePrimes(-2, -1)).to.be.eql(test);
		});
	});

	describe('PrimeNumber Iterable Class', () => {
		it('Iterar sobre PrimeNumber', () => {
			const primeNumberInstace = PrimeNumber.getPrimeNumber();
			const test: number[] = [];
			[...primeNumberInstace].forEach((number) => test.push(number));
			expect(test).to.be.eql([5, 7, 11, 13, 17, 19, 23, 29]);
		});
	});
});

