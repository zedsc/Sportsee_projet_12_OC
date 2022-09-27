export default class PerfUserData {
  /**
   * Associate the kind value (number) with each performance (string) from array translatePerf.
   * @param {object} data
   * @returns object with kind value replaced by strings
   */

  constructor(data) {
    this._id = data.userId;
    this._translateKind = this.performanceKind();
    this._rawArrayPerf = data.data.map((obj, kind) => ({
      value: obj.value,
      kind: this._translateKind[kind],
    }));
    this._arrayPerf = this._rawArrayPerf.reverse();
  }

  get id() {
    return this._id;
  }
  get arrayPerf() {
    return this._arrayPerf;
  }

  performanceKind = () => {
    const translatePerf = [
      "Cardio",
      "Energie",
      "Endurance",
      "Force",
      "Vitesse",
      "Intensité",
    ];
    return translatePerf;
  };
}
