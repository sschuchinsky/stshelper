<template>
  <v-app>
    <v-main>
      <v-card class="fill-height bg-black">

        <v-card-actions class="justify-center mb-4">
          <reset-button></reset-button>
          <character-selector></character-selector>
          <wake-lock></wake-lock>
        </v-card-actions>


        <v-row no-gutters class="ga-6">
          <v-col cols="12" class="text-center">
            <hp-bar></hp-bar>
          </v-col>
          <v-col cols="12" class="text-center">
            <energy-bar></energy-bar>
          </v-col>
          <v-col cols="12" class="text-center">
            <block-bar></block-bar>
          </v-col>
          <v-col v-for="item in store.properties" :key="item.name" cols="12">
            <counter :name="item.name" :image="item.image" :color="item.color" :max="item.max" :icon="item.icon"
              v-model:counter="item.counter" />
          </v-col>
        </v-row>
      </v-card>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import CharacterSelector from './components/CharacterSelector.vue';
import Counter from './components/Counter.vue';
import ResetButton from './components/ResetButton.vue';
import WakeLock from './components/WakeLock.vue';
import { useAppStore } from './stores/app.store';
import HpBar from './components/HpBar.vue';
import EnergyBar from './components/EnergyBar.vue';
import BlockBar from './components/BlockBar.vue';

const store = useAppStore();

onMounted(store.init)
</script>
