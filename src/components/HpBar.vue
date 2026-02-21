<template>
  <v-row no-gutters class="ga-1">
    <v-col v-for="n in hpMax" :class="{ 'bg-red': n <= hp }" @click="() => { store.setCounterBarProperty('hp', n) }">
      {{ n }}
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { useAppStore } from '@/stores/app.store';
import { computed } from 'vue';

const store = useAppStore()

const hpMax = computed((): number => {
  const propertySearchedIndex = store.propertiesBars.findIndex(p => p.name === 'hp')

  if (propertySearchedIndex != -1 && store.propertiesBars[propertySearchedIndex] && store.propertiesBars[propertySearchedIndex].max) {
    return store.propertiesBars[propertySearchedIndex].max
  }
  return 0
})

const hp = computed((): number => {
  const propertySearchedIndex = store.propertiesBars.findIndex(p => p.name === 'hp')

  if (propertySearchedIndex != -1 && store.propertiesBars[propertySearchedIndex] && store.propertiesBars[propertySearchedIndex].max) {
    return store.propertiesBars[propertySearchedIndex].counter
  }
  return 0
})
</script>
