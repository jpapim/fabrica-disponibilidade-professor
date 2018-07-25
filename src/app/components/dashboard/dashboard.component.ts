import {Component, OnInit, AfterViewInit} from '@angular/core';
import {Chart} from 'chart.js';

@Component({
  selector: 'pj-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {

  canvas1: any;
  canvas2: any;
  canvas3: any;
  ctx1: any;
  ctx2: any;
  ctx3: any;

  constructor() {}

  ngAfterViewInit() {
    this.canvas1 = document.getElementById('myChart1');
    this.canvas2 = document.getElementById('myChart2');
    this.canvas3 = document.getElementById('myChart3');
    this.ctx1 = this.canvas1.getContext('2d');
    this.ctx2 = this.canvas2.getContext('2d');
    this.ctx3 = this.canvas3.getContext('2d');
    let mychart1 = new Chart(this.ctx1, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'My First dataset',
          backgroundColor: '#000',
          borderColor: '#000',
          data: [
            10,
            30,
            45,
            15,
            32,
            43,
            7
          ],
          fill: false,
        }]
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Chart.js Line Chart'
        },
        tooltips: {
          mode: 'index',
          intersect: false,
        },
        hover: {
          mode: 'nearest',
          intersect: true
        },
        scales: {
          xAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Month'
            }
          }],
          yAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Value'
            }
          }]
        }
      }
    });

    let mychart2 = new Chart(this.ctx2, {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'Dataset 1',
          backgroundColor: "#000",
          borderColor: "#000",
          borderWidth: 1,
          data: [
            10,
            30,
            45,
            15,
            32,
            43,
            7
          ]
        }]
      },
      options: {
          responsive: true,
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js Bar Chart'
          }
        }
    });

    let mychart3 = new Chart(this.ctx3, {
      type: 'pie',
      data: {
        labels: ["New", "In Progress", "On Hold"],
        datasets: [{
          label: '# of Votes',
          data: [1, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        display: true
      }
    });
  }

}
