<template>
    <button class="bg-white rounded-full w-48 h-12 font-kaisei   text-center">
        <slot></slot>
    </button>
</template>

<style scoped>
.w-48 { width: 10rem; }
.h-12 { height: 3rem; }

.text-xs {
    font-size: 1rem;
}
</style>