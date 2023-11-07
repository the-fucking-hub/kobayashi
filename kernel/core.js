const _rDefault = (r) => r.default ?? r;
// TODO : async init fct
const initialization = (module) => module.init && module.init();
export const core = {
  testouille: () =>
    import("../components/testouille.js").then(_rDefault).then(initialization),
  test: () =>
    import("../components/test.js").then(_rDefault).then(initialization),
  router: () =>
    import("../components/Router.js").then(_rDefault).then(initialization),
};
