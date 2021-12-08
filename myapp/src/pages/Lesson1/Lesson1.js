import React, { Component } from 'react';
import Chart from 'react-apexcharts';
import './Lesson1.css';


export default class Lesson1 extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          options: {
            chart: {
              id: 'apexchart-example'
            },
            xaxis: {
              categories: props.categories
            }
          },
          series: [{
            name: ['Value'],
            data: props.data
          }]
        }
      }

      render() {
        return (
            <>
            <div className="bg-grafico">
            </div>
                <div className="apexchart-example">
                    <Chart options={this.state.options} series={this.state.series} type="bar" width={this.props.width} height={this.props.height} />
                </div>
            </>
        )
      }
}
