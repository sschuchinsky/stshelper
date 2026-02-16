<template>
  <v-app>
    <v-main>
      <v-card class="fill-height">
        <template #image>
          <v-img src="/src/assets/table.png" cover gradient="to bottom, rgba(0,0,0,.7), rgba(0,0,0,.7)"></v-img>
        </template>

        <v-card-actions class="justify-center">
          <v-btn color="error" @click="store.clearAll" prepend-icon="mdi-refresh"> Reset </v-btn>
        </v-card-actions>

        <v-row no-gutters class="ga-7">
          <v-col v-for="item in store.properties" :key="item.name" cols="12">
            <counter :name="item.name" :image="item.image" :color="item.color" v-model:counter="item.counter" />
          </v-col>
        </v-row>
      </v-card>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import Counter from './components/Counter.vue';
import { useAppStore } from './stores/app.store';

const store = useAppStore();
</script>
