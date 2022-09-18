export default class PerfUserData {
  constructor(dataPerf) {
    this._id = dataPerf.userId;
    this._translateKind = this.performanceKind();
    this._rawArrayPerf = dataPerf.data.map((obj, kind) => ({
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
