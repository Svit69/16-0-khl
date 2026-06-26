import { RenderableComponent } from './RenderableComponent.js';
import { guideSections } from '../data/guideContent.js';

export class GuideSectionComponent extends RenderableComponent {
  render() {
    return this.createElementFromMarkup(`<section class="seo-home" aria-label="16-0 game guide">
      <div class="seo-inner">${this.renderIntro()}${this.renderGuideCards()}</div>
    </section>`);
  }

  renderIntro() {
    return `<section class="seo-section seo-media-row"><div class="seo-copy">
      <span class="eyebrow">${guideSections[0][0]}</span><h2>${guideSections[0][1]}</h2>
      <p>${guideSections[0][2]}</p></div><figure class="seo-figure">
      <img src="/16-0-hockey.png" width="720" height="960" loading="lazy"
      alt="16-0 board with an ice rink, puck, dice, and hockey draft cards">
      <figcaption>Draw a roster, protect the line, and chase a 16-0 result.</figcaption></figure></section>`;
  }

  renderGuideCards() {
    return guideSections.slice(1).map(([eyebrow, title, copy]) =>
      `<article class="seo-section"><span class="eyebrow">${eyebrow}</span>
      <h2>${title}</h2><p>${copy}</p></article>`).join('');
  }
}
