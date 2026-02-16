<template>
  <v-app>
    <v-main>
      <v-card class="fill-height">
        <template #image>
          <v-img :src="table" cover gradient="to bottom, rgba(0,0,0,.7), rgba(0,0,0,.7)"></v-img>
        </template>

        <v-card-actions class="justify-center">
          <reset-button></reset-button>
          <character-selector></character-selector>
          <wake-lock></wake-lock>
        </v-card-actions>

        <v-row no-gutters class="ga-7">
          <v-col v-for="item in store.properties" :key="item.name" cols="12">
            <counter :name="item.name" :image="item.image" :color="item.color" :max="item.max"
              v-model:counter="item.counter" />
          </v-col>
          <v-col v-if="store.characterSelected === 'silent'" :key="store.shiv.name" cols="12">
            <counter :name="store.shiv.name" :image="store.shiv.image" :color="store.shiv.color" :max="store.shiv.max"
              v-model:counter="store.shiv.counter" />
          </v-col>
          <v-col v-if="store.characterSelected === 'watcher'" :key="store.miracle.name" cols="12">
            <counter :name="store.miracle.name" :image="store.miracle.image" :color="store.miracle.color"
              :max="store.miracle.max" v-model:counter="store.miracle.counter" />
          </v-col>
        </v-row>
      </v-card>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import CharacterSelector from './components/CharacterSelector.vue';
import Counter from './components/Counter.vue';
import ResetButton from './components/ResetButton.vue';
import WakeLock from './components/WakeLock.vue';
import { useAppStore } from './stores/app.store';
import table from '@/assets/table.png'

const store = useAppStore();
</script>
