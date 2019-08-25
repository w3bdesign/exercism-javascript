export class Matrix {
  constructor(input) {
    this.matrix = input
      .split("\n")
      .map(row => row.split(" ").map(row => parseInt(row)));
  }

  get rows() {
    return this.matrix;
  }

  get columns() {
    return this.rows[0].map((value, index) => this.rows.map(row => row[index]));
  }
}

new Matrix("1");
