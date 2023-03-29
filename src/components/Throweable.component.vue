<script setup lang="ts">
import { Dice } from "@modules/dice" 
import { Coin } from "@modules/coin" 


/**
 * props()
 * datos traspasados de un componente primario 
 * a uno de sus componentes secundarios
 */

const props = defineProps({
  scheme: { type: [Coin,Dice], required: true },
});

/**
 * methods()
 * Funcionalidades para dotar de eventos a la aplicación.
 */

</script>

<template>
  <div :name="scheme.n+scheme.type()">
      <div class="number" :class="scheme.type()">{{scheme.n}}</div>
      <img :src="'src/assets/'+scheme.type()+'.png'" width="60"/>
  </div>
</template>

<style lang="scss">
.esquema {
    display:flex;
}

.number {
  width: 20px;
  height: 20px;
  position: relative;
  margin: 0px 0px -20px -1px;
  border-radius: 20px;
  font-size: 13px;
  background: #292929;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  &.d4 { background: #ca9c3c; }
  &.d6 { background: #629e48; }
  &.d8 { background: #ca683c; }
  &.d10 { background: #7c32ac; }
  &.d12 { background: #2f4b82; }
  &.d20 { background: #8b1d27; }
}


</style>