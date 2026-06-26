export class ComponentCollection {
  #items;

  constructor(items = []) {
    this.#items = items;
  }

  mapItems(renderItem) {
    return this.#items.map(renderItem).join('');
  }

  getItems() {
    return [...this.#items];
  }
}
