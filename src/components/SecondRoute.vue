<template><div>second route vue</div></template>

<script setup lang="ts">
import { EventBus } from 'quasar';
import { SHUTTLE_BUS, KEEP_ALIVE_EVENT } from 'src/boot/bus';
import { sleep } from 'src/utils';
import { inject, onMounted } from 'vue';

const COMPONENT_NAME = 'SecondRoute';

defineOptions({
  name: COMPONENT_NAME,
});

const bus = inject(SHUTTLE_BUS, new EventBus());
await sleep(3000);

onMounted(() => {
  bus.emit(KEEP_ALIVE_EVENT, COMPONENT_NAME);
});
</script>

<style scoped lang="scss"></style>
