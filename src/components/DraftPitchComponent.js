import { RenderableComponent } from './RenderableComponent.js';
import { PitchMarkings } from './PitchMarkings.js';
import { emptySlots } from '../data/formations.js';

export class DraftPitchComponent extends RenderableComponent {
  #slots;

  constructor(slots = emptySlots) {
    super();
    this.#slots = slots;
  }

  render() {
    return this.createElementFromMarkup(`<section class="pitch">
      ${PitchMarkings.renderMarkup()}${this.renderSlots()}
    </section>`);
  }

  renderSlots() {
    return this.#slots.map(([role, left, top]) => `<button type="button" data-position="${role}"
      class="disc slot-empty" style="left:${left}%;top:${top}%">
      <span class="disc-circle">${role}</span></button>`).join('');
  }
}
