import React, { Component } from "react";
import Chart from "react-apexcharts";

class CircleChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        colors: ['#111'],
        stroke: {
          lineCap: "round",
        },

        plotOptions: {
          radialBar: {
            dataLabels: {
              show: true,
              name: {
                show: false,
              },
              value: {
                show: true,
                fontSize: '24px',
                offsetY: 16,
              },
            },
          },
        },
      },
      
      series: [83],
    }
  }

  render() {
    return (
      <div className="donut">
        <Chart options={this.state.options} series={this.state.series} type="radialBar" width="200" />
      </div>
    );
  }
};

export default CircleChart;
