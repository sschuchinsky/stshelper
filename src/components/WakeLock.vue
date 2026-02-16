<template>
  <v-btn :color="wakeLock ? 'success' : 'primary'" @click="requestWakeLock">
    {{ wakeLock ? 'Pantalla Bloqueada' : 'Bloquear Pantalla' }}
  </v-btn>

  <v-snackbar v-model="showSnackbar" color="error" timeout="4000">
    {{ snackbarMessage }}
    <template v-slot:actions>
      <v-btn variant="text" @click="showSnackbar = false">Cerrar</v-btn>
    </template>
  </v-snackbar>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const wakeLock = ref<WakeLockSentinel | null>(null);
const showSnackbar = ref(false);
const snackbarMessage = ref('');

const requestWakeLock = async () => {
  try {
    if ('wakeLock' in navigator) {
      wakeLock.value = await navigator.wakeLock.request('screen');

      wakeLock.value.addEventListener('release', () => {
        wakeLock.value = null;
      });
    } else {
      snackbarMessage.value = 'Tu navegador no soporta Wake Lock para mantener la pantalla encendida.';
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
