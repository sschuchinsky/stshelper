<template>
  <v-row no-gutters class="align-center text-center">
    <v-col>
      <v-img v-if="image" :src="image" height="6vh"></v-img>
      <v-avatar v-else :color="color" size="x-large"> {{ name }}</v-avatar>
    </v-col>
    <v-col>
      <v-btn icon="mdi-minus" @click="counter--"></v-btn>
    </v-col>
    <v-col>
      <p class="text-h5">{{ counter }}</p>
    </v-col>
    <v-col>
      <v-btn icon="mdi-plus" @click="counter++"></v-btn>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
defineProps<{
  name: string,
  image?: string
  color?: string
}>();

const counter = defineModel<number>('counter', { default: 0 });
</script>
