import { Application } from "./kernel";

window.addEventListener("DOMContentLoaded", () => {
  new Application("kobayashi");
  kobayashi.bootstrap.load();
});
