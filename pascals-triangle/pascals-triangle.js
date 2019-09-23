export class Triangle {
  constructor(triangleSize) {
    this.size = triangleSize;
    this.rows = [];
    console.log("Number of rows are: " + triangleSize);
  }

  get lastRow() {
    return [1];
  }

  get rows() {
    return [[1]];
  }
}
