export class PitchMarkings {
  static renderMarkup() {
    return `<svg class="pitch-markings" viewBox="0 0 300 400"
      preserveAspectRatio="none" aria-hidden="true">
      <line x1="0" y1="200" x2="300" y2="200"></line>
      <circle cx="150" cy="200" r="46"></circle>
      <circle cx="150" cy="200" r="2.4" class="mk-fill"></circle>
      <path d="M62 0 V60 H238 V0"></path><path d="M112 0 V22 H188 V0"></path>
      <circle cx="150" cy="40" r="2.4" class="mk-fill"></circle>
      <path d="M110.8 60 A44 44 0 0 0 189.2 60"></path>
      <path d="M62 400 V340 H238 V400"></path><path d="M112 400 V378 H188 V400"></path>
      <circle cx="150" cy="360" r="2.4" class="mk-fill"></circle>
      <path d="M110.8 340 A44 44 0 0 1 189.2 340"></path>
    </svg>`;
  }
}
