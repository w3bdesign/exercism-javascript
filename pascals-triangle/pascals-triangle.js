export class Triangle {
  constructor(rowCount) {
    this.triangleRows = this.setRows(rowCount);
  }

  get lastRow() {
    return this.triangleRows[this.triangleRows.length - 1];
  }

  get rows() {
    return this.triangleRows;
  }
  setRows(rowCount) {
    const computedRows = [[1]];

    for (let i = 1; i < rowCount; i++) {
      let curRow = this.computeCurRow(computedRows[i - 1]);
      computedRows.push(curRow);
    }
    return computedRows;
  }

  computeCurRow(row) {
    const curRow = [];
    for (let i = 0; i <= row.length; i++) {
      if (i === 0) {
        curRow.push(row[0]);
      } else if (i === row.length) {
        curRow.push(row[row.length - 1]);
      } else {
        curRow.push(row[i] + row[i - 1]);
      }
    }
    return curRow;
  }
}
