<template>
  <div class="w-full my-2">
    <span v-if="!sender" class="w-full text-left ml-12 text-gray-400 text-xs">
      {{ name }}
    </span>
    <!-- <span v-if="sender" class="w-full text-right pr-12 text-gray-400 text-sm">
      You
    </span> -->
    <div class="flex items-end" :class="sender ? 'flex-row-reverse' : ''">
      <img class="h-8 w-8 m-1 rounded-full" :src="photoURL" alt="" />
      <div
        class="w-content max-w-md p-3 rounded-xl break-words"
        :class="sender ? 'bg-teal-700' : 'bg-gray-600'"
      >
        {{ text }}
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  name: String,
  photoURL: String,
  sender: Boolean,
  text: String,
});
</script>
