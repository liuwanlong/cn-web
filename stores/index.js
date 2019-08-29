import HomeStore from "./home/HomeStore";
import themeStore from "./ThemeStore";

const isServer = !process.browser;

class Store {

  constructor(isServer, initialMobxState = {}) {
    this.homeStore = new HomeStore(initialMobxState["homeStore"]);
    this.themeStore = new themeStore(initialMobxState["themeStore"]);
  }

}

let store = null;

export default function initializeStore(initialData) {
  if (isServer) {
    return new Store(isServer, initialData);
  }
  if (store === null) {
    store = new Store(isServer, initialData);
  }
  return store;
}