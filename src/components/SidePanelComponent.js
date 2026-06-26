import { RenderableComponent } from './RenderableComponent.js';

export class SidePanelComponent extends RenderableComponent {
  render() {
    return this.createElementFromMarkup(`<aside class="col-box side-panel">
      <div class="side-tabs" role="tablist" aria-label="16-0 Wall">
        <button type="button" class="side-tab is-active">Top 100</button>
        <button type="button" class="side-tab">Scorecard</button>
      </div>
      <div class="leaderboard-iframe"><b>16-0 Wall</b><span>Top hockey drafts appear here.</span></div>
    </aside>`);
  }
}
