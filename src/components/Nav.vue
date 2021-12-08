<template>
  <nav class="w-screen h-16 bg-gray-800 flex justify-center items-center">
    <div
      class="
        w-full
        px-2
        md:w-8/12
        lg:w-6/12
        h-full
        flex
        justify-between
        items-center
      "
    >
      <span class="flex flex-row items-center">
        <img src="/favicon.svg" class="h-14 m-0 mr-3" />
        <h1 class="font-extrabold text-4xl text-white invisible sm:visible">
          Balloons
        </h1>
      </span>
      <div
        class="
          flex
          items-center
          flex-row
          gap-x-2
          bg-teal-500
          px-3
          rounded-lg
          hover:bg-teal-600
          transition-all
        "
        v-if="isLogin"
      >
        <img :src="user.photoURL" class="h-8 w-8 my-2 rounded-full" alt="" />
        <button class="text-white font-semibold" @click="signOut">
          Signout
        </button>
      </div>
      <div
        class="
          flex
          items-center
          flex-row
          gap-x-2
          bg-teal-500
          py-2
          px-3
          text-white
          rounded-lg
          hover:bg-teal-600
          transition-all
        "
        v-if="!isLogin"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 my-1 text-white"
          viewBox="0 0 24 24"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            fill="currentColor"
            d="M3.064 7.51A9.996 9.996 0 0 1 12 2c2.695 0 4.959.99 6.69 2.605l-2.867 2.868C14.786 6.482 13.468 5.977 12 5.977c-2.605 0-4.81 1.76-5.595 4.123-.2.6-.314 1.24-.314 1.9 0 .66.114 1.3.314 1.9.786 2.364 2.99 4.123 5.595 4.123 1.345 0 2.49-.355 3.386-.955a4.6 4.6 0 0 0 1.996-3.018H12v-3.868h9.418c.118.654.182 1.336.182 2.045 0 3.046-1.09 5.61-2.982 7.35C16.964 21.105 14.7 22 12 22A9.996 9.996 0 0 1 2 12c0-1.614.386-3.14 1.064-4.49z"
          />
        </svg>
        <button
          v-if="!isLogin"
          class="text-white font-semibold"
          @click="signIn"
        >
          Signin
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useAuth } from "@/firebase";

const { user, isLogin, signOut, signIn } = useAuth();
</script>
