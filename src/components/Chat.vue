<template>
  <div
    class="
      w-full
      h-full
      md:px-2 md:w-8/12
      lg:w-6/12
      mx-auto
      px-4
      flex flex-col flex-1
      border-x-2 border-gray-900
      items-end
      justify-center
      text-white
    "
  >
    <div class="w-full h-80 flex flex-col flex-auto mb-0 overflow-y-auto my-0">
      <Message
        v-for="{ id, text, userPhotoURL, userName, userId } in messages"
        :key="id"
        :name="userName"
        :photoURL="userPhotoURL"
        :sender="userId === user?.uid"
        :text="text"
      />
      <div ref="bottom" class="mt-5" />
    </div>
    <div class="bg-gray-900 w-full p-1 bottom-0">
      <form
        class="w-full flex justify-between items-center"
        v-if="isLogin"
        @submit.prevent="send"
      >
        <input
          v-model="message"
          class="
            flex-grow
            justify-items-endm-2
            p-2
            rounded-full
            border-none
            text-gray-900
            break-words
          "
          placeholder="Message"
          required
        />
        <button class="h-10 w-10 ml-2" type="submit">
          <img src="/send.svg" />
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import Message from "@/components/Message.vue";
import { useAuth, useChat } from "@/firebase";
import { ref, watch, nextTick } from "vue";

const { user, isLogin } = useAuth();
const { messages, sendMessage } = useChat();

const bottom = ref(null);
watch(
  messages,
  () => {
    nextTick(() => {
      bottom.value?.scrollIntoView({ behavior: "smooth" });
    });
  },
  { deep: true }
);

const message = ref("");
const send = () => {
  sendMessage(message.value);
  message.value = "";
};
</script>
