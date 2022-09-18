export default class SessionUserData {
  constructor(data) {
    this._id = data.userId;
    this._arrayDays = this.convertNbToDay();
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

  convertNbToDay = () => {
    const nbToLetter = ["L", "M", "M", "J", "V", "S", "D"];
    return nbToLetter;
  };
}
