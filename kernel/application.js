import { bootstrap } from "./bootstrap.js";
import { core } from "./core.js";
export const Application = function (namespace) {
  window[namespace] = this;
  this.bootstrap = bootstrap();

  Object.defineProperties(this, {
    namespace: {
      get: () => namespace,
    },
    core: {
      get: () => core,
    },
  });
};
