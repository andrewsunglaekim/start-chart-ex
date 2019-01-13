class ScatterPlotChartPoint {
  constructor({ value, index, chartHeight, chartWidth, suffix, range }) {
    this.value = value
    this.index = index;
    this.chartHeight = chartHeight;
    this.chartWidth = chartWidth;
    this.suffix = suffix;

    this.setStyles()
  }

  createEl() {
    this.el = document.createElement('div');
    this.el.innerHTML = this.value;
    this.el.className = 'scatter-plot-chart__point';
  }

  setStyles() {
    const transformValue = `translate()`
  }

  height() {

  }
}
