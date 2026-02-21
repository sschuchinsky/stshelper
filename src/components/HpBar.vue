<template>
  <v-row no-gutters class="ga-1">
    <v-col v-for="n in hpMax" :class="{ 'bg-red': n <= hp }" @click="() => { store.setCounterProperty('hp', n) }">
      {{ n }}
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { useAppStore } from '@/stores/app.store';
import { computed } from 'vue';

const store = useAppStore()

const hpMax = computed((): number => {
  const propertySearchedIndex = store.properties.findIndex(p => p.name === 'hp')

  if (propertySearchedIndex != -1 && store.properties[propertySearchedIndex] && store.properties[propertySearchedIndex].max) {
    return store.properties[propertySearchedIndex].max
  }
  return 0
})

const hp = computed((): number => {
  const propertySearchedIndex = store.properties.findIndex(p => p.name === 'hp')

  if (propertySearchedIndex != -1 && store.properties[propertySearchedIndex] && store.properties[propertySearchedIndex].max) {
    return store.properties[propertySearchedIndex].counter
  }
  return 0
})
</script>
