import { RenderableComponent } from './RenderableComponent.js';
import { SetupPanelComponent } from './SetupPanelComponent.js';
import { RollPanelComponent } from './RollPanelComponent.js';
import { DraftPitchComponent } from './DraftPitchComponent.js';
import { SidePanelComponent } from './SidePanelComponent.js';

export class GameSectionComponent extends RenderableComponent {
  render() {
    return this.createElementFromMarkup(`<section id="play" class="home-game-section">
      <div class="game-section-head"><span class="eyebrow">Draft zone / Start now</span>
      <h2>Play the 7-0 game now</h2><p>Choose a mode, lock in a formation, and start a fast 7-0 World Cup game.</p></div>
      <main><div class="draft-layout"><div class="col-roll">
      ${new SetupPanelComponent().render().outerHTML}${new RollPanelComponent().render().outerHTML}
      </div><div class="col-pitch">${new DraftPitchComponent().render().outerHTML}</div>
      ${new SidePanelComponent().render().outerHTML}</div></main>
    </section>`);
  }
}
