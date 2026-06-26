export class PitchMarkings {
  static renderMarkup() {
    return `<svg class="pitch-markings" viewBox="0 0 300 400"
      preserveAspectRatio="none" aria-hidden="true">
      <line x1="0" y1="120" x2="300" y2="120"></line><line x1="0" y1="200" x2="300" y2="200"></line>
      <line x1="0" y1="280" x2="300" y2="280"></line><circle cx="150" cy="200" r="42"></circle>
      <circle cx="150" cy="200" r="2.4" class="mk-fill"></circle>
      <circle cx="82" cy="90" r="28"></circle><circle cx="218" cy="90" r="28"></circle>
      <circle cx="82" cy="310" r="28"></circle><circle cx="218" cy="310" r="28"></circle>
      <path d="M100 0 Q150 42 200 0"></path><path d="M100 400 Q150 358 200 400"></path>
      <rect x="130" y="10" width="40" height="10"></rect><rect x="130" y="380" width="40" height="10"></rect>
    </svg>`;
  }
}
