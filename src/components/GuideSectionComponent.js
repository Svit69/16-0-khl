import { RenderableComponent } from './RenderableComponent.js';
import { guideSections } from '../data/guideContent.js';

export class GuideSectionComponent extends RenderableComponent {
  #dictionary;

  constructor(dictionary) {
    super();
    this.#dictionary = dictionary;
  }

  render() {
    return this.createElementFromMarkup(`<section class="seo-home" aria-label="16-0 game guide">
      <div class="seo-inner">${this.renderIntro()}${this.renderGuideCards()}</div>
    </section>`);
  }

  renderIntro() {
    const section = this.getSections()[0];
    return `<section class="seo-section seo-media-row"><div class="seo-copy">
      <span class="eyebrow">${section[0]}</span><h2>${section[1]}</h2><p>${section[2]}</p></div>
      <figure class="seo-figure"><img src="/16-0-hockey.png" width="720" height="960" loading="lazy"
      alt="${this.#dictionary.guideAlt}"><figcaption>${this.#dictionary.guideCaption}</figcaption></figure></section>`;
  }

  renderGuideCards() {
    return this.getSections().slice(1).map(([eyebrow, title, copy]) =>
      `<article class="seo-section"><span class="eyebrow">${eyebrow}</span><h2>${title}</h2><p>${copy}</p></article>`).join('');
  }

  getSections() {
    return guideSections[this.#dictionary.code];
  }
}
