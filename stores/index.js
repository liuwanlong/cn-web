import HomeStore from "./home/HomeStore";

const isServer = !process.browser

class Store {

  constructor(isServer, initialMobxState = {}) {
    this.homeStore = new HomeStore(initialMobxState["homeStore"])
  }

}

let store = null;

export default function initializeStore(initialData) {
  if (isServer) {
    return new Store(isServer, initialData)
  }
  if (store === null) {
    store = new Store(isServer, initialData)
  }
  return store
}