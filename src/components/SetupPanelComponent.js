import { RenderableComponent } from './RenderableComponent.js';
import { ChipGroupComponent } from './ChipGroupComponent.js';
import { formations } from '../data/formations.js';

export class SetupPanelComponent extends RenderableComponent {
  #dictionary;

  constructor(dictionary) {
    super();
    this.#dictionary = dictionary;
  }

  render() {
    const formation = new ChipGroupComponent(this.#dictionary.hero.lineShape, formations).render().outerHTML;
    const style = new ChipGroupComponent(this.#dictionary.setup.style, this.getStyleOptions()).render().outerHTML;
    const mode = new ChipGroupComponent(this.#dictionary.hero.mode, this.#dictionary.hero.modes).render().outerHTML;
    return this.createElementFromMarkup(`<section class="play-setup sticker">${formation}${style}${mode}</section>`);
  }

  getStyleOptions() {
    return [this.#dictionary.setup.checking, this.#dictionary.setup.balanced, this.#dictionary.setup.scoring];
  }
}
