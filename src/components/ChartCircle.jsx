import React, { Component } from "react";
import Chart from "react-apexcharts";

class ChartCircle extends Component {
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
                offsetY: 0,
              },
              value: {
                show: true,
                fontSize: '16px',
                offsetY: 5,
              },
            },
          },
        },
        labels: ['bananan'],
      },
      
      series: [83],
    }
  }

  render() {
    return (
      <div className="donut">
        <Chart options={this.state.options} series={this.state.series} type="radialBar" width="150" />
      </div>
    );
  }
};

export default ChartCircle;
