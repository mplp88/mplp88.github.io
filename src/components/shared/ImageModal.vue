<script setup>
defineProps({
  show: {
    type: Boolean,
    required: true
  },
  image: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['close'])

const close = () => {
  emit('close')
}
</script>

<template>
  <div v-if="show" class="image-modal" @click="close">
    <img :src="image" class="image-modal-content" @click.stop />

    <button class="btn btn-light image-modal-close" @click="close">
      <i class="fa-solid fa-xmark"></i>
    </button>
  </div>
</template>

<style scoped>
.image-modal {
  position: fixed;
  inset: 0;

  background: rgba(0, 0, 0, 0.9);

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 9999;
}

.image-modal-content {
  max-width: 90vw;
  max-height: 90vh;

  border-radius: 10px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
}

.image-modal-close {
  position: absolute;

  top: 20px;
  right: 20px;
}
</style>
