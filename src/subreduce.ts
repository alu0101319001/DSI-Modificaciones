import {Reduce} from './reduce';

/**
 * Implementa la clase Reduce para restar los componentes de un vector
 */
export class SubReduce extends Reduce {
    constructor(protected array: number[]) {
        super(array);
    }

    /**
    * Resta los compoenentes del vector y lo almacena en el resultado
    */
    protected reduce(): void {
        this.result = 0;
        this.array.forEach((element) => {
            this.result -= element;
        });
    }

    /**
     * Muestra por consola que operación se va a ejecutar y con que array
     */
    protected beforeReduce():void {
        console.log('SubReduce with array: ', this.array.toString());
    }
    
    /**
     * Muestra por consola el resultado de la operación
     */
    protected afterReduce():void {
        console.log('SubReduce result: ', this.result);
    }
}