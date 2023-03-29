import { Throweable } from "./~throweable";
import { Interval } from "./interval";

export class Coin extends Throweable {
    constructor(n:number) {
        super(n,2);
    }

    /**
     * flip()
     * Realiza una tirada al azar de el numero de monedas
     */

    public roll() { 
        if(this.n > 0) return super.throw(0);
        else return [0];
    }

    /**
     * type()
     * Retorna el tipo de dato que es
     */

    public type():string {
        return `coin`
    }

    /**
     * to_interval()
     * Genera el rango de números que pueden darse en el dado
     */

    public to_interval() {
        return new Interval(0, this.faces);
    }
}