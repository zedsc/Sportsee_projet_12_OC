export default class MainUserData {
  /**
   * @param {object} data
   * @returns object with formatted score
   */

  constructor(data) {
    this._id = data.id;
    this._firstName = data.userInfos.firstName;
    this._lastName = data.userInfos.lastName;
    this._age = data.userInfos.age;
    this._keyData = data.keyData;
    this._rawScore = data.score || data.todayScore;
    this._score = this.formatScore(this._rawScore);
  }

  get id() {
    return this._id;
  }

  get firstName() {
    return this._firstName;
  }

  get lastName() {
    return this._lastName;
  }

  get age() {
    return this._age;
  }

  get keyData() {
    return this._keyData;
  }

  get score() {
    return this._score;
  }

  formatScore(score) {
    return score * 100;
  }
}
