export class RosterResultFormatter {
  #localeCode;

  constructor(localeCode) {
    this.#localeCode = localeCode;
  }

  createRosterResultMarkup(roster) {
    return `<p><b>${this.getCountryName(roster)} ${roster[2]}</b><br>${roster[3]} · ${this.getRoleName(roster)} · ${roster[6]}</p>`;
  }

  getCountryName(roster) {
    return this.#localeCode === 'ru' ? roster[0] : roster[1];
  }

  getRoleName(roster) {
    return this.#localeCode === 'ru' ? roster[4] : roster[5];
  }
}
