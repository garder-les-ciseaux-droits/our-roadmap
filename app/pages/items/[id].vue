<template>
  <div class="min-h-screen flex justify-center items-center bg-black overflow-hidden">
    <main class="w-full flex justify-center">

  
      <div
        class="
          relative
          w-full
          max-w-screen-md
          aspect-[9/16]
          bg-[url('/assets/images/main-bg.png')]
          bg-center
          bg-cover
          flex
          flex-col
          items-center
          justify-between
          px-4
          py-8
        "
      >


        <h1
          class="
            text-[#d0d0b7]
            font-kaisei
            uppercase
            tracking-[2px]
            text-base
            md:text-lg
            font-bold
            mt-10
          "
        >
          {{ item.title }}
        </h1>

      
        <div class="w-full flex flex-col space-y-3 mt-4">

          <div
            v-for="message in item.messages"
            :key="message.id"
            class="w-full flex"
            :class="message.userId === 0 ? 'justify-start' : 'justify-end'"
          >
            <div
              class="
                max-w-[70%]
                px-4
                py-2
                bg-white
                text-black
                rounded-2xl
                text-xs
                leading-relaxed
              "
            >
              {{ message.text }}
            </div>
          </div>

        </div>

      
        <NuxtLink
          to="/"
          class="
            mt-6
            w-36
            h-10
            bg-[#d0d0b7]
            rounded-2xl
            flex
            items-center
            justify-center
            font-grenze
            uppercase
            tracking-[2px]
            text-sm
            text-[#121212]
          "
        >
          Назад
        </NuxtLink>

      </div>
    </main>
  </div>
</template>


<script setup>
import { roadmapItems } from '~/entities/roadmap-item';
import { onMounted,ref } from 'vue';
const { id } = useRoute().params;

const item = roadmapItems.find(x => x.id === Number(id));
</script>

<style>

</style>