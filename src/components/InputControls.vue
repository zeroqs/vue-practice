<script setup lang="ts">
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'

defineProps<{
  modelValue: string
}>()

const emit = defineEmits(['addTodo', 'update:modelValue'])
</script>

<template>
  <div class="inputs">
    <InputText
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      type="text"
    />
    <Button @click="emit('addTodo')" size="small">add</Button>
  </div>
</template>

<style scoped>
.inputs {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>