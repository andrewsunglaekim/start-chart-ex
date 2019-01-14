class ScatterPlotChart extends Chart{
  constructor(args) {
    super({
      ...args,
      className: 'scatter-plot-chart'
    });
    this.appendPoints();
  }

  appendPoints() {
    this.data.forEach((dataPoint, i) => {
      const scatterPlotChartPoint = new ScatterPlotChartPoint({
        value: dataPoint,
        index: i,
        chartHeight: this.height,
        chartWidth: this.width,
        suffix: this.suffix,
        rangeX: this.data.length,
        rangeY: this.getRangeY(),
      });
      this.el.appendChild(scatterPlotChartPoint.el);
    })
  }
}
