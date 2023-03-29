export abstract class Throweable {
    public n:number;
    public faces:number;

    constructor(n:number,faces:number) {
        this.n = n;
        this.faces = faces;
    }

    /**
     * #title Setters del atributo times
     * #brief Asiga un nuevo valor al atributo times
     * #param n:number; numero de veces a signar 
     */

    public set times(n:number) {
        this.n = n;
    }

    /**
     * #title Increase
     * #brief Aumenta en 1 el valor de times
     */

    public increase() {
        this.n += 1;
    }

    /**
     * #title Lanzar
     * #brief Genera una tirada del dado según faces tantas veces como times sea
     */
    protected throw(peso:number, n:number=this.n): number[] {
        if(n == 1) return [Math.floor(Math.random()*this.faces)+peso];
        return [Math.floor(Math.random()*this.faces)+peso, ...this.throw(peso, (n-1))]
    }
}