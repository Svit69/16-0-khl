import { RenderableComponent } from './RenderableComponent.js';
import { HeaderComponent } from './HeaderComponent.js';
import { HeroComponent } from './HeroComponent.js';
import { HomePreviewComponent } from './HomePreviewComponent.js';
import { GameSectionComponent } from './GameSectionComponent.js';
import { GuideSectionComponent } from './GuideSectionComponent.js';
import { FooterComponent } from './FooterComponent.js';

export class HomePageComponent extends RenderableComponent {
  #dictionary;

  constructor(hostElement, dictionary) {
    super(hostElement);
    this.#dictionary = dictionary;
  }

  render() {
    return this.createElementFromMarkup(`<div>
      <section id="top" class="home-wrap tx-paper" aria-labelledby="home-title">
        ${new HeaderComponent(this.#dictionary).render().outerHTML}<hr class="rule-ink">
        <div class="home-grid">${new HeroComponent(this.#dictionary).render().outerHTML}
        ${new HomePreviewComponent().render().outerHTML}</div>${this.renderCounts()}
      </section>${new GameSectionComponent(this.#dictionary).render().outerHTML}
      ${new GuideSectionComponent(this.#dictionary).render().outerHTML}${new FooterComponent(this.#dictionary).render().outerHTML}
    </div>`);
  }

  renderCounts() {
    const count = this.#dictionary.counts;
    return `<footer class="home-foot"><div class="foot-counts"><span class="num">${count[0]}</span>
      ${count[1]}<span class="foot-dot">·</span><span class="num">${count[2]}</span> ${count[3]}
      <span class="foot-dot">·</span><span class="num">${count[4]}</span> ${count[5]}</div></footer>`;
  }
}
