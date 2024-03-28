import { EventBus } from 'quasar';
import { boot } from 'quasar/wrappers';

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files

const SHUTTLE_BUS = 'shuttle-bus';
const KEEP_ALIVE_EVENT = 'take-keepalive-bus';

export default boot(({ app }) => {
  const bus = new EventBus();
  app.provide(SHUTTLE_BUS, bus);
});

export { SHUTTLE_BUS, KEEP_ALIVE_EVENT };
