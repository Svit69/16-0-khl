import { RenderableComponent } from './RenderableComponent.js';

export class SidePanelComponent extends RenderableComponent {
  #dictionary;

  constructor(dictionary) {
    super();
    this.#dictionary = dictionary;
  }

  render() {
    return this.createElementFromMarkup(`<aside class="col-box side-panel">
      <div class="side-tabs" role="tablist" aria-label="${this.#dictionary.side.wall}">
        <button type="button" class="side-tab is-active">${this.#dictionary.side.top}</button>
        <button type="button" class="side-tab">${this.#dictionary.side.scorecard}</button>
      </div>
      <div class="leaderboard-iframe"><b>${this.#dictionary.side.wall}</b><span>${this.#dictionary.side.text}</span></div>
    </aside>`);
  }
}
