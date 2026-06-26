import { RenderableComponent } from './RenderableComponent.js';
import { ChipGroupComponent } from './ChipGroupComponent.js';
import { formations } from '../data/formations.js';

export class HeroComponent extends RenderableComponent {
  render() {
    const modes = new ChipGroupComponent('Mode · difficulty', ['Classic', 'Almanac']).render().outerHTML;
    const formation = new ChipGroupComponent('Line shape', formations).render().outerHTML;
    return this.createElementFromMarkup(`<section class="home-hero">
      <span class="eyebrow">16-0 game · hockey draft game · 1972 — 2026</span>
      <div class="home-mark"><span class="mark70 num"><span>16</span><span class="sep">–</span><span>0</span></span></div>
      <h1 id="home-title" class="home-headline"><span>16-0 game:</span><span><br>build your dream</span><span><br>hockey line</span></h1>
      <p class="home-sub">Play a 16-0 hockey game built for puck fans: roll a national team and tournament season, draft one real player at a time, and chase a perfect playoff run.</p>
      <div class="home-ctas"><button class="btn btn-primary home-cta-main" type="button">Play now</button>
      <a class="btn home-cta-friends" href="#play"><span>With friends</span><b>NEW</b></a></div>
      ${modes}<span class="modes-hint">Player strength is visible, so every pick has clear information.</span>${formation}
    </section>`);
  }
}
