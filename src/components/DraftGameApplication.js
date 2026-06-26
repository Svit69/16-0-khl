import { DocumentMetadataService } from './DocumentMetadataService.js';
import { BoardSelectionService } from './BoardSelectionService.js';
import { HomePageComponent } from './HomePageComponent.js';
import { RosterResultFormatter } from './RosterResultFormatter.js';
import { draftRosters } from '../data/draftRosters.js';
import { getLocaleDictionary } from '../data/locales/index.js';

export class DraftGameApplication {
  #hostElement;
  #currentRosterIndex = 0;
  #localeCode = 'ru';
  #metadataService = new DocumentMetadataService();
  #boardSelectionService;
  constructor(hostElement) { this.#hostElement = hostElement; }
  initializeApplication() {
    this.#boardSelectionService = new BoardSelectionService(this.#hostElement);
    this.renderLocalizedPage();
    this.registerInteractiveControls();
  }
  registerInteractiveControls() { this.#hostElement.addEventListener('click', (event) => this.handleApplicationClick(event)); }
  handleApplicationClick(event) {
    if (event.target.matches('.chip')) this.activateSelectedChip(event.target);
    if (event.target.matches('.roll-btn')) this.displayNextDraftRoster();
    if (event.target.closest('.candidate-card')) this.#boardSelectionService.placeCandidateOnBoard(event.target.closest('.candidate-card'));
    if (event.target.matches('.lang-option')) this.changeApplicationLocale(event.target.dataset.locale);
    if (event.target.matches('.theme-toggle, .theme-toggle *')) this.toggleVisualTheme();
  }
  renderLocalizedPage() {
    const dictionary = getLocaleDictionary(this.#localeCode);
    new HomePageComponent(this.#hostElement, dictionary).mountComponent();
    this.#metadataService.applyLocalizedMetadata(dictionary);
  }
  activateSelectedChip(button) {
    button.parentElement.querySelectorAll('.chip').forEach((chip) => chip.classList.remove('is-active'));
    button.classList.add('is-active');
  }
  displayNextDraftRoster() {
    const roster = draftRosters[this.#currentRosterIndex % draftRosters.length];
    const formatter = new RosterResultFormatter(getLocaleDictionary(this.#localeCode));
    this.#currentRosterIndex += 1;
    const target = this.#hostElement.querySelector('.roll-state');
    target.closest('.roll-panel').classList.add('is-revealed');
    target.innerHTML = formatter.createRosterResultMarkup(roster);
  }
  changeApplicationLocale(localeCode) { this.#localeCode = localeCode; this.renderLocalizedPage(); }
  toggleVisualTheme() { document.documentElement.classList.toggle('theme-night'); }
}
