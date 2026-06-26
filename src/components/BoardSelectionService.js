export class BoardSelectionService {
  #hostElement;

  constructor(hostElement) {
    this.#hostElement = hostElement;
  }

  placeCandidateOnBoard(candidateButton) {
    const slot = this.findTargetSlot(candidateButton.dataset.position);
    if (!slot) return;
    slot.classList.remove('slot-empty');
    slot.classList.add('slot-filled');
    slot.innerHTML = this.createFilledSlotMarkup(candidateButton.dataset);
  }

  findTargetSlot(position) {
    const selector = `.disc[data-position="${position}"]`;
    return this.#hostElement.querySelector(`${selector}.slot-empty`) ?? this.#hostElement.querySelector(selector);
  }

  createFilledSlotMarkup(candidate) {
    return `<span class="disc-circle">${candidate.rating}</span><span class="disc-name">${candidate.name}</span>`;
  }
}
