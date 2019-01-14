var data = [1, 14, 8, 12, 3];

const scatterChart = new ScatterPlotChart({
  height: 100,
  width: 500,
  suffix: 'px',
  data,
})

const mainEl = document.querySelector('.app__main');
mainEl.appendChild(scatterChart.el)
