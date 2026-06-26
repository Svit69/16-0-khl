import { RenderableComponent } from './RenderableComponent.js';
import { ChipGroupComponent } from './ChipGroupComponent.js';
import { formations } from '../data/formations.js';

export class SetupPanelComponent extends RenderableComponent {
  render() {
    const formation = new ChipGroupComponent('Formation', formations).render().outerHTML;
    const style = new ChipGroupComponent('Style', ['Defensive', 'Balanced', 'Attacking']).render().outerHTML;
    const mode = new ChipGroupComponent('Mode · difficulty', ['Classic', 'Almanac']).render().outerHTML;
    return this.createElementFromMarkup(`<section class="play-setup sticker">
      ${formation}${style}${mode}
    </section>`);
  }
}
