export class Triangle {
  constructor(triangleSize) {
    this.size = triangleSize;
    this.rows = [];    
  }

  get lastRow() {
    return [1];
  }

  get rows() {
    return [[1]];
  }
}
