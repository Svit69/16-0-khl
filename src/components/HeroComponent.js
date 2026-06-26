import { RenderableComponent } from './RenderableComponent.js';
import { ChipGroupComponent } from './ChipGroupComponent.js';
import { formations } from '../data/formations.js';

export class HeroComponent extends RenderableComponent {
  #dictionary;

  constructor(dictionary) {
    super();
    this.#dictionary = dictionary;
  }

  render() {
    const modes = new ChipGroupComponent(this.#dictionary.hero.mode, this.#dictionary.hero.modes).render().outerHTML;
    const formation = new ChipGroupComponent(this.#dictionary.hero.lineShape, formations).render().outerHTML;
    return this.createElementFromMarkup(`<section class="home-hero">
      <span class="eyebrow">${this.#dictionary.hero.eyebrow}</span>
      <div class="home-mark"><span class="mark70 num"><span>16</span><span class="sep">–</span><span>0</span></span></div>
      <h1 id="home-title" class="home-headline">${this.renderTitle()}</h1>
      <p class="home-sub">${this.#dictionary.hero.subtitle}</p>
      <div class="home-ctas"><button class="btn btn-primary home-cta-main" type="button">${this.#dictionary.hero.play}</button>
      <a class="btn home-cta-friends" href="#play"><span>${this.#dictionary.hero.friends}</span><b>${this.#dictionary.hero.new}</b></a></div>
      ${modes}<span class="modes-hint">${this.#dictionary.hero.hint}</span>${formation}
    </section>`);
  }

  renderTitle() {
    return this.#dictionary.hero.title.map((line, index) => `<span>${index ? '<br>' : ''}${line}</span>`).join('');
  }
}
