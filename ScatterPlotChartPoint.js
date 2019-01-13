class ScatterPlotChartPoint {
  constructor({ value, index, chartHeight, chartWidth, suffix, rangeX, rangeY }) {
    this.value = value
    this.index = index;
    this.chartHeight = chartHeight;
    this.chartWidth = chartWidth;
    this.suffix = suffix;
    this.rangeX = rangeX;
    this.rangeY = rangeY;
    this.height = 25;
    this.width = 25;
    this.createEl();
    this.setStyles();
  }

  createEl() {
    this.el = document.createElement('div');
    this.el.innerHTML = this.value;
    this.el.className = 'scatter-plot-chart__point';
  }

  setStyles() {
    const transformValue = `translate(${this.getTranslateX()}, ${this.getTranslateY()})`
    this.el.style.transform = transformValue;
    this.el.style.height = `${this.height}px`
    this.el.style.width = `${this.width}px`
  }

  getTranslateX() {
    const translateX = this.chartWidth * this.index / this.rangeX;
    const midwayIncrement = this.chartWidth / this.rangeX / 2
    return `${translateX + midwayIncrement - (this.width / 2)}${this.suffix}`;
  }

  getTranslateY() {
    const translateY = this.chartHeight * this.value / this.rangeY;
    return `-${translateY}${this.suffix}`;
  }
}
