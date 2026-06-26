import { RenderableComponent } from './RenderableComponent.js';

export class FooterComponent extends RenderableComponent {
  render() {
    return this.createElementFromMarkup(`<footer class="site-footer">
      <div class="footer-inner"><div class="footer-meta">
        <span class="footer-credit">7a0 · build · simulate · 7-0 ·
        <span class="footer-links"><a href="#">Privacy</a><a href="#">Terms</a>
        <a href="#">Contact</a><a href="#">Disclaimer</a></span></span>
        <a class="kofi-btn" href="#top">Support 7a0</a>
      </div></div>
    </footer>`);
  }
}
