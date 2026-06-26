import { HomePageComponent } from './HomePageComponent.js';
import { draftSquads } from '../data/draftSquads.js';

export class DraftGameApplication {
  #hostElement;
  #currentSquadIndex = 0;

  constructor(hostElement) {
    this.#hostElement = hostElement;
  }

  initializeApplication() {
    new HomePageComponent(this.#hostElement).mountComponent();
    this.registerInteractiveControls();
  }

  registerInteractiveControls() {
    this.#hostElement.addEventListener('click', (event) => {
      if (event.target.matches('.chip')) this.activateSelectedChip(event.target);
      if (event.target.matches('.roll-btn')) this.displayNextDraftSquad();
      if (event.target.matches('.theme-toggle, .theme-toggle *')) this.toggleVisualTheme();
    });
  }

  activateSelectedChip(button) {
    button.parentElement.querySelectorAll('.chip').forEach((chip) => chip.classList.remove('is-active'));
    button.classList.add('is-active');
  }

  displayNextDraftSquad() {
    const squad = draftSquads[this.#currentSquadIndex % draftSquads.length];
    this.#currentSquadIndex += 1;
    this.#hostElement.querySelector('.roll-idle').innerHTML = `<p><b>${squad[0]} ${squad[1]}</b><br>${squad[2]} · ${squad[3]} · ${squad[4]}</p>`;
  }

  toggleVisualTheme() {
    document.documentElement.classList.toggle('theme-night');
  }
}
