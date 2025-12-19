<template>
  <div class="min-h-screen flex flex-col bg-black">
    <main class="h-[100svh] flex ">
      <div class="relative mx-auto  w-full max-w-screen-md px-2 py-6   bg-[url('/assets/images/main-bg.png')] bg-center bg-cover  flex  flex-col justify-center items-center space-y-4">
        
      
        
        <h1 class="text-[#d0d0b7] font-bold text-lg tracking-[2px] mb-10 font-kaisei uppercase">{{ item.title }}</h1>
          
        <div class="w-full flex px-6" v-for="message in item.messages" :key="message.id"  :class="message.userId === 0 ? 'justify-start' : 'justify-end'">
              <div class="min-w-36 max-w-64 h-16 px-4  text-black bg-white rounded-[1.5rem] flex flex-col justify-center items-start">
                <!-- <div class="text-xs font-semibold mb-1">
                  {{ message.userId === 0 ? 'séducteur' : 'Waltz19' }}
                </div> -->
                 <div class="text-xs leading-relaxed">
                  {{ message.text }}
                </div>

              </div>
           

        
        </div>


        <NuxtLink  to="/" class="fixed bottom-12 text-[#121212]  text-grenze  tracking-[2px] uppercase bg-[#d0d0b7] text-sm w-36 h-10 rounded-2xl">
            <button class="flex justify-center items-center w-full h-full">
    
                  Назад
          </button>
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