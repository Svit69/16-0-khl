import { RenderableComponent } from './RenderableComponent.js';
import { ChipGroupComponent } from './ChipGroupComponent.js';
import { formations } from '../data/formations.js';

export class HeroComponent extends RenderableComponent {
  render() {
    const modes = new ChipGroupComponent('Mode · difficulty', ['Classic', 'Almanac']).render().outerHTML;
    const formation = new ChipGroupComponent('Formation', formations).render().outerHTML;
    return this.createElementFromMarkup(`<section class="home-hero">
      <span class="eyebrow">7-0 game · 7-0 World Cup game · 1970 — 2026</span>
      <div class="home-mark"><span class="mark70 num"><span>7</span><span class="sep">–</span><span>0</span></span></div>
      <h1 id="home-title" class="home-headline"><span>7-0 game:</span><span><br>build your dream</span><span><br>World Cup XI</span></h1>
      <p class="home-sub">Play a 7-0 football game built for World Cup fans: roll a national team and tournament year, draft one real player at a time, and chase a 7-0 statement.</p>
      <div class="home-ctas"><button class="btn btn-primary home-cta-main" type="button">Play now</button>
      <a class="btn home-cta-friends" href="#play"><span>With friends</span><b>NEW</b></a></div>
      ${modes}<span class="modes-hint">Player strength is visible, so every pick has clear information.</span>${formation}
    </section>`);
  }
}
