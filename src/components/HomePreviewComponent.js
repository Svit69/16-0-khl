import { RenderableComponent } from './RenderableComponent.js';
import { PitchMarkings } from './PitchMarkings.js';
import { legends } from '../data/legends.js';

export class HomePreviewComponent extends RenderableComponent {
  render() {
    return this.createElementFromMarkup(`<aside class="home-preview">
      <div class="home-pitch" aria-label="Dream line: world hockey legends">
        ${PitchMarkings.renderMarkup()}${this.renderLegendDiscs()}
      </div>
    </aside>`);
  }

  renderLegendDiscs() {
    return legends.map(([number, name, left, top]) => `<div class="hp-disc"
      style="left:${left}%;top:${top}%"><span class="hp-c num">${number}</span>
      <span class="hp-n">${name}</span></div>`).join('');
  }
}
