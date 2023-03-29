<script setup lang="ts">
import { ref } from 'vue'
import { Roll } from "@modules/roll"

/**
 * props()
 * datos traspasados de un componente primario 
 * a uno de sus componentes secundarios
 */

const props = defineProps({
  roll: Roll
});

/**
 * methods()
 * Funcionalidades para dotar de eventos a la aplicación.
 */
function doRoll() {
    props.roll? props.roll.roll():null;
}

</script>

<template>
    <template v-if="roll">
        <template v-for="dice in roll.dices" :key="dice">
        <div class="results">
            <img :src="'src/assets/'+dice.type()+'.png'" @click="doRoll()" width="60"/>
            <template v-if="roll.diceResults[dice.type()]">
            <div class="result" v-for="value in roll.diceResults[dice.type()].array" :key="value">{{value}}</div>
            </template>
        </div>
        </template>
    </template>
</template>

<style lang="scss">
</style>