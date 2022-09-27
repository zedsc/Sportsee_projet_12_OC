export default class SessionUserData {
  /**
   * Convert days with each letter of the day of the week instead of a number.
   * @param {object} data
   * @returns object formatted with day letters
   */

  constructor(data) {
    this._id = data.userId;
    this._arrayDays = this.convertNumberToDay();
    this._sessions = data.sessions.map((obj, index) => ({
      day: this._arrayDays[index],
      sessionLength: obj.sessionLength,
    }));
  }

  get id() {
    return this._id;
  }

  get sessions() {
    return this._sessions;
  }

  convertNumberToDay = () => {
    const nbToLetter = ["L", "M", "M", "J", "V", "S", "D"];
    return nbToLetter;
  };
}
