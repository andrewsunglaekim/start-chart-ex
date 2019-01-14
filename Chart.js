class Chart {
  constructor({ height, width, suffix, data, className}) {
    this.height = height;
    this.width = width;
    this.suffix = suffix;
    this.data = data;
    this.createEl(className);
    this.setStyles();
  }

  createEl(className) {
    this.el = document.createElement('div');
    this.el.className = className
  }

  setStyles() {
    this.el.style.width = `${this.width}${this.suffix}`
    this.el.style.height = `${this.height}${this.suffix}`
  }

  getRangeY() {
    const min = Math.min(...this.data);
    const max = Math.max(...this.data);
    return max - min;
  }
}
