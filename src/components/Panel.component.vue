<script setup lang="ts"> // @ts-nocheck
import { ref } from 'vue'
import { Interval } from "@modules/interval"
import { Roll } from "@modules/roll"
import Results from "@/components/Results.component.vue"
import Expression from "@/components/Expression.component.vue"

/**
 * data()
 * Se referencia el estado reactivo inicial para la instancia del componente.
 * Toma un valor interno y devuelve un objeto ref reactivo y mutable, 
 * que tiene una sola propiedad que apunta al valor interno.
 */

var min  = ref(0);
var max  = ref(0);
var flag = ref(false);
var roll = ref();

var diceResult = ref();
var coinsResult = ref();
var modif = ref();


/**
 * methods()
 * Funcionalidades para dotar de eventos a la aplicación.
 */

function generate() {
  flag.value = true;
  roll.value = new Interval(min.value,max.value).optimal_candidate();
  diceResult.value = null;
  coinsResult.value = null;
  modif.value = null;
  //console.log(roll);
}

function randomize() {
  roll.value.roll();
  diceResult.value = Object.values(roll.value.diceResults).reduce((acc: number, curr: DiceResult) => acc + curr.ut, 0);
  coinsResult.value = Object.values(roll.value.coinsResults).reduce((acc: number, curr: number) => acc + curr, 0);
  modif.value = roll.value.modif;
}
</script>






<template>
  <h1>Range2Dices</h1>
  <div class="menu">
    <input v-model="min" type="number"/>
    <input v-model="max" type="number"/>
    <button @click="generate()">Generar</button>
  </div>

  <!--<br><br>
  {{roll}}
  <br><br>-->

  <div v-if="flag" class="fieldRollSet">
    <Expression :roll="roll" :coins="roll.coinsNum"/>
    <button class="rollExpr" @click="randomize()">roll</button>
  </div>

  <!-- diceResult -->
  <!-- coinsResult -->
  <!-- Total -->

  
  <div v-if="flag" class="fieldRollSet">

    <!-- Muestra los resultados de los dados -->
    <div class="result-container">
      <div class="dice-result" v-for="(dice, index) in roll.dices" :key="index">
        <div v-if="roll.diceResults[`d${dice.faces}`]" class="dice-name"><img :src="'src/assets/d'+dice.faces+'.png'" width="35"/></div>
        <div class="dice-values">
          <template v-if="roll.diceResults[`d${dice.faces}`]">
          <div class="dice-value" v-for="(value, i) in roll.diceResults[`d${dice.faces}`].array" :key="i">{{value}}</div>
          </template>
        </div>
        <template v-if="index+1 == roll.dices.length && roll.diceResults[`d${dice.faces}`]">
          <div class="dice-equal">=</div><div class="dice-total">{{ roll.diceResults[`d${dice.faces}`].ut }}</div>
        </template>
      </div>
      

      <!-- Muestra los resultados de las monedas -->
      <div class="dice-result" v-if=" roll.coinsResults.length > 0">
        <div v-if="roll.coinsResults" class="dice-name"><img :src="'src/assets/coin.png'" width="35"/></div>
        <div class="dice-values">
          <template v-if="roll.coinsResults">
          <div class="dice-value" v-for="(value, i) in roll.coinsResults" :key="i">{{value}}</div>
          </template>
        </div>
        <div class="dice-equal">=</div><div class="dice-total">{{ coinsResult }}</div>
      </div>
      <hr/>
      <!-- Total -->
      <div class="lastExper" v-if="diceResult">
        <div class="dice-value lastResult_dices">{{ diceResult }}</div>
        <div class="last-operator">{{ (coinsResult > 0)?"+":"-" }}</div>
        <div class="coins-value lastResult_coins">{{ coinsResult }}</div>
        <div class="last-operator">{{ (modif > 0)?"+":"-" }}</div>
        <div class="dice-value lastResult_modif">{{ Math.abs(roll.modif) }}</div>
      </div>
 
    </div>

    <!-- Total -->
    <div class="total" v-if="roll.total">{{ roll.total }}</div>

  </div>
  
</template>





<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600;700;800&display=swap');

  body {
    //background: #040505;
    background-image: url('@/assets/pattern-dices.png');
    color: white;
    background-size: 294px 294px;
    animation: diagonal 10s infinite linear;
  }

  @keyframes diagonal {
    0% { background-position: 0 0; }
    100% { background-position: 50px 50px; }
  }

  .fieldRollSet {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 50px;
    flex-direction: row;
  }

  button, .rollExpr {
    background: #000;
      color: #fff;
      text-transform: uppercase;
      font-size: 11px;
      padding: 0px 24px;
      border: 1px solid #181818;
      border-radius: 10px;
      height: 36px;
      margin-left: 12px;
      font-weight: 500;
      cursor: pointer;
      font-family: "Poppins", sans-serif;
      transition: background-color 0.2s ease, color 0.2s ease, transform 0.2s ease;

      &:hover {
        background-color: #0e0e0e;
        color: #fff;
        transform: scale(1.05);
      }

      &:active {
        background-color: #333;
        color: #fff;
        transform: scale(0.95);
      }
  }

  .menu {
    display: flex;
    justify-content: center;
    margin-top: 45px;
    align-items: center;

    input {
      background: #2222228a;
      margin: 3px;
      padding: 10px;
      border: 0px;
      border-radius: 10px;
      color: #fff;
      text-align: center;
    }

  }

  input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance: textfield;
  appearance: textfield;
  color: white;
  width: 14%;
  background-color: #333;
  border: 1px solid #444;
  border-radius: 5px;
  padding: 5px;
}

input[type=number]:hover, 
input[type=number]:focus {
  background-color: #444;
  border: 1px solid #666;
  outline: none;
}

input[type=number]::-webkit-inner-spin-button:hover,
input[type=number]::-webkit-outer-spin-button:hover {
  background-color: #555;
  color: white;
}


// estilos cudraditos
.result-container {
  display: flex;
    align-items: flex-start;
    flex-direction: column;
    padding: 0px 24px;
}

.dice-result, .coins-result {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.dice-name, .coins-name, .dice-total, .coins-total, .dice-equal {
  font-size: 14px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
}

@mixin cuadradito {
  width: 20px;
  display: flex;
  height: 20px;
  background-color: #1b1b1b73;
  border: 1px solid black;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  font-family: sans-serif;
  padding: 3px;
}

.dice-total, .dice-value, .coins-value { @include cuadradito; }
.dice-values { display: flex; }

.dice-equal, .last-operator {
    margin: 0px 5px;
}



.total-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.total-name {
  font-size: 24px;
  font-weight: bold;
}

.total-value {
  font-size: 48px;
  font-weight: bold;
  background-color: white;
  border: 1px solid black;
}


.total {
    width: 130px;
    display: flex;
    height: 120px;
    background-color: #1b1b1b73;
    border: 1px solid black;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    font-size: 58px;
    font-family: sans-serif;
    backdrop-filter: blur(4px);
}

.lastExper {
    display: flex;
}

.last-operator {
    font-size: 14px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
}

hr {
  width: 100%;
  border: 1px solid #101010;
}

@font-face {
  font-family: 'Chaz Condensed Bold';
  src: url('@/assets/ChazCondensedBold.otf');
}


h1 {
  text-align: center;
  font-family: "Chaz Condensed Bold";
  margin-top: 59px;
  font-size: 57px;
}



</style>