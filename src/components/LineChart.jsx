import React, { Component } from "react";
import Chart from "react-apexcharts";

class LineChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "line-chart",

          toolbar: {
          show: false,
        },
        },
        xaxis: {
          categories: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"]
        },
        yaxis: {
          min: 0,
          max: 5,
          tickAmount: 5,
        },
        stroke: {
          curve: 'smooth',
          colors: ['#111'],
          width: 2
        },
        markers: {
          size: [7, 7],
          colors: ['#111']
        },
        fill: {
          colors: ['#111']
        },
        tooltip: {
          enabled: true,
            y: {
              formatter: function(val) {
                return val;
              }
            },
            fixed: {
              enabled: false,
              position: 'top',
              offsetX: 0,
              offsetY: 0,
            }
        },
        dataLabels: {
          enabled: true,
          enabledOnSeries: undefined,
          formatter: function(val) {
            return val + 'H';
          },
          offsetY: -10,
          
          background: {
            enabled: true,
            backgroundColor: '#111',
            foreColor: '#111',
            padding: 4,
            borderRadius: 2,
            dropShadow: {
              enabled: true,
            },
          },
        },
      },
      series: [
        {
          name: "Hour",
          data: [0, 1.5, 2.5, 1, 4, 2, 3.5]
        }
      ]
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="line"
              width="500"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default LineChart;