import { Dice } from "./dice";
import { Roll } from "./roll";

export class Interval { 
    public max: number; // 2
    public min: number; // 0

    constructor(min:number,max:number) {
        this.min = min;
        this.max = max;
    }

    /**
     * candidates()
     * Dado un tipo de dado, calcular los candidatos de tiradas posibles
     * Si no hubo ningun candidato posible el valor devuelto será null
     */

    public candidates(dice:Dice):Roll|null {
        var modif = this.min - dice.to_interval().min; // 0 - 1
        var coins = this.max - dice.to_interval().max - modif; // 2 - 4 = -2  + 1 

        if(coins < 0) return null;

        var limit = this.candidates(new Dice(dice.n+1,dice.faces));
        return !limit? new Roll([dice],coins,modif): limit;
    }

    /**
     * all_candidates()
     * Para todos los tipos de dados estándar, calcular sus candidatos
     * Si no hubo ningun candidato posible el valor devuelto será [null]
     */

    public all_candidates():(Roll|null)[] {
        return [
            new Dice(1,4),  new Dice(1,6),  new Dice(1,8), 
            new Dice(1,10), new Dice(1,12), new Dice(1,20), 
            new Dice(1,100)
        ]
        .map(dice => this.candidates(dice))
        .filter(roll => roll !== null);
    }

    /**
     * optimal_candidate()
     * Calcula el candidato óptimo para el intervalo en cuestión
     */

    public optimal_candidate() {
        const candidates = this.all_candidates();
        if (candidates.length === 0) return new Roll([], this.max, 0);

        return this.all_candidates().reduce((prev:Roll|null,curr:Roll|null):Roll => {
            if(prev instanceof Roll && curr instanceof Roll) {
                if(prev.coinsNum < curr.coinsNum) return prev;
                if(prev.coinsNum == curr.coinsNum) return prev.n < curr.n ? prev : curr;
                return curr;
            } else return new Roll([],Infinity,0)
        }, new Roll([],Infinity,0));
    }
}