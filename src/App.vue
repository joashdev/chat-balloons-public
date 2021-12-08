<script setup>
import { useAuth } from "./firebase";
import Nav from "@/components/Nav.vue";
import Signin from "@/components/Signin.vue";
import Chat from "./components/Chat.vue";

const { user, isLogin } = useAuth();
</script>

<template>
  <div class="w-screen h-screen flex flex-col">
    <Nav />
    <Signin v-if="!isLogin" />
    <Chat v-if="isLogin" />
  </div>
</template>
