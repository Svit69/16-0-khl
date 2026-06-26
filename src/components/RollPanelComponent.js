import { RenderableComponent } from './RenderableComponent.js';

export class RollPanelComponent extends RenderableComponent {
  #dictionary;

  constructor(dictionary) {
    super();
    this.#dictionary = dictionary;
  }

  render() {
    return this.createElementFromMarkup(`<section class="roll-panel">
      <div class="roll-idle roll-state"><p>${this.#dictionary.roll.idle}</p></div>
      <button class="btn btn-primary roll-btn" type="button">${this.#dictionary.roll.button}</button>
    </section>`);
  }
}
