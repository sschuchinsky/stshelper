<template>
  <v-row no-gutters class="text-center">
    <v-col v-for="character in characters" @click="store.characterSelected = character.name">
      <v-btn icon rounded="0" variant="outlined" :color="character.color">
        <v-avatar rounded="0" :image="character.image">
        </v-avatar>
      </v-btn>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { characters } from '@/data/characters';
import { useAppStore } from '@/stores/app.store';

const store = useAppStore()
</script>
