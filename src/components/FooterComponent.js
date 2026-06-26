import { RenderableComponent } from './RenderableComponent.js';

export class FooterComponent extends RenderableComponent {
  #dictionary;

  constructor(dictionary) {
    super();
    this.#dictionary = dictionary;
  }

  render() {
    return this.createElementFromMarkup(`<footer class="site-footer">
      <div class="footer-inner"><div class="footer-meta">
        <span class="footer-credit">${this.#dictionary.footer.credit}
        <span class="footer-links">${this.renderFooterLinks()}</span></span>
        <a class="kofi-btn" href="#top">${this.#dictionary.footer.support}</a>
      </div></div>
    </footer>`);
  }

  renderFooterLinks() {
    return this.#dictionary.footer.links.map((link) => `<a href="#">${link}</a>`).join('');
  }
}
