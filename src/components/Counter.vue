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
      <p class="text-h5 border" @click="openEditDialog">
        {{ counter }}
        <span v-if="max" class="font-weight-black"> / {{ max }}</span>
      </p>
    </v-col>

    <v-col>
      <v-btn icon="mdi-plus" @click="counter++"></v-btn>
    </v-col>

    <v-dialog v-model="dialog" max-width="300">
      <v-card>
        <v-card-title class="text-center">
          <v-avatar v-if="image" :image="image"></v-avatar>
          <p v-else> {{ name }} </p>
        </v-card-title>
        <v-card-text>
          <v-number-input v-model.number="tempValue" label="Número" type="number" variant="outlined" hide-details
            autofocus @keyup.enter="saveValue" control-variant="hidden"></v-number-input>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn variant="text" @click="dialog = false">Cancelar</v-btn>
          <v-btn color="primary" variant="tonal" @click="saveValue">Guardar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  name: string,
  image?: string
  color?: string
  max?: number
}>();

const counter = defineModel<number>('counter', { default: 0 });

const dialog = ref(false);
const tempValue = ref(0);

const openEditDialog = () => {
  tempValue.value = counter.value;
  dialog.value = true;
};

const saveValue = () => {
  counter.value = tempValue.value;
  dialog.value = false;
};
</script>
