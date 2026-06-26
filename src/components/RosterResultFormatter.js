export class RosterResultFormatter {
  #dictionary;

  constructor(dictionary) {
    this.#dictionary = dictionary;
  }

  createRosterResultMarkup(roster) {
    return `<article class="draw-card draw-${roster.accent}">
      <span class="eyebrow">${this.#dictionary.roll.draw}</span>
      <h3>${roster.country[this.#dictionary.code]} ${roster.season}</h3>
      <p>${this.#dictionary.roll.choose}</p><div class="candidate-grid">${this.renderCandidates(roster)}</div>
    </article>`;
  }

  renderCandidates(roster) {
    return roster.candidates.map((candidate) => `<button class="candidate-card" type="button"
      data-name="${candidate[0]}" data-position="${candidate[1]}" data-rating="${candidate[4]}">
      <span class="candidate-position">${candidate[1]}</span><b>${candidate[0]}</b>
      <small>${this.#dictionary.roll.role}: ${this.getLocalizedRole(candidate)}</small>
      <strong>${this.#dictionary.roll.rating} ${candidate[4]}</strong>
    </button>`).join('');
  }

  getLocalizedRole(candidate) {
    return this.#dictionary.code === 'ru' ? candidate[2] : candidate[3];
  }
}
