import { RenderableComponent } from './RenderableComponent.js';
import { SetupPanelComponent } from './SetupPanelComponent.js';
import { RollPanelComponent } from './RollPanelComponent.js';
import { DraftPitchComponent } from './DraftPitchComponent.js';
import { SidePanelComponent } from './SidePanelComponent.js';

export class GameSectionComponent extends RenderableComponent {
  #dictionary;

  constructor(dictionary) {
    super();
    this.#dictionary = dictionary;
  }

  render() {
    return this.createElementFromMarkup(`<section id="play" class="home-game-section">
      <div class="game-section-head"><span class="eyebrow">${this.#dictionary.game.eyebrow}</span>
      <h2>${this.#dictionary.game.title}</h2><p>${this.#dictionary.game.copy}</p></div>
      <main><div class="draft-layout"><div class="col-roll">
      ${new SetupPanelComponent(this.#dictionary).render().outerHTML}${new RollPanelComponent(this.#dictionary).render().outerHTML}
      </div><div class="col-pitch">${new DraftPitchComponent().render().outerHTML}</div>
      ${new SidePanelComponent(this.#dictionary).render().outerHTML}</div></main>
    </section>`);
  }
}
