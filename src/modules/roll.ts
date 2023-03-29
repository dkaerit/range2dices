import type { Dice } from "./dice";
import { Coin } from "./coin";

interface IResults { 
    [key:string]: {
        array: number[];
        ut: number;
    };

}

export class Roll { 
    public n:number;

    public dices:Dice[];
    public coinsNum:number;
    public modif:number;

    public diceResults:IResults = {};
    public coinsResults:number[] = [];
    public total:number = 0;

    constructor(dices:Dice[], coinsNum:number, modif:number) {
        this.n = dices.reduce((acc, dice) => acc + dice.n, 0);
        this.dices = dices;
        this.coinsNum = coinsNum;
        this.modif = modif;
    }

    public roll():this {
        this.coinsResults = new Coin(this.coinsNum).roll();
        // this.dices.map((dice):IResults => ({ [dice.type()]: dice.roll() }));
        // = 

        this.dices.map((dice:Dice) => {
            var result = dice.roll();
            this.diceResults[dice.type()] = {
                array: result,
                ut: result.reduce((a:number,b:number) => a+b,0)
            }
        })
        //console.log(this.coinsResults,this.diceResults)
        
        this.total = Object.keys(this.diceResults).map(key => {
            return this.diceResults[key].ut
        }).reduce((a:number,b:number) => a+b,0)
        +
        this.coinsResults.reduce((a:number,b:number) => a+b,0)
        +
        this.modif;
        return this;
    }   

}