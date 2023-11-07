const Router = {
  init: () => {
    document.querySelectorAll("a.navlink").forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        console.log("link clicked");
        // const url = a.href
        // const url = a.getAttribute("href")
        // The href property returns the full URL while the getAttribute method will only return the pathname if that's what's in the attribute;
        // a can be event.target
        const url = event.target.getAttribute("href");
        Router.go(url);
      });
    });
    // Event Handler for URL changes
    window.addEventListener("popstate", (event) => {
      Router.go(event.state.route, false);
    });
    // Check the initial URL
    Router.go(location.pathname);
  },

  go: (route, addToHistory = true) => {
    console.log("go to", route);

    if (addToHistory) {
      history.pushState({ route }, null, route);
    }
    let pageElement;
    switch (route) {
      case "/":
        pageElement = document.createElement("h1");
        pageElement.textContent = "Menu";
        break;
      case "/order":
        pageElement = document.createElement("h1");
        pageElement.textContent = "Your Order";
        break;
      default:
        if (route.startsWith("/product-")) {
          pageElement = document.createElement("h1");
          pageElement.textContent = "Details";
          const paramId = route.substring(route.lastIndexOf("-") + 1);
          pageElement.dataset.id = paramId;
          pageElement.textContent += paramId;
        }
    }
    if (!pageElement) {
      return;
    }
    const cache = document.querySelector("#app");
    if (cache.children.length !== 0) {
      // cache.innerHTML=""
      cache.children[0].remove();
    }
    cache.appendChild(pageElement);
    window.scrollX = 0;
    window.scrollY = 0;
  },
};

export default Router;
