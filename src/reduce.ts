/**
 * Clase abstracta para operación reduce, siguiendo patrón Template Method
 */
export abstract class Reduce {
    /**
     * Almacena el resultado
     */
    protected result: number;
    constructor(protected array: number[]) {
        this.result = NaN;
    }

    /**
     * Método planilla que define los pasos comunes
     */
    public run(): number {
        this.beforeReduce();
        this.reduce();
        this.afterReduce();
        return this.result;
    }

    /**
     * Obliga a definir la operación especifica de reduce en las clases hijas
     */
    protected abstract reduce(): void;
    /**
     * Método hook antes de la ejecución
     */
    protected beforeReduce() {};
    /**
     * Método hook tras la ejecución
     */
    protected afterReduce() {};
}

