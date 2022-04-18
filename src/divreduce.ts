import {Reduce} from './reduce';

/**
 * Implementa la clase Reduce para dividir los componentes de un vector
 */
export class DivReduce extends Reduce {
    constructor(protected array: number[]) {
        super(array);
    }

    /**
     * Divide los componeentes del vector y lo almacena en el resultado
     */
    protected reduce(): void {
        this.result = 1;
        this.array.forEach((element) => {
            this.result = this.result / element;
        });
        this.result = parseFloat(this.result.toFixed(6));
    }

    /**
     * Muestra por consola que operación se va a ejecutar y con que array
     */
    protected beforeReduce():void {
        console.log('DivReduce with array: ', this.array.toString());
    }

    /**
     * Muestra por consola el resultado de la operación
     */
    protected afterReduce():void {
        console.log('DivReduce result: ', this.result);
    }
}