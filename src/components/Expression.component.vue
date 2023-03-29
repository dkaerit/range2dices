<script setup lang="ts">
import Throweable from "@components/Throweable.component.vue"
import { ref } from 'vue'
import { Roll } from "@modules/roll"
import type { Dice } from "@modules/dice"
import { Coin } from "@modules/coin"


/**
 * props()
 * datos traspasados de un componente primario 
 * a uno de sus componentes secundarios
 */

const props = defineProps({
  roll: { type: Roll, required: true },
  coins: { type: Number, required: true }
});


/**
 * methods()
 * Funcionalidades para dotar de eventos a la aplicación.
 */

function dices():Dice[]|any {
    return props.roll?props.roll.dices:[];
}
</script>

<template>
<div class="fieldExpr">
    <div v-for="dice in dices()" :key="dice">
        <Throweable :scheme="dice"/>
    </div>
    <div class="sumSomething" v-if="coins != 0">
        <div v-if="dices().length > 0" class="operator">+</div>
        <Throweable :scheme="new Coin(coins)"/>
    </div>
    <div v-if="roll.modif != 0" class="sumSomething">
        <div class="operator">+</div>
        <div class="modificador">{{roll.modif}}</div>
    </div>
</div>





</template>

<style lang="scss">
.modificador {
    width: 45px;
    height: 45px;
    text-align: center;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 21px;
    background: #1b1b1b;
}

.fieldExpr {
    display:flex;
}

.sumSomething {
    display:flex;
    align-items:center;
}

.operator {
    background: #111111;
    width: 30px;
    height: 30px;
    text-align: center;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    margin: 0px 8px;
}
</style>