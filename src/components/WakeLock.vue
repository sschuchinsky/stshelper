<template>
  <v-btn :icon="wakeLock ? 'mdi-lock' : 'mdi-lock-open-variant'" :color="wakeLock ? 'success' : 'primary'"
    @click="requestWakeLock">
  </v-btn>

  <v-snackbar v-model="showSnackbar" :color="snackbarColor" timeout="4000" timer="white">
    {{ snackbarMessage }}
    <template v-slot:actions>
      <v-btn variant="text" @click="showSnackbar = false" icon="mdi-close"></v-btn>
    </template>
  </v-snackbar>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const wakeLock = ref<WakeLockSentinel | null>(null);

const showSnackbar = ref(false);
const snackbarColor = ref('')
const snackbarMessage = ref('');

const requestWakeLock = async () => {
  try {
    if ('wakeLock' in navigator) {
      wakeLock.value = await navigator.wakeLock.request('screen');

      wakeLock.value.addEventListener('release', () => {
        wakeLock.value = null;
      });
      snackbarMessage.value = 'Pantalla siempre encendida.';
      snackbarColor.value = 'info'
      showSnackbar.value = true;
    } else {
      snackbarMessage.value = 'Tu navegador no soporta Wake Lock para mantener la pantalla encendida.';
      snackbarColor.value = 'error'
      showSnackbar.value = true;
    }
  } catch (err: any) {
    console.error(`${err.name}, ${err.message}`);
  }
};

const releaseWakeLock = async () => {
  if (wakeLock.value) {
    await wakeLock.value.release();
    wakeLock.value = null;
  }
};

const handleVisibilityChange = async () => {
  if (wakeLock.value !== null && document.visibilityState === 'visible') {
    await requestWakeLock();
  }
};

onMounted(() => {
  document.addEventListener('visibilitychange', handleVisibilityChange);
});

onUnmounted(() => {
  document.removeEventListener('visibilitychange', handleVisibilityChange);
  releaseWakeLock();
});
</script>
