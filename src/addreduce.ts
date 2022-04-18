import {Reduce} from './reduce';
/**
 * Implementa la clase Reduce para sumar los componentes de un vector
 */
export class AddReduce extends Reduce {
    constructor(protected array: number[]) {
        super(array);
    }

    /**
     * Suma los compoenentes del vector y lo almacena en el resultado
     */
    protected reduce(): void {
        this.result = 0;
        this.array.forEach((element) => {
            this.result += element;
        });
    }

    /**
     * Muestra por consola que operación se va a ejecutar y con que array
     */
    protected beforeReduce():void {
        console.log('AddReduce with array: ', this.array.toString());
    }

    /**
     * Muestra por consola el resultado de la operación
     */
    protected afterReduce():void {
        console.log('AddReduce result: ', this.result);
    }
}