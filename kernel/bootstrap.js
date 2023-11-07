import { core } from "./core.js";
export const bootstrap = () => {
  const load = async () => {
    for (const module in core) {
      core[module]();
    }
  };

  return {
    load,
  };
};
