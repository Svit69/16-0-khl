import { RenderableComponent } from './RenderableComponent.js';

export class RollPanelComponent extends RenderableComponent {
  render() {
    return this.createElementFromMarkup(`<section class="roll-panel">
      <div class="roll-idle"><p>Roll to draw a nation and World Cup year</p></div>
      <button class="btn btn-primary roll-btn" type="button">Roll 🎲</button>
    </section>`);
  }
}
