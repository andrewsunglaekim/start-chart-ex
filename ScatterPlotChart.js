class ScatterPlotChart {
  constructor({ height, width, suffix, data }) {
    this.height = height;
    this.width = width;
    this.suffix = suffix;
    this.data = data;
    this.createEl();
    this.setStyles();
    this.appendPoints();
  }

  createEl() {
    this.el = document.createElement('div');
    this.el.className = 'scatter-plot-chart';
  }

  setStyles() {
    this.el.style.width = `${this.width}${this.suffix}`
    this.el.style.height = `${this.height}${this.suffix}`
  }

  appendPoints() {
    this.data.forEach((dataPoint, i) => {
      const scatterPlotChartPoint = new ScatterPlotChartPoint({
        value: dataPoint,
        index: i,
        chartHeight: this.height,
        chartWidth: this.width,
        suffix: this.suffix,
        range: this.range,
      });
      this.el.appendChild(scatterPlotChartPoint.el);
    })
  }

  range() {
    const min = Math.min(...this.data);
    const max = Math.max(...this.data);
    return { min, max };
  }
}
