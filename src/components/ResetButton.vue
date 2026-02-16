<template>
  <v-btn color="error" icon="mdi-refresh" @click="openDialog"></v-btn>

  <v-dialog v-model="showConfirm" max-width="400">
    <v-card>
      <v-card-title class="text-h5">
        ¿Confirmar reinicio?
      </v-card-title>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn variant="text" @click="showConfirm = false">
          Cancelar
        </v-btn>
        <v-btn color="error" variant="elevated" @click="confirmReset">
          Sí, borrar todo
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useAppStore } from '@/stores/app.store';

const store = useAppStore();
const showConfirm = ref(false);

const confirmReset = () => {
  store.clearAll();
  showConfirm.value = false;
};

const openDialog = () => showConfirm.value = true
</script>
