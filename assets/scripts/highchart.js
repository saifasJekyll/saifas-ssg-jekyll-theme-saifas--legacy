Highcharts.setOptions({
  colors: ['#01BAF2', '#71BF45', '#FAA74B', '#E83535']
});
Highcharts.chart('container', {
  credits: {
    enabled: false
  },
  exporting: {
    enabled: false
  },
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie',
    height: 600,
    width: 600,
    responsive: {
      rules: {
        condition: {
          maxHeight: 600,
          maxWidth: 600,
          minHeight: 200,
          minWidth: 200
        },
        chartOptions: {
          legend: {
            align: 'center',
            verticalAlign: 'bottom',
            layout: 'horizontal'
          },
          yAxis: {
            labels: {
              align: 'left',
              x: 0,
              y: -5
            },
            title: {
              text: null
            }
          },
          subtitle: {
            text: null
          },
          credits: {
            enabled: true
          }
        }
      }
    }
  },
  title: {
    text: ''
  },
  legend: {
    // align: 'right',
    // verticalAlign: 'middle',
    // layout: 'vertical',
    // align: 'right',
    // verticalAlign: 'middle',
    // layout: 'vertical',
    itemMarginBottom: 10,
    itemStyle: {
      fontSize: 16,
      color: '#525252',
      fontFamily: 'Open Sans',
      fontWeight: 400
    }
  },
  tooltip: {
    pointFormat: ''
  },
  plotOptions: {
    pie: {
      allowPointSelect: false,
      cursor: 'pointer',
      dataLabels: {
        enabled: false
      },
      showInLegend: true
    }
  },
  series: [{
    name: 'Composition',
    colorByPoint: true,
    data: [{
      name: 'PowerBI',
      y: 67,
      events: {
        click: () => {document.location.href = "/powerbi/"}
      },
      sliced: true
    }, {
      name: 'Tableau',
      y: 13,
    }, {
      name: 'Google Data Studio',
      y: 10
    }, {
      name: 'Qlik',
      y: 10
    }]
  }]
});
