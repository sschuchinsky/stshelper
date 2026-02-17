<template>
  <v-row no-gutters class="text-center align-center">
    <v-col> </v-col>
    <v-col>
      <v-btn :icon="diceIcon" @click="roll" :class="{ 'dice-spin': isRolling }"></v-btn>
    </v-col>
    <v-col>
      <p class="text-h5 border">
        {{ value }}
      </p>
    </v-col>
    <v-col> </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const value = ref(1);
const isRolling = ref(false);

const diceIcons: Record<number, string> = {
  1: 'mdi-dice-1',
  2: 'mdi-dice-2',
  3: 'mdi-dice-3',
  4: 'mdi-dice-4',
  5: 'mdi-dice-5',
  6: 'mdi-dice-6'
};

const diceIcon = computed(() => diceIcons[value.value]);

const roll = () => {
  if (isRolling.value) return;
  isRolling.value = true;
  rollEffect()
  setTimeout(() => {
    isRolling.value = false;
  }, 1000);
};

const rollEffect = async () => {
  while (isRolling.value) {
    value.value = Math.floor(Math.random() * 6) + 1;
    await new Promise(resolve => setTimeout(resolve, 100));
  }
}
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

.dice-spin {
  animation: spin 0.5s linear infinite;
}
</style>
