export default class ActivityUserData {
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
