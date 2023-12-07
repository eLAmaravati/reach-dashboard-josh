import React, { Component } from "react";
import Chart from "react-apexcharts";

class ChartLine extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "line-chart-weekly",
          toolbar: {
          show: false,
        },
        },
        xaxis: {
          categories: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
          labels: {
            show: true,
          },
          tooltip: {
            enabled: false,
          },
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
              },
            },
            fixed: {
              enabled: false,
              position: 'top',
              offsetX: 0,
              offsetY: 0,
            },
            x: {
              show: false
            }
        },
        dataLabels: {
          enabled: false,
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
      <figure>
        <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="line"
              width="100%"
            />
        </div>
      </figure>
    );
  }
}

export default ChartLine;