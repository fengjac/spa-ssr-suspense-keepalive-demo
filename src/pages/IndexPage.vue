<template>
  <q-page class="column flex-center">
    <q-tabs>
      <q-route-tab name="first" label="First" to="/first" exact />
      <q-route-tab name="second" label="Second" to="/second" exact />
    </q-tabs>
    <RouterView v-slot="{ Component, route }">
      <template v-if="Component">
        <KeepAlive :include="includeKeepAliveRoute">
          <Suspense :timeout="0">
            <template #default>
              <component :is="Component" :key="route.name"></component>
            </template>
            <template #fallback>
              <div>Show loading here ...</div>
            </template>
          </Suspense>
        </KeepAlive>
      </template>
    </RouterView>
  </q-page>
</template>

<script setup lang="ts">
import { EventBus } from 'quasar';
import { KEEP_ALIVE_EVENT, SHUTTLE_BUS } from 'src/boot/bus';
import { inject, ref } from 'vue';

defineOptions({
  name: 'IndexPage',
});

const bus = inject(SHUTTLE_BUS, new EventBus());

const includeKeepAliveRoute = ref<string[]>([]);

bus.on(KEEP_ALIVE_EVENT, (name) => {
  console.debug(`[${name}] takes keepalive bus.`);

  if (!includeKeepAliveRoute.value.includes(name)) {
    includeKeepAliveRoute.value.push(name);
  }
});
</script>
