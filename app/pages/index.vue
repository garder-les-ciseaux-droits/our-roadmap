

<template>
  <div class="min-h-screen flex flex-col  overflow-y-auto bg-black">
    <header class="h-[100svh] flex">
      <div class="relative mx-auto max-w-screen-md px-2 py-6  items-center flex  bg-[url('/assets/images/head-bg.png')] bg-center bg-cover">
          <img class="w-full max-w-none absolute bottom-0 min-w-full left-1/2 -translate-x-1/2 pointer-events-none select-none"  alt="" src="../assets/images/flowers.png"/>
          <nav class="absolute top-6 w-72 h-10 left-1/2 -translate-x-1/2 mx-auto rounded-full bg-white text-black text-md text-center flex items-center justify-center">
            <span class="font-grenze tracking-[3px]">journey begins here</span>
            <img class="absolute mt-4 pointer-events-none min-w-full select-none" alt="" src="/assets/images/nav-pat.svg"/>
          </nav>
          

          <div class="flex flex-col w-full items-center justify-center">
              <span class="font-atkinson text-white mb-2">from Ivan with love <3</span>
              <h1 class=" text-[2.5rem] flex font-semibold tracking-[25px] text-center font-kaisei text-[#d0d0b7]">Our love story</h1>
          

              <a href="#begin">
                <BaseButton  class="mt-24 relative active:bg-[#2f2f2f] active:text-white" aria-label="Начать">
                  <img class="w-36 absolute left-1/2 -translate-x-1/2 -top-24" alt="" src="../assets/gifs/kurumi.gif"/>
                  Начать
                </BaseButton>

              </a>
                
          </div>
        
      </div>
    </header>


    <main class="h-[100svh] bg-[url('/assets/images/main-back2.png')] md:bg-auto bg-cover bg-center flex">
      <div class="relative mx-auto w-full max-w-screen-md py-6 flex justify-center items-center mt-4">
          <img class="absolute left-1/2 -translate-x-1/2 top-0 inset-y-0 h-full pointer-events-none select-none" alt="" src="/assets/svg/line.svg"/>

          <div id="begin" class="grid grid-cols-2 gap-y-4  h-auto place-items-center">
             
                <template v-for="(item, i) in roadmapItems" :key="item.id">

              <div v-if="i % 2 === 1"></div>

              <RoadmapItemCard class="font-kaisei uppercase h-40 w-52 text-[#ffffd5] flex flex-col items-center text-center space-y-6 justify-center " :item="item" />

            
              <div v-if="i % 2 === 0"></div>

            </template>
          </div>
      </div>
    </main>

  </div>
</template>


<script setup>
import BaseButton from '../shared/ui/BaseButton.vue'
import { roadmapItems, RoadmapItemCard} from '../entities/roadmap-item/index.ts'

</script>