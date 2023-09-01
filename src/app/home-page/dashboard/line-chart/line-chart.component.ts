import { Component, } from '@angular/core';
//or
import { Chart, registerables } from 'chart.js';
@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent {
  public chart: any;

  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {

    this.chart = new Chart("MyChart", {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['2023-09-01', '2023-09-02', '2023-09-03', '2023-09-04',
          '2023-09-05', '2023-09-06', '2023-09-07',],
        datasets: [
          {
            label: "Hours Watched",
            data: ['1', '2', '3', '4', '5',
              '6', '7', '8'],
            backgroundColor: 'lightblue'
          },

        ]
      },
      options: {
        aspectRatio: 3
      }

    });
  }
}
