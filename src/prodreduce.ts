import {Reduce} from './reduce';

/**
 * Implementa la clase Reduce para multiplicar los componentes de un vector
 */
export class ProdReduce extends Reduce {
    constructor(protected array: number[]) {
        super(array);
    }

    /**
     * Multiplica los componeentes del vector y lo almacena en el resultado
     */
    protected reduce(): void {
        this.result = 1;
        this.array.forEach((element) => {
            this.result = this.result * element;
        });
    }

    /**
     * Muestra por consola que operación se va a ejecutar y con que array
     */
    protected beforeReduce():void {
        console.log('ProdReduce with array: ', this.array.toString());
    }

    /**
     * Muestra por consola el resultado de la operación
     */
    protected afterReduce():void {
        console.log('ProdReduce result: ', this.result);
    }
}