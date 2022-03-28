export class PrimeNumber implements Iterable<number> {
  private primes: Set<number>;

  private static primeNumber: PrimeNumber;

  private constructor() {
	  this.primes = new Set<number>();
  }

	/**
	 * Generate a single instance of PrimeNumber
	 * @returns The instance of PrimeNUmber
	 */
  public static getPrimeNumber(): PrimeNumber {
    if (!PrimeNumber.primeNumber) {
      PrimeNumber.primeNumber = new PrimeNumber();
    }
    return PrimeNumber.primeNumber;
  }

	/**
	 * 
	 * @returns The set of the instance PrimeNumber
	 */
  getPrimes(): Set<number> {
    return PrimeNumber.primeNumber.primes;
  }

	/**
	 * Clear the set
	 */
	private resetPrimes() {
		PrimeNumber.primeNumber.primes.clear();
	}

	/**
	 * Add a new number to the set
	 * @param num
	 */
	private addPrime(num: number) {
		PrimeNumber.primeNumber.primes.add(num);
	}

	/**
	 * Get the size of the set
	 * @returns
	 */
	getPrimesLenght(): number {
		return PrimeNumber.primeNumber.primes.size;
	}

	/**
	 * Get the first n prime numbers
	 * @param n
	 * @returns 
	 */
	firstPrimes(n: number): number[] {
		PrimeNumber.primeNumber.resetPrimes();
		if (PrimeNumber.primeNumber.validInput(n)) {
			let checkNum: number = 2;
			while (n !== PrimeNumber.primeNumber.getPrimesLenght()) {
				if (PrimeNumber.primeNumber.isPrime(checkNum)) {
					PrimeNumber.primeNumber.addPrime(checkNum);
				}
				checkNum++;
			}
		}
		return Array.from(PrimeNumber.primeNumber.getPrimes().values());
	}

	/**
	 * Get the prime numbers in the range [n, m]
	 * @param n
	 * @param m 
	 * @returns 
	 */
	rangePrimes(n: number, m: number): number[] {
		PrimeNumber.primeNumber.resetPrimes();
		if ((PrimeNumber.primeNumber.validInput(n)) &&
		(PrimeNumber.primeNumber.validInput(m))) {
			for (let i = n; i <= m; i++) {
				if (PrimeNumber.primeNumber.isPrime(i)) {
					PrimeNumber.primeNumber.addPrime(i);
				}
			}
		}
		return Array.from(PrimeNumber.primeNumber.getPrimes().values());
	}

	/**
	 * Do the class PrimeNumber Iterable
	 * @returns
	 */
	[Symbol.iterator](): Iterator<number> {
		return PrimeNumber.primeNumber.primes.values();
	}

	/**
	 * Check if a number is prime
	 * @param num
	 * @returns
	 */
	private isPrime(num: number): boolean {
		let result: boolean = true;
		for (let j = 2; j <= Math.sqrt(num); j++) {
			if (num % j === 0) {
				result = false;
			}
		}
		return result;
	}

	/**
	 * Check if the input is valid
	 * @param num
	 * @returns
	 */
	private validInput(num: number): boolean {
		if (num > 0) {
			return true;
		}
		return false;
	}
}
