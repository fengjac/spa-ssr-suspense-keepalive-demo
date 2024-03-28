<template><div>first route vue</div></template>

<script setup lang="ts">
import { EventBus } from 'quasar';
import { KEEP_ALIVE_EVENT, SHUTTLE_BUS } from 'src/boot/bus';
import { sleep } from 'src/utils';
import { inject, onMounted } from 'vue';

const COMPONENT_NAME = 'FirstRoute';

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
