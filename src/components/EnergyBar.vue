<template>
  <v-row no-gutters class="ga-1">
    <v-col v-for="n in MAX_ENERGY + 1" :class="{ 'bg-blue': n <= energy }"
      @click="() => { store.setCounterBarProperty('energy', n) }">
      {{ n - 1 }}
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { useAppStore } from '@/stores/app.store';
import { computed } from 'vue';

const MAX_ENERGY = 6

const store = useAppStore()

const energy = computed(() => {
  const propertySearchedIndex = store.propertiesBars.findIndex(p => p.name === 'energy')

  if (propertySearchedIndex != -1 && store.propertiesBars[propertySearchedIndex]) {
    return store.propertiesBars[propertySearchedIndex].counter
  }
  return 0
})
</script>
