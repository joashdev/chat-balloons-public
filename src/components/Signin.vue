<template>
  <div
    class="
      w-full
      md:px-2 md:w-8/12
      lg:w-6/12
      m-auto
      px-4
      flex flex-col flex-1
      items-center
      justify-center
      gap-y-6
      text-white
    "
  >
    <h1 class="font-extrabold text-4xl">BALLOONS</h1>
    <img src="/favicon.svg" class="h-64" alt="" />
    <p class="mx-12">
      <i class="text-yellow-200 font-semibold">Balloon mail</i> is the transport
      of mail carrying the name of the sender by means of an unguided hydrogen
      or helium filled balloon.
    </p>
    <p class="mx-12">
      Now transformed to
      <i class="text-teal-300 font-semibold">Chat Balloons</i> a chat platform
      to send secure messages through the cloud.
    </p>
    <div
      class="
        inline-block
        w-48
        bg-teal-500
        py-2
        px-3
        m-3
        text-white
        rounded-lg
        hover:bg-teal-600
        transition-all
      "
      v-if="!isLogin"
    >
      <button
        class="
          text-white
          font-semibold
          w-full
          flex flex-row
          justify-center
          items-center
          gap-x-2
        "
        @click="signIn"
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
        Google Sign-in
      </button>
    </div>
  </div>
</template>

<script setup>
import { useAuth } from "@/firebase";
const { signIn } = useAuth();
</script>
