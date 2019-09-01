"use strict";

function transpose(a) {
  return Object.keys(a[0]).map(function(c) {
    return a.map(function(r) {
      return r[c];
    });
  });
}

export class Matrix {
  constructor(input) {
    let splitMatrix = input.split("\n");
    this.matrix = splitMatrix.map(row =>
      row.split(" ").map(row => Number(row))
    );
  }

  get rows() {
    return this.matrix;
  }

  get columns() {
    return transpose(this.rows);
  }
}
