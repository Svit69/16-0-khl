import { RenderableComponent } from './RenderableComponent.js';
import { HeaderComponent } from './HeaderComponent.js';
import { HeroComponent } from './HeroComponent.js';
import { HomePreviewComponent } from './HomePreviewComponent.js';
import { GameSectionComponent } from './GameSectionComponent.js';
import { GuideSectionComponent } from './GuideSectionComponent.js';
import { FooterComponent } from './FooterComponent.js';

export class HomePageComponent extends RenderableComponent {
  render() {
    return this.createElementFromMarkup(`<div>
      <section id="top" class="home-wrap tx-paper" aria-labelledby="home-title">
        ${new HeaderComponent().render().outerHTML}<hr class="rule-ink">
        <div class="home-grid">${new HeroComponent().render().outerHTML}
        ${new HomePreviewComponent().render().outerHTML}</div>
        <footer class="home-foot"><div class="foot-counts"><span class="num">46</span>
        nations<span class="foot-dot">·</span><span class="num">177</span> squads
        <span class="foot-dot">·</span><span class="num">4.009</span> players</div></footer>
      </section>${new GameSectionComponent().render().outerHTML}
      ${new GuideSectionComponent().render().outerHTML}${new FooterComponent().render().outerHTML}
    </div>`);
  }
}
