class BarChart extends Chart {
  constructor(args) {
    super({
      ...args,
      className: 'bar-chart',
    });
    this.appendBars();
  }

  appendBars() {
    this.data.forEach((dataPoint, i) => {
      const barChartBar = new BarChartBar({
        value: dataPoint,
        index: i,
        chartHeight: this.height,
        chartWidth: this.width,
        suffix: this.suffix,
        rangeX: this.data.length,
        rangeY: this.getRangeY(),
      });
      this.el.appendChild(barChartBar.el);
    })
  }
}
