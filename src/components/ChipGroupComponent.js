import { RenderableComponent } from './RenderableComponent.js';
import { ComponentCollection } from './ComponentCollection.js';

export class ChipGroupComponent extends RenderableComponent {
  #label;
  #options;

  constructor(label, options) {
    super();
    this.#label = label;
    this.#options = new ComponentCollection(options);
  }

  render() {
    return this.createElementFromMarkup(`<div class="home-modes">
      <span class="modes-label eyebrow">${this.#label}</span>
      <div class="modes-group" role="group" aria-label="${this.#label}">
        ${this.renderButtons()}
      </div>
    </div>`);
  }

  renderButtons() {
    return this.#options.mapItems((item, index) =>
      `<button class="chip ${index === 0 ? 'is-active' : ''}" type="button">${item}</button>`);
  }
}
