import { RenderableComponent } from './RenderableComponent.js';

export class HeaderComponent extends RenderableComponent {
  #dictionary;

  constructor(dictionary) {
    super();
    this.#dictionary = dictionary;
  }

  render() {
    return this.createElementFromMarkup(`<header class="home-head">
      <nav class="home-nav" aria-label="Main navigation">
        <a class="home-brand" href="#top" aria-label="${this.#dictionary.nav.brandLabel}">16-0</a>
        <div class="language-menu" role="group" aria-label="Language">
          <button class="lang-option ${this.getActiveClass('ru')}" data-locale="ru" type="button">Русский</button>
          <button class="lang-option ${this.getActiveClass('en')}" data-locale="en" type="button">English</button>
        </div>
        <button class="theme-toggle" type="button"><span class="tt-label">${this.#dictionary.nav.theme}</span></button>
      </nav>
    </header>`);
  }

  getActiveClass(localeCode) {
    return this.#dictionary.code === localeCode ? 'is-active' : '';
  }
}
