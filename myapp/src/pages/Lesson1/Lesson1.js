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
              categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
            }
          },
          series: [{
            name: ['Value'],
            data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
          }]
        }
      }

      render() {
        return (
            <>
            <div className="bg-grafico">
                <div className="apexchart-example">
                    <Chart options={this.state.options} series={this.state.series} type="bar" width={500} height={320} />
                </div>
            </div>
            </>
        )
      }
}
