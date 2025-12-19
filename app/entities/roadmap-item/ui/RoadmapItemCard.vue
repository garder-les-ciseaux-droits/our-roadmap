<template>
    <div class="roadmap-card">
    <span class="roadmap-date">
        {{ props.item.date }}
    </span>

    <span class="roadmap-title">
        {{ props.item.title }}
    </span>


    <NuxtLink :to="{ name: 'items-id', params: { id: item.id }}">
        <BaseButton
        v-if="item.hasButton"
        class="roadmap-button"
    >
        Подробнее
    </BaseButton>
    </NuxtLink>
    
    </div>

</template>

<script setup lang="ts">
import type { TypeRoadmapItem } from '../model/types'
import BaseButton from '~/shared/ui/BaseButton.vue';

const props = defineProps<{
  item: TypeRoadmapItem
}>()
</script>



<style>
.roadmap-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

}

/* дата */
.roadmap-date {
  font-family: 'Kaisei', serif;
  font-size: 1rem; /* text-xl */
  letter-spacing: 2px;
  text-shadow: 0 1px 8px rgba(255, 255, 255, 0.6);
}

/* заголовок */
.roadmap-title {
  font-family: 'Kaisei', serif;
  font-size: 0.8rem; /* text-md */
  letter-spacing: 2px;
  text-transform: uppercase;
  text-shadow: 0 1px 8px rgba(255, 255, 255, 0.6);
}

/* кнопка */
.roadmap-button {
  width: 9rem;       /* w-36 */
  height: 3rem;      /* h-12 */
  font-size: 12px;
  color: #000;
}

</style>