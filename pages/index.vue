<script setup lang="ts">
import { sanitize } from '../purify'

const route = useRoute()
const sanitizedHTML = computed(() => sanitize(String(route.query.html ?? '')))
</script>
<template>
    <div v-html="sanitizedHTML"></div>
</template>
