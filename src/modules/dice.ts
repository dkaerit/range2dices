import { Throweable } from "./~throweable";
import { Interval } from "./interval";

export class Dice extends Throweable {
    constructor(n:number,faces:number) {
        super(n,faces);
    }

    /**
     * roll()
     * Realiza una tirada al azar de el dado de 'faces' caras tantas veces como 'times'
     */

    public roll() { 
        return super.throw(1)
    }

    /**
     * type()
     * Retorna el tipo de dato que es
     */

    public type():string {
        return `d${this.faces}`
    }

    /**
     * to_interval()
     * Genera el rango de números que pueden darse en el dado
     */

    public to_interval() {
        return new Interval(this.n, (this.n * this.faces));
    }
    
}