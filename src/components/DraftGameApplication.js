import { HomePageComponent } from './HomePageComponent.js';
import { draftRosters } from '../data/draftRosters.js';

export class DraftGameApplication {
  #hostElement;
  #currentRosterIndex = 0;

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
      if (event.target.matches('.roll-btn')) this.displayNextDraftRoster();
      if (event.target.matches('.theme-toggle, .theme-toggle *')) this.toggleVisualTheme();
    });
  }

  activateSelectedChip(button) {
    button.parentElement.querySelectorAll('.chip').forEach((chip) => chip.classList.remove('is-active'));
    button.classList.add('is-active');
  }

  displayNextDraftRoster() {
    const roster = draftRosters[this.#currentRosterIndex % draftRosters.length];
    this.#currentRosterIndex += 1;
    this.#hostElement.querySelector('.roll-idle').innerHTML = `<p><b>${roster[0]} ${roster[1]}</b><br>${roster[2]} · ${roster[3]} · ${roster[4]}</p>`;
  }

  toggleVisualTheme() {
    document.documentElement.classList.toggle('theme-night');
  }
}
