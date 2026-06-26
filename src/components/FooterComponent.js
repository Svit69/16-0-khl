import { RenderableComponent } from './RenderableComponent.js';

export class FooterComponent extends RenderableComponent {
  render() {
    return this.createElementFromMarkup(`<footer class="site-footer">
      <div class="footer-inner"><div class="footer-meta">
        <span class="footer-credit">16-0 · draft · simulate · hockey ·
        <span class="footer-links"><a href="#">Privacy</a><a href="#">Terms</a>
        <a href="#">Contact</a><a href="#">Disclaimer</a></span></span>
        <a class="kofi-btn" href="#top">Support 16-0</a>
      </div></div>
    </footer>`);
  }
}
