import { RenderableComponent } from './RenderableComponent.js';

export class HeaderComponent extends RenderableComponent {
  render() {
    return this.createElementFromMarkup(`<header class="home-head">
      <nav class="home-nav" aria-label="Main navigation">
        <a class="home-brand" href="#top" aria-label="7a0 home">7a0</a>
        <div class="language-menu"><button class="lang-toggle" type="button">English</button>
          <div class="language-menu-panel" role="menu">
            <a lang="es" href="#">Español</a><a class="is-active" href="#">English</a>
            <a lang="pt" href="#">Português</a>
          </div>
        </div>
        <button class="theme-toggle" type="button"><span class="tt-label">Light</span></button>
      </nav>
    </header>`);
  }
}
