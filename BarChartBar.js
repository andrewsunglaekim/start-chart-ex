class BarChartBar {
  constructor({ value, index, chartHeight, chartWidth, suffix, rangeX, rangeY }) {
    this.value = value
    this.index = index;
    this.chartHeight = chartHeight;
    this.chartWidth = chartWidth;
    this.suffix = suffix;
    this.rangeX = rangeX;
    this.rangeY = rangeY;
    this.width = 25;
    this.createEl();
    this.setStyles();
  }

  createEl() {
    this.el = document.createElement('div');
    this.el.innerHTML = this.value;
    this.el.className = 'bar-chart__bar';
  }

  getTranslateX() {
    const translateX = this.chartWidth * this.index / this.rangeX;
    const midwayIncrement = this.chartWidth / this.rangeX / 2
    return `${translateX + midwayIncrement - (this.width / 2)}${this.suffix}`;
  }

  getHeight() {
    const height = this.chartHeight * this.value / this.rangeY + 14;
    return `${height}${this.suffix}`;
  }

  setStyles() {
    const transformValue = `translateX(${this.getTranslateX()})`;
    this.el.style.transform = transformValue;
    this.el.style.height = this.getHeight();
    this.el.style.width = `${this.width}px`
  }
}
