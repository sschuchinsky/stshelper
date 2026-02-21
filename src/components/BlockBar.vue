<template>
  <v-row no-gutters class="ga-1">
    <v-col v-for="n in MAX_BLOCK + 1" :class="{ 'bg-grey': n <= block }"
      @click="() => { store.setCounterBarProperty('block', n) }">
      {{ n - 1 }}
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { useAppStore } from '@/stores/app.store';
import { computed } from 'vue';

const MAX_BLOCK = 20

const store = useAppStore()

const block = computed(() => {
  const propertySearchedIndex = store.propertiesBars.findIndex(p => p.name === 'block')

  if (propertySearchedIndex != -1 && store.propertiesBars[propertySearchedIndex]) {
    return store.propertiesBars[propertySearchedIndex].counter
  }
  return 0
})
</script>
