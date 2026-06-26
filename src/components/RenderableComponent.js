export class RenderableComponent {
  constructor(hostElement = null) {
    if (new.target === RenderableComponent) {
      throw new TypeError('RenderableComponent is abstract');
    }
    this.hostElement = hostElement;
  }

  render() {
    throw new Error('Child component must implement render');
  }

  createElementFromMarkup(markup) {
    const template = document.createElement('template');
    template.innerHTML = markup.trim();
    return template.content.firstElementChild;
  }

  mountComponent() {
    this.hostElement.replaceChildren(this.render());
  }
}
