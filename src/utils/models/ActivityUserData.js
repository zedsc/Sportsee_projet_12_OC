export default class ActivityUserData {
  /**
   * Converts activity sessions dates: from dates ("yyy-mm-dd") to month number ("1", "2",..).
   * @param {object} data
   * @returns an array of object with the day, kg, and kcal for each session
   */

  constructor(data) {
    this._id = data.userId;
    this._activity = data.sessions.map((session, index) => ({
      day: (index + 1).toString(),
      kg: session.kilogram,
      kcal: session.calories,
    }));
  }

  get id() {
    return this._id;
  }

  get activity() {
    return this._activity;
  }
}
